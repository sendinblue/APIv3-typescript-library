"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSendersListIps {
    static getAttributeTypeMap() {
        return GetSendersListIps.attributeTypeMap;
    }
}
GetSendersListIps.discriminator = undefined;
GetSendersListIps.attributeTypeMap = [
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
exports.GetSendersListIps = GetSendersListIps;
//# sourceMappingURL=getSendersListIps.js.map