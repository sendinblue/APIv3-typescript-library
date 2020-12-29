export declare class GetTransacSmsReportReports {
    'date'?: string;
    'requests'?: number;
    'delivered'?: number;
    'hardBounces'?: number;
    'softBounces'?: number;
    'blocked'?: number;
    'unsubscribed'?: number;
    'replied'?: number;
    'accepted'?: number;
    'rejected'?: number;
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
