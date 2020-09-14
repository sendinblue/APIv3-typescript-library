export declare class RequestSmsRecipientExport {
    'notifyURL'?: string;
    'recipientsType': RequestSmsRecipientExport.RecipientsTypeEnum;
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
export declare namespace RequestSmsRecipientExport {
    enum RecipientsTypeEnum {
        All,
        Delivered,
        Answered,
        SoftBounces,
        HardBounces,
        Unsubscribed
    }
}
