"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetEmailCampaignAllOf {
    static getAttributeTypeMap() {
        return GetEmailCampaignAllOf.attributeTypeMap;
    }
}
GetEmailCampaignAllOf.discriminator = undefined;
GetEmailCampaignAllOf.attributeTypeMap = [
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "GetCampaignRecipients"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetExtendedCampaignStats"
    }
];
exports.GetEmailCampaignAllOf = GetEmailCampaignAllOf;
//# sourceMappingURL=getEmailCampaignAllOf.js.map