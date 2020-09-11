import { GetAttributesEnumeration } from './getAttributesEnumeration';
export declare class GetAttributesAttributes {
    'name': string;
    'category': GetAttributesAttributes.CategoryEnum;
    'type'?: GetAttributesAttributes.TypeEnum;
    'enumeration'?: Array<GetAttributesEnumeration>;
    'calculatedValue'?: string;
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
export declare namespace GetAttributesAttributes {
    enum CategoryEnum {
        Normal,
        Transactional,
        Category,
        Calculated,
        Global
    }
    enum TypeEnum {
        Text,
        Date,
        Float,
        Id,
        Boolean
    }
}
