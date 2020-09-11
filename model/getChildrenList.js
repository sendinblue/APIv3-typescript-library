"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetChildrenList {
    static getAttributeTypeMap() {
        return GetChildrenList.attributeTypeMap;
    }
}
GetChildrenList.discriminator = undefined;
GetChildrenList.attributeTypeMap = [
    {
        "name": "children",
        "baseName": "children",
        "type": "Array<GetChildInfo & object>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetChildrenList = GetChildrenList;
//# sourceMappingURL=getChildrenList.js.map