import { CreateSmtpTemplateSender } from './createSmtpTemplateSender';
export declare class CreateSmtpTemplate {
    'tag'?: string;
    'sender': CreateSmtpTemplateSender;
    'templateName': string;
    'htmlContent'?: string;
    'htmlUrl'?: string;
    'subject': string;
    'replyTo'?: string;
    'toField'?: string;
    'attachmentUrl'?: string;
    'isActive'?: boolean;
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
