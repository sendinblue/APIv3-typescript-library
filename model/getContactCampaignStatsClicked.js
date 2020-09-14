"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetContactCampaignStatsClicked {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsClicked.attributeTypeMap;
    }
}
GetContactCampaignStatsClicked.discriminator = undefined;
GetContactCampaignStatsClicked.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "links",
        "baseName": "links",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsLinks>"
    }
];
exports.GetContactCampaignStatsClicked = GetContactCampaignStatsClicked;
//# sourceMappingURL=getContactCampaignStatsClicked.js.map