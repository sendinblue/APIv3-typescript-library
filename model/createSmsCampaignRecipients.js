"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateSmsCampaignRecipients {
    static getAttributeTypeMap() {
        return CreateSmsCampaignRecipients.attributeTypeMap;
    }
}
CreateSmsCampaignRecipients.discriminator = undefined;
CreateSmsCampaignRecipients.attributeTypeMap = [
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "exclusionListIds",
        "baseName": "exclusionListIds",
        "type": "Array<number>"
    }
];
exports.CreateSmsCampaignRecipients = CreateSmsCampaignRecipients;
//# sourceMappingURL=createSmsCampaignRecipients.js.map