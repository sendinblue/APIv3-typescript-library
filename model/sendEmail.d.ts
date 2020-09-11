import { SendEmailAttachment } from './sendEmailAttachment';
export declare class SendEmail {
    'emailTo': Array<string>;
    'emailBcc'?: Array<string>;
    'emailCc'?: Array<string>;
    'replyTo'?: string;
    'attachmentUrl'?: string;
    'attachment'?: Array<SendEmailAttachment>;
    'headers'?: object;
    'attributes'?: object;
    'tags'?: Array<string>;
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
