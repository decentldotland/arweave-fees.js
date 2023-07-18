export declare function checkFeeMultiplier({ txObj, feeMultiplier }: {
    txObj?: {
        data_size: number;
        reward: number;
    };
    feeMultiplier?: number;
}): Promise<{
    data_size: number;
    reward: number;
} | {
    txByteSize: number;
    theoreticalWinstonReward: any;
    actualWinstonReward: number;
    actualFeeMultiplier: number;
    testedAgainstMultiplier: number;
    isEqual: boolean;
}>;
