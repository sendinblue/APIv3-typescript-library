import { GetExtendedCampaignOverviewAllOfSender } from './getExtendedCampaignOverviewAllOfSender';
export declare class GetExtendedCampaignOverview {
    'id': number;
    'name': string;
    'subject'?: string;
    'type': GetExtendedCampaignOverview.TypeEnum;
    'status': GetExtendedCampaignOverview.StatusEnum;
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
export declare namespace GetExtendedCampaignOverview {
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
