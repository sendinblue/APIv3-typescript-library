"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoveCredits {
    static getAttributeTypeMap() {
        return RemoveCredits.attributeTypeMap;
    }
}
RemoveCredits.discriminator = undefined;
RemoveCredits.attributeTypeMap = [
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
exports.RemoveCredits = RemoveCredits;
//# sourceMappingURL=removeCredits.js.map