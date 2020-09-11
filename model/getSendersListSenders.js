"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSendersListSenders {
    static getAttributeTypeMap() {
        return GetSendersListSenders.attributeTypeMap;
    }
}
GetSendersListSenders.discriminator = undefined;
GetSendersListSenders.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean"
    },
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<GetSendersListIps>"
    }
];
exports.GetSendersListSenders = GetSendersListSenders;
//# sourceMappingURL=getSendersListSenders.js.map