"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendSmtpEmail {
    static getAttributeTypeMap() {
        return SendSmtpEmail.attributeTypeMap;
    }
}
SendSmtpEmail.discriminator = undefined;
SendSmtpEmail.attributeTypeMap = [
    {
        "name": "sender",
        "baseName": "sender",
        "type": "SendSmtpEmailSender"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<SendSmtpEmailTo>"
    },
    {
        "name": "bcc",
        "baseName": "bcc",
        "type": "Array<SendSmtpEmailBcc>"
    },
    {
        "name": "cc",
        "baseName": "cc",
        "type": "Array<SendSmtpEmailCc>"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "textContent",
        "baseName": "textContent",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "SendSmtpEmailReplyTo"
    },
    {
        "name": "attachment",
        "baseName": "attachment",
        "type": "Array<SendSmtpEmailAttachment>"
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "object"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "params",
        "baseName": "params",
        "type": "object"
    },
    {
        "name": "messageVersions",
        "baseName": "messageVersions",
        "type": "Array<SendSmtpEmailMessageVersions>"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>"
    }
];
exports.SendSmtpEmail = SendSmtpEmail;
//# sourceMappingURL=sendSmtpEmail.js.map