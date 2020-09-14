"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateList {
    static getAttributeTypeMap() {
        return UpdateList.attributeTypeMap;
    }
}
UpdateList.discriminator = undefined;
UpdateList.attributeTypeMap = [
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
exports.UpdateList = UpdateList;
//# sourceMappingURL=updateList.js.map