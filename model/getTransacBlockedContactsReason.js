"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetTransacBlockedContactsReason {
    static getAttributeTypeMap() {
        return GetTransacBlockedContactsReason.attributeTypeMap;
    }
}
GetTransacBlockedContactsReason.discriminator = undefined;
GetTransacBlockedContactsReason.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "GetTransacBlockedContactsReason.CodeEnum"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
exports.GetTransacBlockedContactsReason = GetTransacBlockedContactsReason;
(function (GetTransacBlockedContactsReason) {
    let CodeEnum;
    (function (CodeEnum) {
        CodeEnum[CodeEnum["UnsubscribedViaMa"] = 'unsubscribedViaMA'] = "UnsubscribedViaMa";
        CodeEnum[CodeEnum["UnsubscribedViaEmail"] = 'unsubscribedViaEmail'] = "UnsubscribedViaEmail";
        CodeEnum[CodeEnum["AdminBlocked"] = 'adminBlocked'] = "AdminBlocked";
        CodeEnum[CodeEnum["UnsubscribedViaApi"] = 'unsubscribedViaApi'] = "UnsubscribedViaApi";
        CodeEnum[CodeEnum["HardBounce"] = 'hardBounce'] = "HardBounce";
        CodeEnum[CodeEnum["ContactFlaggedAsSpam"] = 'contactFlaggedAsSpam'] = "ContactFlaggedAsSpam";
    })(CodeEnum = GetTransacBlockedContactsReason.CodeEnum || (GetTransacBlockedContactsReason.CodeEnum = {}));
})(GetTransacBlockedContactsReason = exports.GetTransacBlockedContactsReason || (exports.GetTransacBlockedContactsReason = {}));
//# sourceMappingURL=getTransacBlockedContactsReason.js.map