export declare class PostContactInfoContacts {
    'success'?: Array<string>;
    'failure'?: Array<string>;
    'total'?: number;
    'processId'?: number;
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
