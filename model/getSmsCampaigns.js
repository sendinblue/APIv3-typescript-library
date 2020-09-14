"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSmsCampaigns {
    static getAttributeTypeMap() {
        return GetSmsCampaigns.attributeTypeMap;
    }
}
GetSmsCampaigns.discriminator = undefined;
GetSmsCampaigns.attributeTypeMap = [
    {
        "name": "campaigns",
        "baseName": "campaigns",
        "type": "Array<GetSmsCampaignOverview & object>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetSmsCampaigns = GetSmsCampaigns;
//# sourceMappingURL=getSmsCampaigns.js.map