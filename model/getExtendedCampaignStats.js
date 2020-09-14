"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetExtendedCampaignStats {
    static getAttributeTypeMap() {
        return GetExtendedCampaignStats.attributeTypeMap;
    }
}
GetExtendedCampaignStats.discriminator = undefined;
GetExtendedCampaignStats.attributeTypeMap = [
    {
        "name": "globalStats",
        "baseName": "globalStats",
        "type": "GetCampaignStats"
    },
    {
        "name": "campaignStats",
        "baseName": "campaignStats",
        "type": "Array<GetCampaignStats>"
    },
    {
        "name": "mirrorClick",
        "baseName": "mirrorClick",
        "type": "number"
    },
    {
        "name": "remaining",
        "baseName": "remaining",
        "type": "number"
    },
    {
        "name": "linksStats",
        "baseName": "linksStats",
        "type": "object"
    },
    {
        "name": "statsByDomain",
        "baseName": "statsByDomain",
        "type": "{ [key: string]: GetCampaignStats; }"
    },
    {
        "name": "statsByDevice",
        "baseName": "statsByDevice",
        "type": "GetStatsByDevice"
    },
    {
        "name": "statsByBrowser",
        "baseName": "statsByBrowser",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    }
];
exports.GetExtendedCampaignStats = GetExtendedCampaignStats;
//# sourceMappingURL=getExtendedCampaignStats.js.map