"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetIp {
    static getAttributeTypeMap() {
        return GetIp.attributeTypeMap;
    }
}
GetIp.discriminator = undefined;
GetIp.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean"
    },
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    }
];
exports.GetIp = GetIp;
//# sourceMappingURL=getIp.js.map