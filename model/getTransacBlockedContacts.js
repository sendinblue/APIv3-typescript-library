"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetTransacBlockedContacts {
    static getAttributeTypeMap() {
        return GetTransacBlockedContacts.attributeTypeMap;
    }
}
GetTransacBlockedContacts.discriminator = undefined;
GetTransacBlockedContacts.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "Array<GetTransacBlockedContactsContacts>"
    }
];
exports.GetTransacBlockedContacts = GetTransacBlockedContacts;
//# sourceMappingURL=getTransacBlockedContacts.js.map