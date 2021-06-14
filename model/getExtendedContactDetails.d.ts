import { GetExtendedContactDetailsAllOfStatistics } from './getExtendedContactDetailsAllOfStatistics';
export declare class GetExtendedContactDetails {
    'email': string;
    'id': number;
    'emailBlacklisted': boolean;
    'smsBlacklisted': boolean;
    'createdAt': string;
    'modifiedAt': string;
    'listIds': Array<number>;
    'listUnsubscribed'?: Array<number>;
    'attributes': object;
    'statistics': GetExtendedContactDetailsAllOfStatistics;
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
