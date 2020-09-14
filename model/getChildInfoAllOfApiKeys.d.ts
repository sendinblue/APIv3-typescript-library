import { GetChildInfoAllOfApiKeysV2 } from './getChildInfoAllOfApiKeysV2';
import { GetChildInfoAllOfApiKeysV3 } from './getChildInfoAllOfApiKeysV3';
export declare class GetChildInfoAllOfApiKeys {
    'v2': Array<GetChildInfoAllOfApiKeysV2>;
    'v3'?: Array<GetChildInfoAllOfApiKeysV3>;
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
