import { GetSmsEventReportEvents } from './getSmsEventReportEvents';
export declare class GetSmsEventReport {
    'events'?: Array<GetSmsEventReportEvents>;
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
