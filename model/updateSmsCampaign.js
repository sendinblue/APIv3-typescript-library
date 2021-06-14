"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateSmsCampaign {
    static getAttributeTypeMap() {
        return UpdateSmsCampaign.attributeTypeMap;
    }
}
UpdateSmsCampaign.discriminator = undefined;
UpdateSmsCampaign.attributeTypeMap = [
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
exports.UpdateSmsCampaign = UpdateSmsCampaign;
//# sourceMappingURL=updateSmsCampaign.js.map