import { createPublicClient, http } from "viem";
import { sepolia, mainnet, localhost } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { createWalletClient, custom } from "viem";

import { morphHoleskyTestnet } from "./chainMorphHoleskyTestnet";

const currentNet = sepolia; // sepolia;
const currentRpcUrl = // localhost.rpcUrls.default.http[0];
  "https://eth-sepolia.g.alchemy.com/v2/UBel_pWBAqDuBkAHTtrnVvPPzAhPdfqW";

// local anvil提供的一个私钥
const currentPrivateKey = process.env.
  // "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";



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

const mainAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";

export { publicClient, mainAddress };
