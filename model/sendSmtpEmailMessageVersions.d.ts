import { SendSmtpEmailBcc } from './sendSmtpEmailBcc';
import { SendSmtpEmailCc } from './sendSmtpEmailCc';
import { SendSmtpEmailReplyTo1 } from './sendSmtpEmailReplyTo1';
import { SendSmtpEmailTo1 } from './sendSmtpEmailTo1';
export declare class SendSmtpEmailMessageVersions {
    'to': Array<SendSmtpEmailTo1>;
    'params'?: {
        [key: string]: object;
    };
    'bcc'?: Array<SendSmtpEmailBcc>;
    'cc'?: Array<SendSmtpEmailCc>;
    'replyTo'?: SendSmtpEmailReplyTo1;
    'subject'?: string;
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
