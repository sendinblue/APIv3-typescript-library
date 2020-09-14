"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateEmailCampaignSender {
    static getAttributeTypeMap() {
        return CreateEmailCampaignSender.attributeTypeMap;
    }
}
CreateEmailCampaignSender.discriminator = undefined;
CreateEmailCampaignSender.attributeTypeMap = [
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
exports.CreateEmailCampaignSender = CreateEmailCampaignSender;
//# sourceMappingURL=createEmailCampaignSender.js.map