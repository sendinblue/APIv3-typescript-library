"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetExtendedListAllOfCampaignStats {
    static getAttributeTypeMap() {
        return GetExtendedListAllOfCampaignStats.attributeTypeMap;
    }
}
GetExtendedListAllOfCampaignStats.discriminator = undefined;
GetExtendedListAllOfCampaignStats.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "stats",
        "baseName": "stats",
        "type": "GetCampaignStats"
    }
];
exports.GetExtendedListAllOfCampaignStats = GetExtendedListAllOfCampaignStats;
//# sourceMappingURL=getExtendedListAllOfCampaignStats.js.map