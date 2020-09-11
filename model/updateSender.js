"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateSender {
    static getAttributeTypeMap() {
        return UpdateSender.attributeTypeMap;
    }
}
UpdateSender.discriminator = undefined;
UpdateSender.attributeTypeMap = [
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
        "name": "ips",
        "baseName": "ips",
        "type": "Array<CreateSenderIps>"
    }
];
exports.UpdateSender = UpdateSender;
//# sourceMappingURL=updateSender.js.map