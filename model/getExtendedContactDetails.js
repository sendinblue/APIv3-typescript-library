"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetExtendedContactDetails {
    static getAttributeTypeMap() {
        return GetExtendedContactDetails.attributeTypeMap;
    }
}
GetExtendedContactDetails.discriminator = undefined;
GetExtendedContactDetails.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "emailBlacklisted",
        "baseName": "emailBlacklisted",
        "type": "boolean"
    },
    {
        "name": "smsBlacklisted",
        "baseName": "smsBlacklisted",
        "type": "boolean"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "string"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "listUnsubscribed",
        "baseName": "listUnsubscribed",
        "type": "Array<number>"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "object"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetExtendedContactDetailsAllOfStatistics"
    }
];
exports.GetExtendedContactDetails = GetExtendedContactDetails;
//# sourceMappingURL=getExtendedContactDetails.js.map