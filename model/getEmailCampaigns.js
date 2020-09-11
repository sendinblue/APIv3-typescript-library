"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetEmailCampaigns {
    static getAttributeTypeMap() {
        return GetEmailCampaigns.attributeTypeMap;
    }
}
GetEmailCampaigns.discriminator = undefined;
GetEmailCampaigns.attributeTypeMap = [
    {
        "name": "campaigns",
        "baseName": "campaigns",
        "type": "Array<GetExtendedCampaignOverview & object>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetEmailCampaigns = GetEmailCampaigns;
//# sourceMappingURL=getEmailCampaigns.js.map