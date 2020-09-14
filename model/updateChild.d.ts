export declare class UpdateChild {
    'email'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'companyName'?: string;
    'password'?: string;
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
