import { AbTestCampaignResultClickedLinks } from './abTestCampaignResultClickedLinks';
import { AbTestCampaignResultStatistics } from './abTestCampaignResultStatistics';
export declare class AbTestCampaignResult {
    'winningVersion'?: AbTestCampaignResult.WinningVersionEnum;
    'winningCriteria'?: AbTestCampaignResult.WinningCriteriaEnum;
    'winningSubjectLine'?: string;
    'openRate'?: string;
    'clickRate'?: string;
    'winningVersionRate'?: string;
    'statistics'?: AbTestCampaignResultStatistics;
    'clickedLinks'?: AbTestCampaignResultClickedLinks;
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
export declare namespace AbTestCampaignResult {
    enum WinningVersionEnum {
        NotAvailable,
        Pending,
        Tie,
        A,
        B
    }
    enum WinningCriteriaEnum {
        Open,
        Click
    }
}
