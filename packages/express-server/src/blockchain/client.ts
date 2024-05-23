import { createPublicClient, http } from "viem";
import { sepolia, mainnet } from "viem/chains";

const publicClient = createPublicClient({
  batch: {
    multicall: true,
  },
  chain: sepolia,
  transport: http(
    "https://eth-sepolia.g.alchemy.com/v2/UBel_pWBAqDuBkAHTtrnVvPPzAhPdfqW"
  ),
});

export { publicClient };
