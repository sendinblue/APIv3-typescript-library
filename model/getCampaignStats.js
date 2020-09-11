"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetCampaignStats {
    static getAttributeTypeMap() {
        return GetCampaignStats.attributeTypeMap;
    }
}
GetCampaignStats.discriminator = undefined;
GetCampaignStats.attributeTypeMap = [
    {
        "name": "listId",
        "baseName": "listId",
        "type": "number"
    },
    {
        "name": "uniqueClicks",
        "baseName": "uniqueClicks",
        "type": "number"
    },
    {
        "name": "clickers",
        "baseName": "clickers",
        "type": "number"
    },
    {
        "name": "complaints",
        "baseName": "complaints",
        "type": "number"
    },
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
        "name": "uniqueViews",
        "baseName": "uniqueViews",
        "type": "number"
    },
    {
        "name": "unsubscriptions",
        "baseName": "unsubscriptions",
        "type": "number"
    },
    {
        "name": "viewed",
        "baseName": "viewed",
        "type": "number"
    },
    {
        "name": "deferred",
        "baseName": "deferred",
        "type": "number"
    },
    {
        "name": "returnBounce",
        "baseName": "returnBounce",
        "type": "number"
    }
];
exports.GetCampaignStats = GetCampaignStats;
//# sourceMappingURL=getCampaignStats.js.map