"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetExtendedList {
    static getAttributeTypeMap() {
        return GetExtendedList.attributeTypeMap;
    }
}
GetExtendedList.discriminator = undefined;
GetExtendedList.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "totalBlacklisted",
        "baseName": "totalBlacklisted",
        "type": "number"
    },
    {
        "name": "totalSubscribers",
        "baseName": "totalSubscribers",
        "type": "number"
    },
    {
        "name": "uniqueSubscribers",
        "baseName": "uniqueSubscribers",
        "type": "number"
    },
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
exports.GetExtendedList = GetExtendedList;
//# sourceMappingURL=getExtendedList.js.map