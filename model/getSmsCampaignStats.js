"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSmsCampaignStats {
    static getAttributeTypeMap() {
        return GetSmsCampaignStats.attributeTypeMap;
    }
}
GetSmsCampaignStats.discriminator = undefined;
GetSmsCampaignStats.attributeTypeMap = [
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number"
    },
    {
        "name": "sent",
        "baseName": "sent",
        "type": "number"
    },
    {
        "name": "processing",
        "baseName": "processing",
        "type": "number"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "number"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "number"
    },
    {
        "name": "unsubscriptions",
        "baseName": "unsubscriptions",
        "type": "number"
    },
    {
        "name": "answered",
        "baseName": "answered",
        "type": "number"
    }
];
exports.GetSmsCampaignStats = GetSmsCampaignStats;
//# sourceMappingURL=getSmsCampaignStats.js.map