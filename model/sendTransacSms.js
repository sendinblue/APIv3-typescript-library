"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendTransacSms {
    static getAttributeTypeMap() {
        return SendTransacSms.attributeTypeMap;
    }
}
SendTransacSms.discriminator = undefined;
SendTransacSms.attributeTypeMap = [
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "recipient",
        "baseName": "recipient",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "SendTransacSms.TypeEnum"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "webUrl",
        "baseName": "webUrl",
        "type": "string"
    }
];
exports.SendTransacSms = SendTransacSms;
(function (SendTransacSms) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Transactional"] = 'transactional'] = "Transactional";
        TypeEnum[TypeEnum["Marketing"] = 'marketing'] = "Marketing";
    })(TypeEnum = SendTransacSms.TypeEnum || (SendTransacSms.TypeEnum = {}));
})(SendTransacSms = exports.SendTransacSms || (exports.SendTransacSms = {}));
//# sourceMappingURL=sendTransacSms.js.map