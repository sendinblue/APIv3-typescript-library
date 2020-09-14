"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetExtendedClientAllOfAddress {
    static getAttributeTypeMap() {
        return GetExtendedClientAllOfAddress.attributeTypeMap;
    }
}
GetExtendedClientAllOfAddress.discriminator = undefined;
GetExtendedClientAllOfAddress.attributeTypeMap = [
    {
        "name": "street",
        "baseName": "street",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "zipCode",
        "baseName": "zipCode",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    }
];
exports.GetExtendedClientAllOfAddress = GetExtendedClientAllOfAddress;
//# sourceMappingURL=getExtendedClientAllOfAddress.js.map