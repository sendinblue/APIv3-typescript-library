"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetLists {
    static getAttributeTypeMap() {
        return GetLists.attributeTypeMap;
    }
}
GetLists.discriminator = undefined;
GetLists.attributeTypeMap = [
    {
        "name": "lists",
        "baseName": "lists",
        "type": "Array<GetList & object>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetLists = GetLists;
//# sourceMappingURL=getLists.js.map