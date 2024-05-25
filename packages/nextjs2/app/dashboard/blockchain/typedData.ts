import { type TypedData } from "viem";

// _permit(address eoa, uint256 nonce, uint8 v, bytes32 r, bytes32 s)

// "web3easyaccess", "1.0"
export const domain = {
  name: "web3easyaccess",
  version: "1.0",
  chainId: 11155111,
  verifyingContract: "0xDE4D02e8018F549f0D2780d334ADa1F969FBa888",
} as const;

export const types = {
  _permit: [
    { name: "eoa", type: "address" },
    { name: "nonce", type: "uint256" },
  ],
} as const satisfies TypedData;
