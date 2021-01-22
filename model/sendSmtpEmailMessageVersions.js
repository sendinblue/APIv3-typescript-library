"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendSmtpEmailMessageVersions {
    static getAttributeTypeMap() {
        return SendSmtpEmailMessageVersions.attributeTypeMap;
    }
}
SendSmtpEmailMessageVersions.discriminator = undefined;
SendSmtpEmailMessageVersions.attributeTypeMap = [
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<SendSmtpEmailTo1>"
    },
    {
        "name": "params",
        "baseName": "params",
        "type": "{ [key: string]: object; }"
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
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "SendSmtpEmailReplyTo1"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    }
];
exports.SendSmtpEmailMessageVersions = SendSmtpEmailMessageVersions;
//# sourceMappingURL=sendSmtpEmailMessageVersions.js.map