"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateEmailCampaignRecipients {
    static getAttributeTypeMap() {
        return CreateEmailCampaignRecipients.attributeTypeMap;
    }
}
CreateEmailCampaignRecipients.discriminator = undefined;
CreateEmailCampaignRecipients.attributeTypeMap = [
    {
        "name": "exclusionListIds",
        "baseName": "exclusionListIds",
        "type": "Array<number>"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    }
];
exports.CreateEmailCampaignRecipients = CreateEmailCampaignRecipients;
//# sourceMappingURL=createEmailCampaignRecipients.js.map