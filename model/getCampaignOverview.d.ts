export declare class GetCampaignOverview {
    'id': number;
    'name': string;
    'subject'?: string;
    'type': GetCampaignOverview.TypeEnum;
    'status': GetCampaignOverview.StatusEnum;
    'scheduledAt'?: string;
    'abTesting'?: boolean;
    'subjectA'?: string;
    'subjectB'?: string;
    'splitRule'?: number;
    'winnerCriteria'?: string;
    'winnerDelay'?: number;
    'sendAtBestTime'?: boolean;
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
export declare namespace GetCampaignOverview {
    enum TypeEnum {
        Classic,
        Trigger
    }
    enum StatusEnum {
        Draft,
        Sent,
        Archive,
        Queued,
        Suspended,
        InProcess
    }
}
