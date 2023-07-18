import {
  getTxRewardsFromSize,
  getArPrice,
  _checkTxObject,
  arweave,
} from "./arweave";
import { converstionToBytes } from "./constants";
import { IStorageUnits } from "./types";

export async function storageCostTable(): Promise<IStorageUnits> {
  const def = { winston: 0, ar: 0, usd: 0 };
  const table: IStorageUnits = { KB: def, MB: def, GB: def, TB: def, PT: def };

  try {
    // 256 KiB
    const MinStorageSizeCost = await getTxRewardsFromSize(1024 * 256);
    const oneArPrice = await getArPrice();

    for (const unit in converstionToBytes) {
      const winston = MinStorageSizeCost * converstionToBytes[unit];

      table[unit] = {
        winston: winston,
        ar: winston * 1e-12,
        usd: winston * 1e-12 * oneArPrice,
      };
    }
  } catch (error) {
    console.log(error);
  }
  return table;
}

export async function canUserUpload({ txObj = { owner: '', reward: 0 } }) {
  try {
    await _checkTxObject(txObj);
    const oneArPrice = await getArPrice();

    const address = await arweave.wallets.ownerToAddress(txObj.owner);
    const balance = Number(await arweave.wallets.getBalance(address));

    return {
      canUpload: balance >= Number(txObj.reward) ? true : false,
      balanceWinstonBefore: balance,
      balanceWinstonAfter: balance - Number(txObj.reward),
      costInWinston: Number(txObj.reward),
      costInAr: Number(txObj.reward) * 1e-12,
      costInUsd: Number(txObj.reward) * 1e-12 * oneArPrice,
    };
  } catch (error) {
    console.log(error);
    return {}
  }
}

export async function canUploadUpTo(winstons: number) {
  try {
    if (!winstons || !Number.isInteger(winstons) || winstons <= 0) {
      return 0;
    }

    const storageTable = await storageCostTable();
    const costPerMb = storageTable.MB.winston;

    return winstons / costPerMb;
  } catch (error) {
    return 0;
  }
}
