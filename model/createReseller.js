"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateReseller {
    static getAttributeTypeMap() {
        return CreateReseller.attributeTypeMap;
    }
}
CreateReseller.discriminator = undefined;
CreateReseller.attributeTypeMap = [
    {
        "name": "authKey",
        "baseName": "authKey",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
exports.CreateReseller = CreateReseller;
//# sourceMappingURL=createReseller.js.map