"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetAccountAllOfRelay {
    static getAttributeTypeMap() {
        return GetAccountAllOfRelay.attributeTypeMap;
    }
}
GetAccountAllOfRelay.discriminator = undefined;
GetAccountAllOfRelay.attributeTypeMap = [
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "GetAccountAllOfRelayData"
    }
];
exports.GetAccountAllOfRelay = GetAccountAllOfRelay;
//# sourceMappingURL=getAccountAllOfRelay.js.map