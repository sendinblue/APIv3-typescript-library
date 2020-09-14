export declare class GetSmsCampaignStats {
    'delivered': number;
    'sent': number;
    'processing': number;
    'softBounces': number;
    'hardBounces': number;
    'unsubscriptions': number;
    'answered': number;
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
