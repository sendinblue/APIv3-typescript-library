export declare class GetExtendedClientAllOfAddress {
    'street': string;
    'city': string;
    'zipCode': string;
    'country': string;
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
