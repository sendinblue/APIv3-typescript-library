"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddCredits {
    static getAttributeTypeMap() {
        return AddCredits.attributeTypeMap;
    }
}
AddCredits.discriminator = undefined;
AddCredits.attributeTypeMap = [
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
exports.AddCredits = AddCredits;
//# sourceMappingURL=addCredits.js.map