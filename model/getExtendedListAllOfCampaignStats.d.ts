import { GetCampaignStats } from './getCampaignStats';
export declare class GetExtendedListAllOfCampaignStats {
    'campaignId': number;
    'stats': GetCampaignStats;
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
