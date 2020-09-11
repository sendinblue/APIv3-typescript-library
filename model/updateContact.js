"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateContact {
    static getAttributeTypeMap() {
        return UpdateContact.attributeTypeMap;
    }
}
UpdateContact.discriminator = undefined;
UpdateContact.attributeTypeMap = [
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
        "name": "unlinkListIds",
        "baseName": "unlinkListIds",
        "type": "Array<number>"
    },
    {
        "name": "smtpBlacklistSender",
        "baseName": "smtpBlacklistSender",
        "type": "Array<string>"
    }
];
exports.UpdateContact = UpdateContact;
//# sourceMappingURL=updateContact.js.map