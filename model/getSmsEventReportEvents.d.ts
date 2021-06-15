export declare class GetSmsEventReportEvents {
    'phoneNumber'?: string;
    'date'?: string;
    'messageId'?: string;
    'event'?: GetSmsEventReportEvents.EventEnum;
    'reason'?: string;
    'reply'?: string;
    'tag'?: string;
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
export declare namespace GetSmsEventReportEvents {
    enum EventEnum {
        Bounces,
        HardBounces,
        SoftBounces,
        Delivered,
        Sent,
        Accepted,
        Unsubscription,
        Replies,
        Blocked
    }
}
