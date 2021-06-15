"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetTransacBlockedContactsContacts {
    static getAttributeTypeMap() {
        return GetTransacBlockedContactsContacts.attributeTypeMap;
    }
}
GetTransacBlockedContactsContacts.discriminator = undefined;
GetTransacBlockedContactsContacts.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "senderEmail",
        "baseName": "senderEmail",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "GetTransacBlockedContactsReason"
    },
    {
        "name": "blockedAt",
        "baseName": "blockedAt",
        "type": "string"
    }
];
exports.GetTransacBlockedContactsContacts = GetTransacBlockedContactsContacts;
//# sourceMappingURL=getTransacBlockedContactsContacts.js.map