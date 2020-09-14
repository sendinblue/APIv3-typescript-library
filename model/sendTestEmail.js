"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendTestEmail {
    static getAttributeTypeMap() {
        return SendTestEmail.attributeTypeMap;
    }
}
SendTestEmail.discriminator = undefined;
SendTestEmail.attributeTypeMap = [
    {
        "name": "emailTo",
        "baseName": "emailTo",
        "type": "Array<string>"
    }
];
exports.SendTestEmail = SendTestEmail;
//# sourceMappingURL=sendTestEmail.js.map