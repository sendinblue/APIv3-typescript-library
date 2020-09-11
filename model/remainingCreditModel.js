"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemainingCreditModel {
    static getAttributeTypeMap() {
        return RemainingCreditModel.attributeTypeMap;
    }
}
RemainingCreditModel.discriminator = undefined;
RemainingCreditModel.attributeTypeMap = [
    {
        "name": "child",
        "baseName": "child",
        "type": "RemainingCreditModelChild"
    },
    {
        "name": "reseller",
        "baseName": "reseller",
        "type": "RemainingCreditModelReseller"
    }
];
exports.RemainingCreditModel = RemainingCreditModel;
//# sourceMappingURL=remainingCreditModel.js.map