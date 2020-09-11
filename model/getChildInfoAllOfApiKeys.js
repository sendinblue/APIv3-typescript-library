"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetChildInfoAllOfApiKeys {
    static getAttributeTypeMap() {
        return GetChildInfoAllOfApiKeys.attributeTypeMap;
    }
}
GetChildInfoAllOfApiKeys.discriminator = undefined;
GetChildInfoAllOfApiKeys.attributeTypeMap = [
    {
        "name": "v2",
        "baseName": "v2",
        "type": "Array<GetChildInfoAllOfApiKeysV2>"
    },
    {
        "name": "v3",
        "baseName": "v3",
        "type": "Array<GetChildInfoAllOfApiKeysV3>"
    }
];
exports.GetChildInfoAllOfApiKeys = GetChildInfoAllOfApiKeys;
//# sourceMappingURL=getChildInfoAllOfApiKeys.js.map