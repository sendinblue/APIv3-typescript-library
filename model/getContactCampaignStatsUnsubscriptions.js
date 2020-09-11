"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetContactCampaignStatsUnsubscriptions {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsUnsubscriptions.attributeTypeMap;
    }
}
GetContactCampaignStatsUnsubscriptions.discriminator = undefined;
GetContactCampaignStatsUnsubscriptions.attributeTypeMap = [
    {
        "name": "userUnsubscription",
        "baseName": "userUnsubscription",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription>"
    },
    {
        "name": "adminUnsubscription",
        "baseName": "adminUnsubscription",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription>"
    }
];
exports.GetContactCampaignStatsUnsubscriptions = GetContactCampaignStatsUnsubscriptions;
//# sourceMappingURL=getContactCampaignStatsUnsubscriptions.js.map