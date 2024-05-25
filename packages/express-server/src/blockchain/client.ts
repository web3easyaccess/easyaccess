import { createPublicClient, http } from "viem";
import { sepolia, mainnet, localhost } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { createWalletClient, custom } from "viem";

import { morphHoleskyTestnet } from "./chainMorphHoleskyTestnet";

const currentNet = sepolia; // sepolia;
const currentRpcUrl = // localhost.rpcUrls.default.http[0];
  "https://eth-sepolia.g.alchemy.com/v2/UBel_pWBAqDuBkAHTtrnVvPPzAhPdfqW";

// local anvil提供的一个私钥
const currentPrivateKey =
  "0xeed8516535f76a54101329938daf4f1b0c4dca98f21172895c54ca135f1eba8f";
// 0x707a01ca104206ffffc5220fa4cd423f49829999

const publicClient = createPublicClient({
  batch: {
    multicall: true,
  },
  chain: currentNet,
  transport: http(currentRpcUrl),
});

export const walletClient = createWalletClient({
  chain: currentNet,
  transport: http(currentRpcUrl),
});

// console.log("walletClient--22-----:", walletClient);

export const account = privateKeyToAccount(currentPrivateKey);

const mainAddress = "0xDE4D02e8018F549f0D2780d334ADa1F969FBa888";

export { publicClient, mainAddress };
