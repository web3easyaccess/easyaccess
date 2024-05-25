export const abiQueryContractAddr = [
  {
    inputs: [
      { internalType: "address", name: "eoa", type: "address" },
      { internalType: "uint256", name: "nonce", type: "uint256" },
      { internalType: "bytes", name: "signature", type: "bytes" },
    ],
    stateMutability: "view",
    type: "function",
    name: "queryContractAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
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

export const abiPermitQueryOrRegister = [
  {
    inputs: [
      { internalType: "address", name: "eoa", type: "address" },
      { internalType: "uint256", name: "nonce", type: "uint256" },
      { internalType: "bytes", name: "signature", type: "bytes" },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "permitQueryOrRegister",
    outputs: [{ internalType: "address", name: "", type: "address" }],
  },
] as const;
