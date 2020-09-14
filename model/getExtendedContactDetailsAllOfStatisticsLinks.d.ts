export declare class GetExtendedContactDetailsAllOfStatisticsLinks {
    'count': number;
    'eventTime': Date;
    'ip': string;
    'url': string;
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
