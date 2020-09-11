export declare class GetContactCampaignStatsOpened {
    'campaignId': number;
    'count': number;
    'eventTime': Date;
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
