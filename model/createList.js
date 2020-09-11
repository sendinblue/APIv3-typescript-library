"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateList {
    static getAttributeTypeMap() {
        return CreateList.attributeTypeMap;
    }
}
CreateList.discriminator = undefined;
CreateList.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "folderId",
        "baseName": "folderId",
        "type": "number"
    }
];
exports.CreateList = CreateList;
//# sourceMappingURL=createList.js.map