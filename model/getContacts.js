"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetContacts {
    static getAttributeTypeMap() {
        return GetContacts.attributeTypeMap;
    }
}
GetContacts.discriminator = undefined;
GetContacts.attributeTypeMap = [
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "Array<GetContactDetails>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetContacts = GetContacts;
//# sourceMappingURL=getContacts.js.map