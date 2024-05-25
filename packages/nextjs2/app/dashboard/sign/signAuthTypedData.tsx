import { privateKeyToAccount } from "viem/accounts";

import { signTypedData } from "@wagmi/core";
import { config } from "./config";
import { types } from "./typedData";

// https://wagmi.sh/core/api/actions/signTypedData

const signAuth = async (privateKey: `0x${string}`) => {
  const eoa = privateKeyToAccount(privateKey).address;
  const nonce = BigInt(Date.parse(new Date().toString()));

  const message = {
    eoa: eoa,
    nonce: nonce,
  };

  // _permit(address eoa, uint256 nonce, uint8 v, bytes32 r, bytes32 s)
  const signature = await signTypedData(config, {
    types,
    primaryType: "_permit",
    message: {
      eoa: eoa,
      nonce: nonce,
    },
  });

  console.log("signature", signature);
  return { signature: signature, eoa: eoa, nonce: nonce };
};
