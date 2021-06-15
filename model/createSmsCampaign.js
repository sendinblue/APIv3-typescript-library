"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateSmsCampaign {
    static getAttributeTypeMap() {
        return CreateSmsCampaign.attributeTypeMap;
    }
}
CreateSmsCampaign.discriminator = undefined;
CreateSmsCampaign.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "CreateSmsCampaignRecipients"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "string"
    }
];
exports.CreateSmsCampaign = CreateSmsCampaign;
//# sourceMappingURL=createSmsCampaign.js.map