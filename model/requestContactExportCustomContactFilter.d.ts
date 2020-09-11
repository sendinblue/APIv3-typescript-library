export declare class RequestContactExportCustomContactFilter {
    'actionForContacts'?: RequestContactExportCustomContactFilter.ActionForContactsEnum;
    'actionForEmailCampaigns'?: RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum;
    'actionForSmsCampaigns'?: RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum;
    'listId'?: number;
    'emailCampaignId'?: number;
    'smsCampaignId'?: number;
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
export declare namespace RequestContactExportCustomContactFilter {
    enum ActionForContactsEnum {
        AllContacts,
        Subscribed,
        Unsubscribed,
        UnsubscribedPerList
    }
    enum ActionForEmailCampaignsEnum {
        Openers,
        NonOpeners,
        Clickers,
        NonClickers,
        Unsubscribed,
        HardBounces,
        SoftBounces
    }
    enum ActionForSmsCampaignsEnum {
        HardBounces,
        SoftBounces,
        Unsubscribed
    }
}
