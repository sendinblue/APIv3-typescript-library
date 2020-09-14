"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendEmail {
    static getAttributeTypeMap() {
        return SendEmail.attributeTypeMap;
    }
}
SendEmail.discriminator = undefined;
SendEmail.attributeTypeMap = [
    {
        "name": "emailTo",
        "baseName": "emailTo",
        "type": "Array<string>"
    },
    {
        "name": "emailBcc",
        "baseName": "emailBcc",
        "type": "Array<string>"
    },
    {
        "name": "emailCc",
        "baseName": "emailCc",
        "type": "Array<string>"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "string"
    },
    {
        "name": "attachmentUrl",
        "baseName": "attachmentUrl",
        "type": "string"
    },
    {
        "name": "attachment",
        "baseName": "attachment",
        "type": "Array<SendEmailAttachment>"
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "object"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "object"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>"
    }
];
exports.SendEmail = SendEmail;
//# sourceMappingURL=sendEmail.js.map