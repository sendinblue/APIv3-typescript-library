import { CreateAttributeEnumeration } from './createAttributeEnumeration';
export declare class CreateAttribute {
    'value'?: string;
    'enumeration'?: Array<CreateAttributeEnumeration>;
    'type'?: CreateAttribute.TypeEnum;
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
export declare namespace CreateAttribute {
    enum TypeEnum {
        Text,
        Date,
        Float,
        Boolean,
        Id,
        Category
    }
}
