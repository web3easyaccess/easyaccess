import {
  getContract,
  formatEther,
  parseEther,
  encodeAbiParameters,
  encodeFunctionData,
} from "viem";

import { publicClient, account, mainAddress, walletClient } from "./client";

import {
  abiQueryContractAddr,
  abiPermitRegister,
  abiPermitQueryOrRegister,
} from "./abi/mainAbi";

export async function getBalance(addr: string) {
  // const blockNumber = await client.getBlockNumber();
  var addrWithout0x = addr;
  if (addr.substring(0, 2) == "0x" || addr.substring(0, 2) == "0X") {
    addrWithout0x = addr.substring(2);
  }
  const balance = await publicClient.getBalance({
    address: `0x${addrWithout0x}`,
  });
  const balanceAsEther = formatEther(balance);
  return balanceAsEther;
}

/**
 * 访问系统主合约，根据离线签名判断是否是新用户。新用户返回 0，老用户返回用户合约地址+gas 成本
 * @param eoa
 * @param nonce
 * @param v
 * @param r
 * @param s
 * @returns
 */
async function permitUser(
  eoa: `0x${string}`,
  nonce: bigint,
  signature: `0x${string}`
) {
  const ca = await publicClient.readContract({
    address: mainAddress,
    abi: abiQueryContractAddr,
    functionName: "queryContractAddr",
    args: [eoa, nonce, signature],
  });

  if (ca == "0x0") {
    return "0x0";
  } else {
    return ca;
  }
}

/**
 * 访问系统主合约，根据离线签名创建用户合约。
 * @param eoa
 * @param nonce
 * @param v
 * @param r
 * @param s
 * @returns
 */
async function permitRegister(
  eoa: `0x${string}`,
  nonce: bigint,
  signature: `0x${string}`
) {
  console.log(`regisiter called ... eoa= ${eoa}`);

  var encodedData;
  try {
    // encodedData = encodeAbiParameters(
    //   [
    //     { name: "eoa", type: "address" },
    //     { name: "nonce", type: "uint256" },
    //     { name: "v", type: "uint8" },
    //     { name: "r", type: "bytes32" },
    //     { name: "s", type: "bytes32" },
    //   ],
    //   [eoa, nonce, v, r, s]
    // );

    encodedData = encodeFunctionData({
      abi: abiPermitQueryOrRegister,
      functionName: "permitQueryOrRegister",
      args: [eoa, nonce, signature],
    });

    const hash = await walletClient.sendTransaction({
      account,
      to: mainAddress,
      value: 0n, // parseEther("0.0"),
      data: encodedData,
    });

    console.log(`regisiter, eoa= ${eoa}, trans:${hash}`);

    // const transaction = await publicClient.getTransaction({
    //   hash: hash,
    // });
    // console.log("permitRegister,trans:", transaction);

    permitUser(eoa, nonce, signature).then((x) => {
      return x;
    });
  } catch (e) {
    console.log("encodeAbiParameters error:", e);
    return;
  }
}

/**
 * 访问系统主合约，验证两个离线签名并修改密码（实际是修改ca的owner）。
 * @param eoa
 * @param nonce
 * @param v
 * @param r
 * @param s
 * @returns
 */
async function permitChgOwnerPwd(
  eoa: `0x${string}`,
  nonce: bigint,
  v: number,
  r: `0x${string}`,
  s: `0x${string}`,

  eoa2: `0x${string}`,
  nonce2: bigint,
  v2: number,
  r2: `0x${string}`,
  s2: `0x${string}`
) {}

export { permitUser, permitRegister, permitChgOwnerPwd };
