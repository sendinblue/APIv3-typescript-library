"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetContactCampaignStatsOpened {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsOpened.attributeTypeMap;
    }
}
GetContactCampaignStatsOpened.discriminator = undefined;
GetContactCampaignStatsOpened.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "eventTime",
        "baseName": "eventTime",
        "type": "string"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
exports.GetContactCampaignStatsOpened = GetContactCampaignStatsOpened;
//# sourceMappingURL=getContactCampaignStatsOpened.js.map