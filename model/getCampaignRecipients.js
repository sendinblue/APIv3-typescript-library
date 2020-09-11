"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetCampaignRecipients {
    static getAttributeTypeMap() {
        return GetCampaignRecipients.attributeTypeMap;
    }
}
GetCampaignRecipients.discriminator = undefined;
GetCampaignRecipients.attributeTypeMap = [
    {
        "name": "lists",
        "baseName": "lists",
        "type": "Array<number>"
    },
    {
        "name": "exclusionLists",
        "baseName": "exclusionLists",
        "type": "Array<number>"
    }
];
exports.GetCampaignRecipients = GetCampaignRecipients;
//# sourceMappingURL=getCampaignRecipients.js.map