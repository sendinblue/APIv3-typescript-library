import { CreateSmsCampaignRecipients } from './createSmsCampaignRecipients';
export declare class CreateSmsCampaign {
    'name': string;
    'sender': string;
    'content': string;
    'recipients'?: CreateSmsCampaignRecipients;
    'scheduledAt'?: string;
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
