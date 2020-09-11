export declare class CreateWebhook {
    'url': string;
    'description'?: string;
    'events': Array<CreateWebhook.EventsEnum>;
    'type'?: CreateWebhook.TypeEnum;
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
export declare namespace CreateWebhook {
    enum EventsEnum {
        Sent,
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
    enum TypeEnum {
        Transactional,
        Marketing
    }
}
