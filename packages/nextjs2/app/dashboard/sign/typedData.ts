import { type TypedData } from "viem";

// _permit(address eoa, uint256 nonce, uint8 v, bytes32 r, bytes32 s)

export const types = {
  _permit: [
    { name: "eoa", type: "address" },
    { name: "nonce", type: "uint256" },
  ],
} as const satisfies TypedData;
