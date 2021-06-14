"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetTransacEmailContent {
    static getAttributeTypeMap() {
        return GetTransacEmailContent.attributeTypeMap;
    }
}
GetTransacEmailContent.discriminator = undefined;
GetTransacEmailContent.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetTransacEmailContentEvents>"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "attachmentCount",
        "baseName": "attachmentCount",
        "type": "number"
    }
];
exports.GetTransacEmailContent = GetTransacEmailContent;
//# sourceMappingURL=getTransacEmailContent.js.map