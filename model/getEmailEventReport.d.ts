import { GetEmailEventReportEvents } from './getEmailEventReportEvents';
export declare class GetEmailEventReport {
    'events'?: Array<GetEmailEventReportEvents>;
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
