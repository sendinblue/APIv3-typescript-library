import { GetExtendedContactDetailsAllOfStatisticsClicked } from './getExtendedContactDetailsAllOfStatisticsClicked';
import { GetExtendedContactDetailsAllOfStatisticsMessagesSent } from './getExtendedContactDetailsAllOfStatisticsMessagesSent';
import { GetExtendedContactDetailsAllOfStatisticsOpened } from './getExtendedContactDetailsAllOfStatisticsOpened';
import { GetExtendedContactDetailsAllOfStatisticsUnsubscriptions } from './getExtendedContactDetailsAllOfStatisticsUnsubscriptions';
export declare class GetExtendedContactDetailsAllOfStatistics {
    'messagesSent'?: Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>;
    'hardBounces'?: Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>;
    'softBounces'?: Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>;
    'complaints'?: Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>;
    'unsubscriptions'?: GetExtendedContactDetailsAllOfStatisticsUnsubscriptions;
    'opened'?: Array<GetExtendedContactDetailsAllOfStatisticsOpened>;
    'clicked'?: Array<GetExtendedContactDetailsAllOfStatisticsClicked>;
    'transacAttributes'?: Array<object>;
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
