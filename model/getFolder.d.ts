export declare class GetFolder {
    'id': number;
    'name': string;
    'totalBlacklisted': number;
    'totalSubscribers': number;
    'uniqueSubscribers': number;
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
