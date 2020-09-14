import { GetCampaignRecipients } from './getCampaignRecipients';
import { GetSmsCampaignStats } from './getSmsCampaignStats';
export declare class GetSmsCampaignAllOf {
    'recipients': GetCampaignRecipients;
    'statistics': GetSmsCampaignStats;
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
