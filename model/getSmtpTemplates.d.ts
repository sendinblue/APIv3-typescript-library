import { GetSmtpTemplateOverview } from './getSmtpTemplateOverview';
export declare class GetSmtpTemplates {
    'count'?: number;
    'templates'?: Array<GetSmtpTemplateOverview>;
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
