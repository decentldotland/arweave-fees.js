import { IStorageUnits } from "../types";
export declare function storageCostTable(): Promise<IStorageUnits>;
export declare function canUserUpload(): Promise<{}>;
export declare function canUploadUpTo(winstons: number): Promise<number>;
