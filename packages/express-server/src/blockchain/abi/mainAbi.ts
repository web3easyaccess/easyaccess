export const abiQueryContractAddr = [
  {
    type: "function",
    name: "queryContractAddr",
    inputs: [
      { name: "eoa", type: "address", internalType: "address" },
      { name: "nonce", type: "uint256", internalType: "uint256" },
      { name: "signature", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
] as const;

export const abiPermitRegister = [
  {
    inputs: [
      { internalType: "address", name: "eoa", type: "address" },
      { internalType: "uint256", name: "nonce", type: "uint256" },
      { internalType: "bytes", name: "signature", type: "bytes" },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "permitRegister",
  },
] as const;

export const abiPermitChgOwnerPwd = [
  {
    type: "function",
    name: "permitChgOwnerPwd",
    inputs: [
      { name: "eoa", type: "address", internalType: "address" },
      { name: "nonce", type: "uint256", internalType: "uint256" },
      { name: "signature", type: "bytes", internalType: "bytes" },
      { name: "eoa2", type: "address", internalType: "address" },
      { name: "nonce2", type: "uint256", internalType: "uint256" },
      { name: "signature2", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;
