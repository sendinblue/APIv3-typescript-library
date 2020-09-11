export declare class GetEmailEventReportEvents {
    'email': string;
    'date': Date;
    'subject'?: string;
    'messageId': string;
    'event': GetEmailEventReportEvents.EventEnum;
    'reason'?: string;
    'tag'?: string;
    'ip'?: string;
    'link'?: string;
    'from'?: string;
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
export declare namespace GetEmailEventReportEvents {
    enum EventEnum {
        Bounces,
        HardBounces,
        SoftBounces,
        Delivered,
        Spam,
        Requests,
        Opened,
        Clicks,
        Invalid,
        Deferred,
        Blocked,
        Unsubscribed
    }
}
