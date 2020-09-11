import { GetAccountAllOfMarketingAutomation } from './getAccountAllOfMarketingAutomation';
import { GetAccountAllOfPlan } from './getAccountAllOfPlan';
import { GetAccountAllOfRelay } from './getAccountAllOfRelay';
export declare class GetAccountAllOf {
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
