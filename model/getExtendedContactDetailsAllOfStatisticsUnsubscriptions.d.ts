import { GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription } from './getExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription';
import { GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription } from './getExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription';
export declare class GetExtendedContactDetailsAllOfStatisticsUnsubscriptions {
    'userUnsubscription': Array<GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription>;
    'adminUnsubscription': Array<GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription>;
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
