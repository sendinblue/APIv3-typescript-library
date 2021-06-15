import { UpdateEmailCampaignRecipients } from './updateEmailCampaignRecipients';
import { UpdateEmailCampaignSender } from './updateEmailCampaignSender';
export declare class UpdateEmailCampaign {
    'tag'?: string;
    'sender'?: UpdateEmailCampaignSender;
    'name'?: string;
    'htmlContent'?: string;
    'htmlUrl'?: string;
    'scheduledAt'?: string;
    'subject'?: string;
    'replyTo'?: string;
    'toField'?: string;
    'recipients'?: UpdateEmailCampaignRecipients;
    'attachmentUrl'?: string;
    'inlineImageActivation'?: boolean;
    'mirrorActive'?: boolean;
    'recurring'?: boolean;
    'footer'?: string;
    'header'?: string;
    'utmCampaign'?: string;
    'params'?: object;
    'sendAtBestTime'?: boolean;
    'abTesting'?: boolean;
    'subjectA'?: string;
    'subjectB'?: string;
    'splitRule'?: number;
    'winnerCriteria'?: UpdateEmailCampaign.WinnerCriteriaEnum;
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
export declare namespace UpdateEmailCampaign {
    enum WinnerCriteriaEnum {
        Open,
        Click
    }
}
