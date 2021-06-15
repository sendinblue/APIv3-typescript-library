export declare class GetWebhook {
    'url': string;
    'id': number;
    'description': string;
    'events': Array<string>;
    'type': GetWebhook.TypeEnum;
    'createdAt': string;
    'modifiedAt': string;
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
export declare namespace GetWebhook {
    enum TypeEnum {
        Marketing,
        Transac
    }
}
