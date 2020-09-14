"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateAttribute {
    static getAttributeTypeMap() {
        return CreateAttribute.attributeTypeMap;
    }
}
CreateAttribute.discriminator = undefined;
CreateAttribute.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    },
    {
        "name": "enumeration",
        "baseName": "enumeration",
        "type": "Array<CreateAttributeEnumeration>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "CreateAttribute.TypeEnum"
    }
];
exports.CreateAttribute = CreateAttribute;
(function (CreateAttribute) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Text"] = 'text'] = "Text";
        TypeEnum[TypeEnum["Date"] = 'date'] = "Date";
        TypeEnum[TypeEnum["Float"] = 'float'] = "Float";
        TypeEnum[TypeEnum["Boolean"] = 'boolean'] = "Boolean";
        TypeEnum[TypeEnum["Id"] = 'id'] = "Id";
        TypeEnum[TypeEnum["Category"] = 'category'] = "Category";
    })(TypeEnum = CreateAttribute.TypeEnum || (CreateAttribute.TypeEnum = {}));
})(CreateAttribute = exports.CreateAttribute || (exports.CreateAttribute = {}));
//# sourceMappingURL=createAttribute.js.map