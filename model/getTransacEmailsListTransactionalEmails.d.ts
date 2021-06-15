export declare class GetTransacEmailsListTransactionalEmails {
    'email': string;
    'subject': string;
    'templateId'?: number;
    'messageId': string;
    'uuid': string;
    'date': string;
    'from'?: string;
    'tags'?: Array<string>;
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
