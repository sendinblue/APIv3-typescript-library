export declare class EmailExportRecipients {
    'notifyURL'?: string;
    'recipientsType': EmailExportRecipients.RecipientsTypeEnum;
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
export declare namespace EmailExportRecipients {
    enum RecipientsTypeEnum {
        All,
        NonClickers,
        NonOpeners,
        Clickers,
        Openers,
        SoftBounces,
        HardBounces,
        Unsubscribed
    }
}
