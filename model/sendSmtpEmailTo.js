"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendSmtpEmailTo {
    static getAttributeTypeMap() {
        return SendSmtpEmailTo.attributeTypeMap;
    }
}
SendSmtpEmailTo.discriminator = undefined;
SendSmtpEmailTo.attributeTypeMap = [
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
exports.SendSmtpEmailTo = SendSmtpEmailTo;
//# sourceMappingURL=sendSmtpEmailTo.js.map