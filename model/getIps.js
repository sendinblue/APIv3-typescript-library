"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetIps {
    static getAttributeTypeMap() {
        return GetIps.attributeTypeMap;
    }
}
GetIps.discriminator = undefined;
GetIps.attributeTypeMap = [
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<GetIp>"
    }
];
exports.GetIps = GetIps;
//# sourceMappingURL=getIps.js.map