"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetExtendedClient {
    static getAttributeTypeMap() {
        return GetExtendedClient.attributeTypeMap;
    }
}
GetExtendedClient.discriminator = undefined;
GetExtendedClient.attributeTypeMap = [
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
        "name": "address",
        "baseName": "address",
        "type": "GetExtendedClientAllOfAddress"
    }
];
exports.GetExtendedClient = GetExtendedClient;
//# sourceMappingURL=getExtendedClient.js.map