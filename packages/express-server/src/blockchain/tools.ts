import { keccak256, toHex, getContract, formatEther } from "viem";

import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";


export function getPrivateKey(email: string, pin: string) {
  var s1 = "web3easyaccess:" + email;
  var s2 = "web3easyaccess:" + pin;
  var ss1 = keccak256(toHex(s1));
  var ss2 = keccak256(toHex(s2));
  var ss3 = ss1.substring(2) + ss2.substring(2);
  // console.log(ss1);
  // console.log(ss2);
  // console.log(ss3);
  const privateKey = keccak256(`0x${ss3}`);
  const account = privateKeyToAccount(privateKey);
  console.log(account.address);
  return privateKey;
}

getPrivateKey("123456@web3easyaccess.link", "123456");
