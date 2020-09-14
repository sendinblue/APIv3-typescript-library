"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbTestCampaignResultStatistics {
    static getAttributeTypeMap() {
        return AbTestCampaignResultStatistics.attributeTypeMap;
    }
}
AbTestCampaignResultStatistics.discriminator = undefined;
AbTestCampaignResultStatistics.attributeTypeMap = [
    {
        "name": "openers",
        "baseName": "openers",
        "type": "AbTestVersionStats"
    },
    {
        "name": "clicks",
        "baseName": "clicks",
        "type": "AbTestVersionStats"
    },
    {
        "name": "unsubscribed",
        "baseName": "unsubscribed",
        "type": "AbTestVersionStats"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "AbTestVersionStats"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "AbTestVersionStats"
    },
    {
        "name": "complaints",
        "baseName": "complaints",
        "type": "AbTestVersionStats"
    }
];
exports.AbTestCampaignResultStatistics = AbTestCampaignResultStatistics;
//# sourceMappingURL=abTestCampaignResultStatistics.js.map