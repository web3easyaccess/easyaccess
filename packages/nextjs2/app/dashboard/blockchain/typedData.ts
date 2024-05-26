import { type TypedData } from "viem";

// _permit(address eoa, uint256 nonce, uint8 v, bytes32 r, bytes32 s)

// "web3easyaccess", "1.0"
export const domain = {
  name: "web3easyaccess",
  version: "1.0",
  chainId: 11155111,
  verifyingContract: "0x2CbF3FfFD865D8D5D427376fdF25f38c1666983A",
} as const;

export const types = {
  _permit: [
    { name: "eoa", type: "address" },
    { name: "nonce", type: "uint256" },
  ],
} as const satisfies TypedData;
