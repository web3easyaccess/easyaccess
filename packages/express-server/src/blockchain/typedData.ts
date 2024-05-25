import { type TypedData } from "viem";

// _permit(address eoa, uint256 nonce, uint8 v, bytes32 r, bytes32 s)

// "web3easyaccess", "1.0"
export const domain = {
  name: "web3easyaccess",
  version: "1.0",
  chainId: 31337,
  verifyingContract: "0x5615dEB798BB3E4dFa0139dFa1b3D433Cc23b72f",
} as const;

export const types = {
  _permit: [
    { name: "eoa", type: "address" },
    { name: "nonce", type: "uint256" },
  ],
} as const satisfies TypedData;
