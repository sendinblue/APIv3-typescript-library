import { RequestContactExportCustomContactFilter } from './requestContactExportCustomContactFilter';
export declare class RequestContactExport {
    'exportAttributes'?: Array<string>;
    'contactFilter'?: object;
    'customContactFilter'?: RequestContactExportCustomContactFilter;
    'notifyUrl'?: string;
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
