import Arweave from "arweave";
export declare const arweave: Arweave;
export declare function getArPrice(): Promise<any>;
export declare function getTxRewardsFromSize(byteSize: number): Promise<any>;
export declare function _checkTxObject(txObj: any): Promise<boolean>;
