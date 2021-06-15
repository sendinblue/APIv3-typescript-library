"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetExtendedListAllOf {
    static getAttributeTypeMap() {
        return GetExtendedListAllOf.attributeTypeMap;
    }
}
GetExtendedListAllOf.discriminator = undefined;
GetExtendedListAllOf.attributeTypeMap = [
    {
        "name": "folderId",
        "baseName": "folderId",
        "type": "number"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "campaignStats",
        "baseName": "campaignStats",
        "type": "Array<GetExtendedListAllOfCampaignStats>"
    },
    {
        "name": "dynamicList",
        "baseName": "dynamicList",
        "type": "boolean"
    }
];
exports.GetExtendedListAllOf = GetExtendedListAllOf;
//# sourceMappingURL=getExtendedListAllOf.js.map