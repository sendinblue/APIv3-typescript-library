export declare class UpdateWebhook {
    'url'?: string;
    'description'?: string;
    'events'?: Array<UpdateWebhook.EventsEnum>;
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
export declare namespace UpdateWebhook {
    enum EventsEnum {
        HardBounce,
        SoftBounce,
        Blocked,
        Spam,
        Delivered,
        Request,
        Click,
        Invalid,
        Deferred,
        Opened,
        UniqueOpened,
        Unsubscribed,
        ListAddition,
        ContactUpdated,
        ContactDeleted
    }
}
