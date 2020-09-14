"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetContactCampaignStats {
    static getAttributeTypeMap() {
        return GetContactCampaignStats.attributeTypeMap;
    }
}
GetContactCampaignStats.discriminator = undefined;
GetContactCampaignStats.attributeTypeMap = [
    {
        "name": "messagesSent",
        "baseName": "messagesSent",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>"
    },
    {
        "name": "complaints",
        "baseName": "complaints",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>"
    },
    {
        "name": "unsubscriptions",
        "baseName": "unsubscriptions",
        "type": "GetContactCampaignStatsUnsubscriptions"
    },
    {
        "name": "opened",
        "baseName": "opened",
        "type": "Array<GetContactCampaignStatsOpened>"
    },
    {
        "name": "clicked",
        "baseName": "clicked",
        "type": "Array<GetContactCampaignStatsClicked>"
    },
    {
        "name": "transacAttributes",
        "baseName": "transacAttributes",
        "type": "Array<GetContactCampaignStatsTransacAttributes>"
    }
];
exports.GetContactCampaignStats = GetContactCampaignStats;
//# sourceMappingURL=getContactCampaignStats.js.map