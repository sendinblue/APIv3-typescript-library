import { GetTransacSmsReportReports } from './getTransacSmsReportReports';
export declare class GetTransacSmsReport {
    'reports'?: Array<GetTransacSmsReportReports>;
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
