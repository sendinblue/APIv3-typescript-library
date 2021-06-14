"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSmtpTemplateOverview {
    static getAttributeTypeMap() {
        return GetSmtpTemplateOverview.attributeTypeMap;
    }
}
GetSmtpTemplateOverview.discriminator = undefined;
GetSmtpTemplateOverview.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "testSent",
        "baseName": "testSent",
        "type": "boolean"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "GetSmtpTemplateOverviewSender"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "string"
    },
    {
        "name": "toField",
        "baseName": "toField",
        "type": "string"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "string"
    },
    {
        "name": "doiTemplate",
        "baseName": "doiTemplate",
        "type": "boolean"
    }
];
exports.GetSmtpTemplateOverview = GetSmtpTemplateOverview;
//# sourceMappingURL=getSmtpTemplateOverview.js.map