import { GetCampaignRecipients } from './getCampaignRecipients';
import { GetExtendedCampaignStats } from './getExtendedCampaignStats';
export declare class GetEmailCampaignAllOf {
    'recipients': GetCampaignRecipients;
    'statistics': GetExtendedCampaignStats;
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
