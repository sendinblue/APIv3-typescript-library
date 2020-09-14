"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddContactToList {
    static getAttributeTypeMap() {
        return AddContactToList.attributeTypeMap;
    }
}
AddContactToList.discriminator = undefined;
AddContactToList.attributeTypeMap = [
    {
        "name": "emails",
        "baseName": "emails",
        "type": "Array<string>"
    },
    {
        "name": "ids",
        "baseName": "ids",
        "type": "Array<number>"
    }
];
exports.AddContactToList = AddContactToList;
//# sourceMappingURL=addContactToList.js.map