"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateAttribute {
    static getAttributeTypeMap() {
        return UpdateAttribute.attributeTypeMap;
    }
}
UpdateAttribute.discriminator = undefined;
UpdateAttribute.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    },
    {
        "name": "enumeration",
        "baseName": "enumeration",
        "type": "Array<UpdateAttributeEnumeration>"
    }
];
exports.UpdateAttribute = UpdateAttribute;
//# sourceMappingURL=updateAttribute.js.map