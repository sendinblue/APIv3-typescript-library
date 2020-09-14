"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendEmailAttachment {
    static getAttributeTypeMap() {
        return SendEmailAttachment.attributeTypeMap;
    }
}
SendEmailAttachment.discriminator = undefined;
SendEmailAttachment.attributeTypeMap = [
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
exports.SendEmailAttachment = SendEmailAttachment;
//# sourceMappingURL=sendEmailAttachment.js.map