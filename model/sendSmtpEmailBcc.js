"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendSmtpEmailBcc {
    static getAttributeTypeMap() {
        return SendSmtpEmailBcc.attributeTypeMap;
    }
}
SendSmtpEmailBcc.discriminator = undefined;
SendSmtpEmailBcc.attributeTypeMap = [
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
exports.SendSmtpEmailBcc = SendSmtpEmailBcc;
//# sourceMappingURL=sendSmtpEmailBcc.js.map