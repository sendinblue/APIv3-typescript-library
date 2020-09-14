import { GetSmtpTemplateOverviewSender } from './getSmtpTemplateOverviewSender';
export declare class GetSmtpTemplateOverview {
    'id': number;
    'name': string;
    'subject': string;
    'isActive': boolean;
    'testSent': boolean;
    'sender': GetSmtpTemplateOverviewSender;
    'replyTo': string;
    'toField': string;
    'tag': string;
    'htmlContent': string;
    'createdAt': Date;
    'modifiedAt': Date;
    'doiTemplate'?: boolean;
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
