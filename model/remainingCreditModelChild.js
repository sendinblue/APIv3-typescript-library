"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemainingCreditModelChild {
    static getAttributeTypeMap() {
        return RemainingCreditModelChild.attributeTypeMap;
    }
}
RemainingCreditModelChild.discriminator = undefined;
RemainingCreditModelChild.attributeTypeMap = [
    {
        "name": "sms",
        "baseName": "sms",
        "type": "number"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "number"
    }
];
exports.RemainingCreditModelChild = RemainingCreditModelChild;
//# sourceMappingURL=remainingCreditModelChild.js.map