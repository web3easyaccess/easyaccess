import { http, createConfig } from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";

export const configxxxx = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

export const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(
      "https://eth-sepolia.g.alchemy.com/v2/jrvBMymLzPjSOTt6IoKelzCelQ4dRQGs"
    ),
  },
});
