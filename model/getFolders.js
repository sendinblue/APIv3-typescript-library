"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetFolders {
    static getAttributeTypeMap() {
        return GetFolders.attributeTypeMap;
    }
}
GetFolders.discriminator = undefined;
GetFolders.attributeTypeMap = [
    {
        "name": "folders",
        "baseName": "folders",
        "type": "Array<GetFolder>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetFolders = GetFolders;
//# sourceMappingURL=getFolders.js.map