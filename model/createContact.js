"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateContact {
    static getAttributeTypeMap() {
        return CreateContact.attributeTypeMap;
    }
}
CreateContact.discriminator = undefined;
CreateContact.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "object"
    },
    {
        "name": "emailBlacklisted",
        "baseName": "emailBlacklisted",
        "type": "boolean"
    },
    {
        "name": "smsBlacklisted",
        "baseName": "smsBlacklisted",
        "type": "boolean"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "updateEnabled",
        "baseName": "updateEnabled",
        "type": "boolean"
    },
    {
        "name": "smtpBlacklistSender",
        "baseName": "smtpBlacklistSender",
        "type": "Array<string>"
    }
];
exports.CreateContact = CreateContact;
//# sourceMappingURL=createContact.js.map