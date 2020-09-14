"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetAttributesAttributes {
    static getAttributeTypeMap() {
        return GetAttributesAttributes.attributeTypeMap;
    }
}
GetAttributesAttributes.discriminator = undefined;
GetAttributesAttributes.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "GetAttributesAttributes.CategoryEnum"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetAttributesAttributes.TypeEnum"
    },
    {
        "name": "enumeration",
        "baseName": "enumeration",
        "type": "Array<GetAttributesEnumeration>"
    },
    {
        "name": "calculatedValue",
        "baseName": "calculatedValue",
        "type": "string"
    }
];
exports.GetAttributesAttributes = GetAttributesAttributes;
(function (GetAttributesAttributes) {
    let CategoryEnum;
    (function (CategoryEnum) {
        CategoryEnum[CategoryEnum["Normal"] = 'normal'] = "Normal";
        CategoryEnum[CategoryEnum["Transactional"] = 'transactional'] = "Transactional";
        CategoryEnum[CategoryEnum["Category"] = 'category'] = "Category";
        CategoryEnum[CategoryEnum["Calculated"] = 'calculated'] = "Calculated";
        CategoryEnum[CategoryEnum["Global"] = 'global'] = "Global";
    })(CategoryEnum = GetAttributesAttributes.CategoryEnum || (GetAttributesAttributes.CategoryEnum = {}));
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Text"] = 'text'] = "Text";
        TypeEnum[TypeEnum["Date"] = 'date'] = "Date";
        TypeEnum[TypeEnum["Float"] = 'float'] = "Float";
        TypeEnum[TypeEnum["Id"] = 'id'] = "Id";
        TypeEnum[TypeEnum["Boolean"] = 'boolean'] = "Boolean";
    })(TypeEnum = GetAttributesAttributes.TypeEnum || (GetAttributesAttributes.TypeEnum = {}));
})(GetAttributesAttributes = exports.GetAttributesAttributes || (exports.GetAttributesAttributes = {}));
//# sourceMappingURL=getAttributesAttributes.js.map