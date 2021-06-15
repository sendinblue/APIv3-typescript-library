export declare class GetExtendedContactDetailsAllOfStatisticsOpened {
    'campaignId': number;
    'count': number;
    'eventTime': string;
    'ip': string;
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
