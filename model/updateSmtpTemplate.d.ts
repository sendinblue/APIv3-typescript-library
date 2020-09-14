import { UpdateSmtpTemplateSender } from './updateSmtpTemplateSender';
export declare class UpdateSmtpTemplate {
    'tag'?: string;
    'sender'?: UpdateSmtpTemplateSender;
    'templateName'?: string;
    'htmlContent'?: string;
    'htmlUrl'?: string;
    'subject'?: string;
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
