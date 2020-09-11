"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateChild {
    static getAttributeTypeMap() {
        return UpdateChild.attributeTypeMap;
    }
}
UpdateChild.discriminator = undefined;
UpdateChild.attributeTypeMap = [
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
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "string"
    }
];
exports.UpdateChild = UpdateChild;
//# sourceMappingURL=updateChild.js.map