import { GetCampaignStats } from './getCampaignStats';
import { GetDeviceBrowserStats } from './getDeviceBrowserStats';
import { GetStatsByDevice } from './getStatsByDevice';
export declare class GetExtendedCampaignStats {
    'globalStats': GetCampaignStats;
    'campaignStats': Array<GetCampaignStats>;
    'mirrorClick': number;
    'remaining': number;
    'linksStats': object;
    'statsByDomain': {
        [key: string]: GetCampaignStats;
    };
    'statsByDevice': GetStatsByDevice;
    'statsByBrowser': {
        [key: string]: GetDeviceBrowserStats;
    };
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
