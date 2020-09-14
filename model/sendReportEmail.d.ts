export declare class SendReportEmail {
    'subject': string;
    'to': Array<string>;
    'contentType'?: SendReportEmail.ContentTypeEnum;
    'bcc'?: Array<string>;
    'cc'?: Array<string>;
    'body': string;
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
export declare namespace SendReportEmail {
    enum ContentTypeEnum {
        Text,
        Html
    }
}
