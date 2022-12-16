import { ENS } from "@ensdomains/ensjs";
import { ethers } from "ethers";

export const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/806cc478903344c1bbea62753fb1e642"
);
export const ENSInstance = new ENS();
