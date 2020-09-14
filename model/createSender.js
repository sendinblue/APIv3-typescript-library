"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateSender {
    static getAttributeTypeMap() {
        return CreateSender.attributeTypeMap;
    }
}
CreateSender.discriminator = undefined;
CreateSender.attributeTypeMap = [
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
exports.CreateSender = CreateSender;
//# sourceMappingURL=createSender.js.map