import { GetCampaignRecipients } from './getCampaignRecipients';
import { GetExtendedCampaignOverviewAllOfSender } from './getExtendedCampaignOverviewAllOfSender';
import { GetExtendedCampaignStats } from './getExtendedCampaignStats';
export declare class GetEmailCampaign {
    'id': number;
    'name': string;
    'subject'?: string;
    'type': GetEmailCampaign.TypeEnum;
    'status': GetEmailCampaign.StatusEnum;
    'scheduledAt'?: string;
    'abTesting'?: boolean;
    'subjectA'?: string;
    'subjectB'?: string;
    'splitRule'?: number;
    'winnerCriteria'?: string;
    'winnerDelay'?: number;
    'sendAtBestTime'?: boolean;
    'testSent': boolean;
    'header': string;
    'footer': string;
    'sender': GetExtendedCampaignOverviewAllOfSender;
    'replyTo': string;
    'toField'?: string;
    'htmlContent': string;
    'shareLink'?: string;
    'tag'?: string;
    'createdAt': string;
    'modifiedAt': string;
    'inlineImageActivation'?: boolean;
    'mirrorActive'?: boolean;
    'recurring'?: boolean;
    'sentDate'?: string;
    'returnBounce'?: number;
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
export declare namespace GetEmailCampaign {
    enum TypeEnum {
        Classic,
        Trigger
    }
    enum StatusEnum {
        Draft,
        Sent,
        Archive,
        Queued,
        Suspended,
        InProcess
    }
}
