"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSendersList {
    static getAttributeTypeMap() {
        return GetSendersList.attributeTypeMap;
    }
}
GetSendersList.discriminator = undefined;
GetSendersList.attributeTypeMap = [
    {
        "name": "senders",
        "baseName": "senders",
        "type": "Array<GetSendersListSenders>"
    }
];
exports.GetSendersList = GetSendersList;
//# sourceMappingURL=getSendersList.js.map