import { GetAccountAllOfMarketingAutomation } from './getAccountAllOfMarketingAutomation';
import { GetAccountAllOfPlan } from './getAccountAllOfPlan';
import { GetAccountAllOfRelay } from './getAccountAllOfRelay';
import { GetExtendedClientAllOfAddress } from './getExtendedClientAllOfAddress';
export declare class GetAccount {
    'email': string;
    'firstName': string;
    'lastName': string;
    'companyName': string;
    'address': GetExtendedClientAllOfAddress;
    'plan': Array<GetAccountAllOfPlan>;
    'relay': GetAccountAllOfRelay;
    'marketingAutomation'?: GetAccountAllOfMarketingAutomation;
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
