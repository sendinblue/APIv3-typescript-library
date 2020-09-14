"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateEmailCampaignRecipients {
    static getAttributeTypeMap() {
        return UpdateEmailCampaignRecipients.attributeTypeMap;
    }
}
UpdateEmailCampaignRecipients.discriminator = undefined;
UpdateEmailCampaignRecipients.attributeTypeMap = [
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
exports.UpdateEmailCampaignRecipients = UpdateEmailCampaignRecipients;
//# sourceMappingURL=updateEmailCampaignRecipients.js.map