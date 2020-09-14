"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetContactCampaignStatsTransacAttributes {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsTransacAttributes.attributeTypeMap;
    }
}
GetContactCampaignStatsTransacAttributes.discriminator = undefined;
GetContactCampaignStatsTransacAttributes.attributeTypeMap = [
    {
        "name": "orderDate",
        "baseName": "orderDate",
        "type": "string"
    },
    {
        "name": "orderPrice",
        "baseName": "orderPrice",
        "type": "number"
    },
    {
        "name": "orderId",
        "baseName": "orderId",
        "type": "number"
    }
];
exports.GetContactCampaignStatsTransacAttributes = GetContactCampaignStatsTransacAttributes;
//# sourceMappingURL=getContactCampaignStatsTransacAttributes.js.map