"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateSmtpTemplateSender {
    static getAttributeTypeMap() {
        return CreateSmtpTemplateSender.attributeTypeMap;
    }
}
CreateSmtpTemplateSender.discriminator = undefined;
CreateSmtpTemplateSender.attributeTypeMap = [
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
exports.CreateSmtpTemplateSender = CreateSmtpTemplateSender;
//# sourceMappingURL=createSmtpTemplateSender.js.map