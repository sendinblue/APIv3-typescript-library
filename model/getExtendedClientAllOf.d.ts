import { GetExtendedClientAllOfAddress } from './getExtendedClientAllOfAddress';
export declare class GetExtendedClientAllOf {
    'address': GetExtendedClientAllOfAddress;
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
