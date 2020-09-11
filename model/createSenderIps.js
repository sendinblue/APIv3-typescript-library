"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateSenderIps {
    static getAttributeTypeMap() {
        return CreateSenderIps.attributeTypeMap;
    }
}
CreateSenderIps.discriminator = undefined;
CreateSenderIps.attributeTypeMap = [
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
exports.CreateSenderIps = CreateSenderIps;
//# sourceMappingURL=createSenderIps.js.map