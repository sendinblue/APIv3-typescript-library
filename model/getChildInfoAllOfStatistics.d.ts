export declare class GetChildInfoAllOfStatistics {
    'previousMonthTotalSent'?: number;
    'currentMonthTotalSent'?: number;
    'totalSent'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
