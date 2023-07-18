import axios from "axios";
import { ARWEAVE_GATEWAY } from "./constants";

export async function getArPrice() {
  try {
    const priceFromRedstone = (await axios.get("https://api.redstone.finance/prices?symbol=AR&provider=redstone&limit=1")).data[0].value;
    const price = priceFromRedstone
      ? priceFromRedstone
      : await ArPriceCoingecko();
    return price;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}

export async function getTxRewardsFromSize(byteSize: number) {
  try {
    const winstons = (await axios.get(`${ARWEAVE_GATEWAY}/price/${byteSize}`))
      .data;
    return winstons;
  } catch (error) {
    console.log(error);
  }
}

// HELPER FUNCTIONS

export async function _checkTxObject(txObj: any) {
  try {
    const requiredKeys = [
      "format",
      "id",
      "last_tx",
      "owner",
      "tags",
      "target",
      "quantity",
      "data_size",
      "data",
      "data_root",
      "reward",
      "signature",
      "chunks",
    ];

    for (const key in txObj) {
      if (!requiredKeys.includes(key)) {
        throw new Error(
          `ERROR: invalid Arweave Transaction Object Has Been Passed`
        );
      }
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function ArPriceCoingecko() {
  try {
    const res = (
      await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=arweave&vs_currencies=usd"
      )
    ).data;

    if (res.arweave) {
      return res.arweave.usd;
    }

    throw new Error(`Error fetching AR price from coingecko`);
  } catch (error) {
    console.log(error);
  }
}
