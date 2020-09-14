export declare class GetAggregatedReport {
    'range'?: string;
    'requests'?: number;
    'delivered'?: number;
    'hardBounces'?: number;
    'softBounces'?: number;
    'clicks'?: number;
    'uniqueClicks'?: number;
    'opens'?: number;
    'uniqueOpens'?: number;
    'spamReports'?: number;
    'blocked'?: number;
    'invalid'?: number;
    'unsubscribed'?: number;
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
