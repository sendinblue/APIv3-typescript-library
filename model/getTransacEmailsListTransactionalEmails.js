"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetTransacEmailsListTransactionalEmails {
    static getAttributeTypeMap() {
        return GetTransacEmailsListTransactionalEmails.attributeTypeMap;
    }
}
GetTransacEmailsListTransactionalEmails.discriminator = undefined;
GetTransacEmailsListTransactionalEmails.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "uuid",
        "baseName": "uuid",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "from",
        "baseName": "from",
        "type": "string"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>"
    }
];
exports.GetTransacEmailsListTransactionalEmails = GetTransacEmailsListTransactionalEmails;
//# sourceMappingURL=getTransacEmailsListTransactionalEmails.js.map