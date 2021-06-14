"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetTransacEmailsList {
    static getAttributeTypeMap() {
        return GetTransacEmailsList.attributeTypeMap;
    }
}
GetTransacEmailsList.discriminator = undefined;
GetTransacEmailsList.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "transactionalEmails",
        "baseName": "transactionalEmails",
        "type": "Array<GetTransacEmailsListTransactionalEmails>"
    }
];
exports.GetTransacEmailsList = GetTransacEmailsList;
//# sourceMappingURL=getTransacEmailsList.js.map