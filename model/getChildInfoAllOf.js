"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetChildInfoAllOf {
    static getAttributeTypeMap() {
        return GetChildInfoAllOf.attributeTypeMap;
    }
}
GetChildInfoAllOf.discriminator = undefined;
GetChildInfoAllOf.attributeTypeMap = [
    {
        "name": "credits",
        "baseName": "credits",
        "type": "GetChildInfoAllOfCredits"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetChildInfoAllOfStatistics"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "string"
    },
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<string>"
    },
    {
        "name": "apiKeys",
        "baseName": "apiKeys",
        "type": "GetChildInfoAllOfApiKeys"
    }
];
exports.GetChildInfoAllOf = GetChildInfoAllOf;
//# sourceMappingURL=getChildInfoAllOf.js.map