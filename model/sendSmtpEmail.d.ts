import { SendSmtpEmailAttachment } from './sendSmtpEmailAttachment';
import { SendSmtpEmailBcc } from './sendSmtpEmailBcc';
import { SendSmtpEmailCc } from './sendSmtpEmailCc';
import { SendSmtpEmailMessageVersions } from './sendSmtpEmailMessageVersions';
import { SendSmtpEmailReplyTo } from './sendSmtpEmailReplyTo';
import { SendSmtpEmailSender } from './sendSmtpEmailSender';
import { SendSmtpEmailTo } from './sendSmtpEmailTo';
export declare class SendSmtpEmail {
    'sender'?: SendSmtpEmailSender;
    'to'?: Array<SendSmtpEmailTo>;
    'bcc'?: Array<SendSmtpEmailBcc>;
    'cc'?: Array<SendSmtpEmailCc>;
    'htmlContent'?: string;
    'textContent'?: string;
    'subject'?: string;
    'replyTo'?: SendSmtpEmailReplyTo;
    'attachment'?: Array<SendSmtpEmailAttachment>;
    'headers'?: object;
    'templateId'?: number;
    'params'?: object;
    'messageVersions'?: Array<SendSmtpEmailMessageVersions>;
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
