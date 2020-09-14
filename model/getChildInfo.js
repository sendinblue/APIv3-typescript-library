"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetChildInfo {
    static getAttributeTypeMap() {
        return GetChildInfo.attributeTypeMap;
    }
}
GetChildInfo.discriminator = undefined;
GetChildInfo.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
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
exports.GetChildInfo = GetChildInfo;
//# sourceMappingURL=getChildInfo.js.map