export declare class SendTransacSms {
    'sender': string;
    'recipient': string;
    'content': string;
    'type'?: SendTransacSms.TypeEnum;
    'tag'?: string;
    'webUrl'?: string;
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
export declare namespace SendTransacSms {
    enum TypeEnum {
        Transactional,
        Marketing
    }
}
