export declare class CreateContact {
    'email'?: string;
    'attributes'?: object;
    'emailBlacklisted'?: boolean;
    'smsBlacklisted'?: boolean;
    'listIds'?: Array<number>;
    'updateEnabled'?: boolean;
    'smtpBlacklistSender'?: Array<string>;
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
