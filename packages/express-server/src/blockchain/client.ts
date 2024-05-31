import { createPublicClient, http } from "viem";
import { sepolia, mainnet, localhost } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { createWalletClient, custom } from "viem";

import { morphHoleskyTestnet } from "./chainMorphHoleskyTestnet";

const currentNet = sepolia; // sepolia;
const currentRpcUrl = // localhost.rpcUrls.default.http[0];
  "https://eth-sepolia.g.alchemy.com/v2/xxxxxx";

// local anvil提供的一个私钥
const currentPrivateKey =
  "";
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

const mainAddress = "0x2CbF3FfFD865D8D5D427376fdF25f38c1666983A";

export { publicClient, mainAddress };
