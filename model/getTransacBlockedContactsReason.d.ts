export declare class GetTransacBlockedContactsReason {
    'code'?: GetTransacBlockedContactsReason.CodeEnum;
    'message'?: string;
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
export declare namespace GetTransacBlockedContactsReason {
    enum CodeEnum {
        UnsubscribedViaMa,
        UnsubscribedViaEmail,
        AdminBlocked,
        UnsubscribedViaApi,
        HardBounce,
        ContactFlaggedAsSpam
    }
}
