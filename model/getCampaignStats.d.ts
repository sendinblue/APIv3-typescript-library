export declare class GetCampaignStats {
    'listId'?: number;
    'uniqueClicks': number;
    'clickers': number;
    'complaints': number;
    'delivered': number;
    'sent': number;
    'softBounces': number;
    'hardBounces': number;
    'uniqueViews': number;
    'unsubscriptions': number;
    'viewed': number;
    'deferred'?: number;
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
