export const abiQueryContractAddr = [
  {
    type: "function",
    name: "queryContractAddr",
    inputs: [
      { name: "eoa", type: "address", internalType: "address" },
      { name: "nonce", type: "uint256", internalType: "uint256" },
      { name: "v", type: "uint8", internalType: "uint8" },
      { name: "r", type: "bytes32", internalType: "bytes32" },
      { name: "s", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
] as const;

export const abiPermitRegister = [
  {
    type: "function",
    name: "permitRegister",
    inputs: [
      { name: "eoa", type: "address", internalType: "address" },
      { name: "nonce", type: "uint256", internalType: "uint256" },
      { name: "signature", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;
