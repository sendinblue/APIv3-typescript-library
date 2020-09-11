export declare class UpdateContact {
    'attributes'?: object;
    'emailBlacklisted'?: boolean;
    'smsBlacklisted'?: boolean;
    'listIds'?: Array<number>;
    'unlinkListIds'?: Array<number>;
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
