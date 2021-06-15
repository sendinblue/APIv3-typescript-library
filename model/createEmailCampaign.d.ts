import { CreateEmailCampaignRecipients } from './createEmailCampaignRecipients';
import { CreateEmailCampaignSender } from './createEmailCampaignSender';
export declare class CreateEmailCampaign {
    'tag'?: string;
    'sender': CreateEmailCampaignSender;
    'name': string;
    'htmlContent'?: string;
    'htmlUrl'?: string;
    'templateId'?: number;
    'scheduledAt'?: string;
    'subject'?: string;
    'replyTo'?: string;
    'toField'?: string;
    'recipients'?: CreateEmailCampaignRecipients;
    'attachmentUrl'?: string;
    'inlineImageActivation'?: boolean;
    'mirrorActive'?: boolean;
    'footer'?: string;
    'header'?: string;
    'utmCampaign'?: string;
    'params'?: object;
    'sendAtBestTime'?: boolean;
    'abTesting'?: boolean;
    'subjectA'?: string;
    'subjectB'?: string;
    'splitRule'?: number;
    'winnerCriteria'?: CreateEmailCampaign.WinnerCriteriaEnum;
    'winnerDelay'?: number;
    'ipWarmupEnable'?: boolean;
    'initialQuota'?: number;
    'increaseRate'?: number;
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
export declare namespace CreateEmailCampaign {
    enum WinnerCriteriaEnum {
        Open,
        Click
    }
}
