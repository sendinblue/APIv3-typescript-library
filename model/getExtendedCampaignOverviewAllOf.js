"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetExtendedCampaignOverviewAllOf {
    static getAttributeTypeMap() {
        return GetExtendedCampaignOverviewAllOf.attributeTypeMap;
    }
}
GetExtendedCampaignOverviewAllOf.discriminator = undefined;
GetExtendedCampaignOverviewAllOf.attributeTypeMap = [
    {
        "name": "testSent",
        "baseName": "testSent",
        "type": "boolean"
    },
    {
        "name": "header",
        "baseName": "header",
        "type": "string"
    },
    {
        "name": "footer",
        "baseName": "footer",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "GetExtendedCampaignOverviewAllOfSender"
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
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "shareLink",
        "baseName": "shareLink",
        "type": "string"
    },
    {
        "name": "tag",
        "baseName": "tag",
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
        "name": "inlineImageActivation",
        "baseName": "inlineImageActivation",
        "type": "boolean"
    },
    {
        "name": "mirrorActive",
        "baseName": "mirrorActive",
        "type": "boolean"
    },
    {
        "name": "recurring",
        "baseName": "recurring",
        "type": "boolean"
    },
    {
        "name": "sentDate",
        "baseName": "sentDate",
        "type": "string"
    },
    {
        "name": "returnBounce",
        "baseName": "returnBounce",
        "type": "number"
    }
];
exports.GetExtendedCampaignOverviewAllOf = GetExtendedCampaignOverviewAllOf;
//# sourceMappingURL=getExtendedCampaignOverviewAllOf.js.map