"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateSmtpTemplateSender {
    static getAttributeTypeMap() {
        return UpdateSmtpTemplateSender.attributeTypeMap;
    }
}
UpdateSmtpTemplateSender.discriminator = undefined;
UpdateSmtpTemplateSender.attributeTypeMap = [
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
exports.UpdateSmtpTemplateSender = UpdateSmtpTemplateSender;
//# sourceMappingURL=updateSmtpTemplateSender.js.map