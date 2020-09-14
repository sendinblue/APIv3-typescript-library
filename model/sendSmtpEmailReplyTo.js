"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendSmtpEmailReplyTo {
    static getAttributeTypeMap() {
        return SendSmtpEmailReplyTo.attributeTypeMap;
    }
}
SendSmtpEmailReplyTo.discriminator = undefined;
SendSmtpEmailReplyTo.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.SendSmtpEmailReplyTo = SendSmtpEmailReplyTo;
//# sourceMappingURL=sendSmtpEmailReplyTo.js.map