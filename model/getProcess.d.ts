export declare class GetProcess {
    'id': number;
    'status': GetProcess.StatusEnum;
    'name': string;
    'exportUrl'?: string;
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
export declare namespace GetProcess {
    enum StatusEnum {
        Queued,
        InProcess,
        Completed
    }
}
