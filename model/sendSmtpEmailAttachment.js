"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendSmtpEmailAttachment {
    static getAttributeTypeMap() {
        return SendSmtpEmailAttachment.attributeTypeMap;
    }
}
SendSmtpEmailAttachment.discriminator = undefined;
SendSmtpEmailAttachment.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.SendSmtpEmailAttachment = SendSmtpEmailAttachment;
//# sourceMappingURL=sendSmtpEmailAttachment.js.map