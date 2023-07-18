export interface IStorageUnit {
  winston: number;
  ar: number;
  usd: number;
}

export interface IStorageUnits {
  KB: IStorageUnit;
  MB: IStorageUnit;
  GB: IStorageUnit;
  TB: IStorageUnit;
  PT: IStorageUnit;
}
