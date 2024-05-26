import { privateKeyToAccount } from "viem/accounts";

import { signTypedData } from "@wagmi/core";
import { config } from "./config";
import { types } from "./typedData";

// https://wagmi.sh/core/api/actions/signTypedData

const signAuth = async (privateKey: `0x${string}`) => {
  console.log("resda=================>3333");
  const eoa = privateKeyToAccount(privateKey).address;
  console.log("resda=================>444",eoa);
  const nonce = BigInt(Date.parse(new Date().toString()));
  // const nonce = BigInt(+new Date());
  console.log("resda=================>11111",nonce);

  const message = {
    eoa: eoa,
    nonce: nonce,
  };
  console.log("resda=================>2222");

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
export default signAuth;

