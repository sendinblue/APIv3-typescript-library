import { AbTestVersionStats } from './abTestVersionStats';
export declare class AbTestCampaignResultStatistics {
    'openers': AbTestVersionStats;
    'clicks': AbTestVersionStats;
    'unsubscribed': AbTestVersionStats;
    'hardBounces': AbTestVersionStats;
    'softBounces': AbTestVersionStats;
    'complaints': AbTestVersionStats;
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
