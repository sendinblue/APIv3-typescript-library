export declare class UpdateChildAccountStatus {
    'transactionalEmail'?: boolean;
    'transactionalSms'?: boolean;
    'marketingAutomation'?: boolean;
    'smsCampaign'?: boolean;
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
