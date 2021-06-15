import { GetExtendedListAllOfCampaignStats } from './getExtendedListAllOfCampaignStats';
export declare class GetExtendedListAllOf {
    'folderId': number;
    'createdAt': string;
    'campaignStats'?: Array<GetExtendedListAllOfCampaignStats>;
    'dynamicList'?: boolean;
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
