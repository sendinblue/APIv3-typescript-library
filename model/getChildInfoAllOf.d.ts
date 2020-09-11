import { GetChildInfoAllOfApiKeys } from './getChildInfoAllOfApiKeys';
import { GetChildInfoAllOfCredits } from './getChildInfoAllOfCredits';
import { GetChildInfoAllOfStatistics } from './getChildInfoAllOfStatistics';
export declare class GetChildInfoAllOf {
    'credits'?: GetChildInfoAllOfCredits;
    'statistics'?: GetChildInfoAllOfStatistics;
    'password': string;
    'ips'?: Array<string>;
    'apiKeys'?: GetChildInfoAllOfApiKeys;
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
