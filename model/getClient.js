"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetClient {
    static getAttributeTypeMap() {
        return GetClient.attributeTypeMap;
    }
}
GetClient.discriminator = undefined;
GetClient.attributeTypeMap = [
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
    }
];
exports.GetClient = GetClient;
//# sourceMappingURL=getClient.js.map