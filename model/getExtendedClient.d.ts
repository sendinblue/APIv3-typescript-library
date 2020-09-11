import { GetExtendedClientAllOfAddress } from './getExtendedClientAllOfAddress';
export declare class GetExtendedClient {
    'email': string;
    'firstName': string;
    'lastName': string;
    'companyName': string;
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
