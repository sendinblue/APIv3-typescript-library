"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendSms {
    static getAttributeTypeMap() {
        return SendSms.attributeTypeMap;
    }
}
SendSms.discriminator = undefined;
SendSms.attributeTypeMap = [
    {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "number"
    },
    {
        "name": "smsCount",
        "baseName": "smsCount",
        "type": "number"
    },
    {
        "name": "usedCredits",
        "baseName": "usedCredits",
        "type": "number"
    },
    {
        "name": "remainingCredits",
        "baseName": "remainingCredits",
        "type": "number"
    }
];
exports.SendSms = SendSms;
//# sourceMappingURL=sendSms.js.map