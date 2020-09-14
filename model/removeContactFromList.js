"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoveContactFromList {
    static getAttributeTypeMap() {
        return RemoveContactFromList.attributeTypeMap;
    }
}
RemoveContactFromList.discriminator = undefined;
RemoveContactFromList.attributeTypeMap = [
    {
        "name": "emails",
        "baseName": "emails",
        "type": "Array<string>"
    },
    {
        "name": "ids",
        "baseName": "ids",
        "type": "Array<number>"
    },
    {
        "name": "all",
        "baseName": "all",
        "type": "boolean"
    }
];
exports.RemoveContactFromList = RemoveContactFromList;
//# sourceMappingURL=removeContactFromList.js.map