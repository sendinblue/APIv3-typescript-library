"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendSmtpEmailSender {
    static getAttributeTypeMap() {
        return SendSmtpEmailSender.attributeTypeMap;
    }
}
SendSmtpEmailSender.discriminator = undefined;
SendSmtpEmailSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
exports.SendSmtpEmailSender = SendSmtpEmailSender;
//# sourceMappingURL=sendSmtpEmailSender.js.map