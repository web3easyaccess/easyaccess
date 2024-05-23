import { getContract, formatEther } from "viem";

import { publicClient } from "./client";

export async function getBalance(addr: string) {
  // const blockNumber = await client.getBlockNumber();
  var addrWithout0x = addr;
  if (addr.substring(0, 2) == "0x" || addr.substring(0, 2) == "0X") {
    addrWithout0x = addr.substring(2);
  }
  const balance = await publicClient.getBalance({
    address: `0x${addrWithout0x}`,
  });
  const balanceAsEther = formatEther(balance);
  return balanceAsEther;
}
