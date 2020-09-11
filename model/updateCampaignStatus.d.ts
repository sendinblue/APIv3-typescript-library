export declare class UpdateCampaignStatus {
    'status'?: UpdateCampaignStatus.StatusEnum;
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
export declare namespace UpdateCampaignStatus {
    enum StatusEnum {
        Suspended,
        Archive,
        Darchive,
        Sent,
        Queued,
        Replicate,
        ReplicateTemplate,
        Draft
    }
}
