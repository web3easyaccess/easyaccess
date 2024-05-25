import { http, createConfig } from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";
import { getAccount, getEnsName } from "@wagmi/core";

import { type CreateConfigParameters } from "@wagmi/core";
import { injected } from "@wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(
      "https://eth-sepolia.g.alchemy.com/v2/jrvBMymLzPjSOTt6IoKelzCelQ4dRQGs"
    ),
  },
});
