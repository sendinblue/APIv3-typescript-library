"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetIpFromSender {
    static getAttributeTypeMap() {
        return GetIpFromSender.attributeTypeMap;
    }
}
GetIpFromSender.discriminator = undefined;
GetIpFromSender.attributeTypeMap = [
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
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "number"
    }
];
exports.GetIpFromSender = GetIpFromSender;
//# sourceMappingURL=getIpFromSender.js.map