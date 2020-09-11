import { UpdateAttributeEnumeration } from './updateAttributeEnumeration';
export declare class UpdateAttribute {
    'value'?: string;
    'enumeration'?: Array<UpdateAttributeEnumeration>;
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
