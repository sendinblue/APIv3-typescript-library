import { GetContactCampaignStatsClicked } from './getContactCampaignStatsClicked';
import { GetContactCampaignStatsOpened } from './getContactCampaignStatsOpened';
import { GetContactCampaignStatsTransacAttributes } from './getContactCampaignStatsTransacAttributes';
import { GetContactCampaignStatsUnsubscriptions } from './getContactCampaignStatsUnsubscriptions';
import { GetExtendedContactDetailsAllOfStatisticsMessagesSent } from './getExtendedContactDetailsAllOfStatisticsMessagesSent';
export declare class GetContactCampaignStats {
    'messagesSent'?: Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>;
    'hardBounces'?: Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>;
    'softBounces'?: Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>;
    'complaints'?: Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>;
    'unsubscriptions'?: GetContactCampaignStatsUnsubscriptions;
    'opened'?: Array<GetContactCampaignStatsOpened>;
    'clicked'?: Array<GetContactCampaignStatsClicked>;
    'transacAttributes'?: Array<GetContactCampaignStatsTransacAttributes>;
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
