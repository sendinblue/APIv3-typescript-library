export declare class GetAccountAllOfPlan {
    'type': GetAccountAllOfPlan.TypeEnum;
    'creditsType': GetAccountAllOfPlan.CreditsTypeEnum;
    'credits': number;
    'startDate'?: string;
    'endDate'?: string;
    'userLimit'?: number;
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
export declare namespace GetAccountAllOfPlan {
    enum TypeEnum {
        PayAsYouGo,
        Free,
        Subscription,
        Sms,
        Reseller
    }
    enum CreditsTypeEnum {
        SendLimit
    }
}
