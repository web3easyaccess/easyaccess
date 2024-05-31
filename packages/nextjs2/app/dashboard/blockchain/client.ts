import { createPublicClient, http } from "viem";
import { sepolia, mainnet, localhost } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { createWalletClient, custom } from "viem";

const currentNet = sepolia; // sepolia;
const currentRpcUrl = // localhost.rpcUrls.default.http[0];
  "https://eth-sepolia.g.alchemy.com/v2/xxxxxx";

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

export { publicClient };
