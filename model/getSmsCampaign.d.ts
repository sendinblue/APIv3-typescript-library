import { GetCampaignRecipients } from './getCampaignRecipients';
import { GetSmsCampaignStats } from './getSmsCampaignStats';
export declare class GetSmsCampaign {
    'id': number;
    'name': string;
    'status': GetSmsCampaign.StatusEnum;
    'content': string;
    'scheduledAt'?: Date;
    'sender': string;
    'createdAt': Date;
    'modifiedAt': Date;
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
export declare namespace GetSmsCampaign {
    enum StatusEnum {
        Draft,
        Sent,
        Archive,
        Queued,
        Suspended,
        InProcess
    }
}
