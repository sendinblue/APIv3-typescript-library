"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendSmtpEmailCc {
    static getAttributeTypeMap() {
        return SendSmtpEmailCc.attributeTypeMap;
    }
}
SendSmtpEmailCc.discriminator = undefined;
SendSmtpEmailCc.attributeTypeMap = [
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
exports.SendSmtpEmailCc = SendSmtpEmailCc;
//# sourceMappingURL=sendSmtpEmailCc.js.map