export declare class PostSendFailed {
    'code': number;
    'message': string;
    'unexistingEmails'?: Array<string>;
    'withoutListEmails'?: Array<string>;
    'blackListedEmails'?: Array<string>;
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
