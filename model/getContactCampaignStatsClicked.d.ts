import { GetExtendedContactDetailsAllOfStatisticsLinks } from './getExtendedContactDetailsAllOfStatisticsLinks';
export declare class GetContactCampaignStatsClicked {
    'campaignId': number;
    'links': Array<GetExtendedContactDetailsAllOfStatisticsLinks>;
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
