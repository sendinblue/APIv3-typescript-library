export declare class CreateDoiContact {
    'email': string;
    'attributes'?: object;
    'includeListIds': Array<number>;
    'excludeListIds'?: Array<number>;
    'templateId': number;
    'redirectionUrl': string;
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
