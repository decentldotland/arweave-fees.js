import { IStorageUnits } from "./types";
export declare function storageCostTable(): Promise<IStorageUnits>;
export declare function canUserUpload({ txObj }: {
    txObj?: {
        owner: string;
        reward: number;
    };
}): Promise<{
    canUpload: boolean;
    balanceWinstonBefore: number;
    balanceWinstonAfter: number;
    costInWinston: number;
    costInAr: number;
    costInUsd: number;
} | {
    canUpload?: undefined;
    balanceWinstonBefore?: undefined;
    balanceWinstonAfter?: undefined;
    costInWinston?: undefined;
    costInAr?: undefined;
    costInUsd?: undefined;
}>;
export declare function canUploadUpTo(winstons: number): Promise<number>;
