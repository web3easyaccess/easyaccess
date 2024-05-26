import {
  getContract,
  formatEther,
  parseEther,
  encodeAbiParameters,
  encodeFunctionData,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";

import { publicClient, walletClient } from "./client";

import { domain, types } from "./typedData";

// 需要修改   chainId 与 verifyingContract

const signAuth = async (privateKey: `0x${string}`) => {
  const account = privateKeyToAccount(privateKey);
  const eoa = privateKeyToAccount(privateKey).address;
  const nonce = BigInt(new Date().getTime());
  // const nonce = BigInt(123456);

  const signature = await walletClient.signTypedData({
    account,
    domain,
    types,
    primaryType: "_permit",
    message: {
      eoa: eoa,
      nonce: nonce,
    },
  });

  console.log(
    "answer:------ 0x64a7dfc20e062d5f0470db9772f0dd302c30dd59591cd9c97099cc2db2c96ed413d34d91a7a98316576ca5e9f2c20f868e7475ed4f4e8d3456e13223decfd3021c"
  );
  console.log("my-signature:", signature);
  return { signature: signature, eoa: eoa, nonce: nonce.toString() };
};

// signAuth("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80");
export default signAuth;
