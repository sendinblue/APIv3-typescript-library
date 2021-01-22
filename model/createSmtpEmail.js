"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateSmtpEmail {
    static getAttributeTypeMap() {
        return CreateSmtpEmail.attributeTypeMap;
    }
}
CreateSmtpEmail.discriminator = undefined;
CreateSmtpEmail.attributeTypeMap = [
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "messageIds",
        "baseName": "messageIds",
        "type": "Array<string>"
    }
];
exports.CreateSmtpEmail = CreateSmtpEmail;
//# sourceMappingURL=createSmtpEmail.js.map