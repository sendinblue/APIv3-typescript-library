export declare class GetSmsCampaignOverview {
    'id': number;
    'name': string;
    'status': GetSmsCampaignOverview.StatusEnum;
    'content': string;
    'scheduledAt'?: Date;
    'sender': string;
    'createdAt': Date;
    'modifiedAt': Date;
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
export declare namespace GetSmsCampaignOverview {
    enum StatusEnum {
        Draft,
        Sent,
        Archive,
        Queued,
        Suspended,
        InProcess
    }
}
