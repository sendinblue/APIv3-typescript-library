import { SendReportEmail } from './sendReportEmail';
export declare class SendReport {
    'language'?: SendReport.LanguageEnum;
    'email': SendReportEmail;
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
export declare namespace SendReport {
    enum LanguageEnum {
        Fr,
        Es,
        Pt,
        It,
        De,
        En
    }
}
