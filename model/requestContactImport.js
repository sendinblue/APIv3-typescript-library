"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestContactImport {
    static getAttributeTypeMap() {
        return RequestContactImport.attributeTypeMap;
    }
}
RequestContactImport.discriminator = undefined;
RequestContactImport.attributeTypeMap = [
    {
        "name": "fileUrl",
        "baseName": "fileUrl",
        "type": "string"
    },
    {
        "name": "fileBody",
        "baseName": "fileBody",
        "type": "string"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "notifyUrl",
        "baseName": "notifyUrl",
        "type": "string"
    },
    {
        "name": "newList",
        "baseName": "newList",
        "type": "RequestContactImportNewList"
    },
    {
        "name": "emailBlacklist",
        "baseName": "emailBlacklist",
        "type": "boolean"
    },
    {
        "name": "smsBlacklist",
        "baseName": "smsBlacklist",
        "type": "boolean"
    },
    {
        "name": "updateExistingContacts",
        "baseName": "updateExistingContacts",
        "type": "boolean"
    },
    {
        "name": "emptyContactsAttributes",
        "baseName": "emptyContactsAttributes",
        "type": "boolean"
    }
];
exports.RequestContactImport = RequestContactImport;
//# sourceMappingURL=requestContactImport.js.map