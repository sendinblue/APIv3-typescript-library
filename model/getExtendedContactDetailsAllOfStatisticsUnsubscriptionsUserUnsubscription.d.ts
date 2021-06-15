export declare class GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription {
    'campaignId': number;
    'eventTime': string;
    'ip'?: string;
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
