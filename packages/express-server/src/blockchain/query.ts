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
  abiPermitChgOwnerPwd,
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
 * 访问系统主合约，根据离线签名判断是否是新用户。新用户返回 0地址，老用户返回用户合约地址+gas 成本
 * @param eoa
 * @param nonce
 * @returns
 */
async function permitUser(
  eoa: `0x${string}`,
  nonce: bigint,
  signature: `0x${string}`
) {
  try {
    const ca = await publicClient.readContract({
      account: account,
      address: mainAddress,
      abi: abiQueryContractAddr,
      functionName: "queryContractAddr",
      args: [eoa, nonce, signature],
    });

    return { ca: ca, gasUsedInUsd: "0.000123" };
  } catch (e) {
    console.log("encodeAbiParameters error:", e);
    return;
  }
}

/**
 * 访问系统主合约，根据离线签名创建用户合约。
 * @param eoa
 * @param nonce
 */
async function permitRegister(
  eoa: `0x${string}`,
  nonce: bigint,
  signature: `0x${string}`
) {
  console.log(`regisiter called ... eoa= ${eoa}`);
  console.log(`regisiter called ... eoa22:`, nonce);
  console.log(`regisiter called ... eoa33:`, signature);

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
      abi: abiPermitRegister,
      functionName: "permitRegister",
      args: [eoa, nonce, signature],
    });

    console.log(`regisiter called22222 ... eoa= ${eoa}`);

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
 * @returns
 */
async function permitChgOwnerPwd(
  eoa: `0x${string}`,
  nonce: bigint,
  signature: `0x${string}`,
  eoa2: `0x${string}`,
  nonce2: bigint,
  signature2: `0x${string}`
) {
  console.log(`permitChgOwnerPwd called ... eoa= ${eoa}, eoa2=${eoa2}`);

  var encodedData;
  try {
    encodedData = encodeFunctionData({
      abi: abiPermitChgOwnerPwd,
      functionName: "permitChgOwnerPwd",
      args: [eoa, nonce, signature, eoa2, nonce2, signature2],
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
    console.log("encodeAbiParameters error2:", e);
    return;
  }
}

export { permitUser, permitRegister, permitChgOwnerPwd };
