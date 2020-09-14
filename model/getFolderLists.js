"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetFolderLists {
    static getAttributeTypeMap() {
        return GetFolderLists.attributeTypeMap;
    }
}
GetFolderLists.discriminator = undefined;
GetFolderLists.attributeTypeMap = [
    {
        "name": "lists",
        "baseName": "lists",
        "type": "Array<GetList>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetFolderLists = GetFolderLists;
//# sourceMappingURL=getFolderLists.js.map