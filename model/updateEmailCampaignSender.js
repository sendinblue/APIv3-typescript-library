"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateEmailCampaignSender {
    static getAttributeTypeMap() {
        return UpdateEmailCampaignSender.attributeTypeMap;
    }
}
UpdateEmailCampaignSender.discriminator = undefined;
UpdateEmailCampaignSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
exports.UpdateEmailCampaignSender = UpdateEmailCampaignSender;
//# sourceMappingURL=updateEmailCampaignSender.js.map