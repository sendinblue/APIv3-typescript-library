export declare class GetContactDetails {
    'email': string;
    'id': number;
    'emailBlacklisted': boolean;
    'smsBlacklisted': boolean;
    'createdAt': string;
    'modifiedAt': string;
    'listIds': Array<number>;
    'listUnsubscribed'?: Array<number>;
    'attributes': object;
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
