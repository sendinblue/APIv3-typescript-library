"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSmsCampaignAllOf {
    static getAttributeTypeMap() {
        return GetSmsCampaignAllOf.attributeTypeMap;
    }
}
GetSmsCampaignAllOf.discriminator = undefined;
GetSmsCampaignAllOf.attributeTypeMap = [
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "GetCampaignRecipients"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetSmsCampaignStats"
    }
];
exports.GetSmsCampaignAllOf = GetSmsCampaignAllOf;
//# sourceMappingURL=getSmsCampaignAllOf.js.map