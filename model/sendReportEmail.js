"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendReportEmail {
    static getAttributeTypeMap() {
        return SendReportEmail.attributeTypeMap;
    }
}
SendReportEmail.discriminator = undefined;
SendReportEmail.attributeTypeMap = [
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<string>"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    }
];
exports.SendReportEmail = SendReportEmail;
//# sourceMappingURL=sendReportEmail.js.map