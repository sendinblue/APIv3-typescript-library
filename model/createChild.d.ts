export declare class CreateChild {
    'email': string;
    'firstName': string;
    'lastName': string;
    'companyName': string;
    'password': string;
    'language'?: CreateChild.LanguageEnum;
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
export declare namespace CreateChild {
    enum LanguageEnum {
        Fr,
        Es,
        Pt,
        It,
        De,
        En
    }
}
