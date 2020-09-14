"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateChildAccountStatus {
    static getAttributeTypeMap() {
        return UpdateChildAccountStatus.attributeTypeMap;
    }
}
UpdateChildAccountStatus.discriminator = undefined;
UpdateChildAccountStatus.attributeTypeMap = [
    {
        "name": "transactionalEmail",
        "baseName": "transactionalEmail",
        "type": "boolean"
    },
    {
        "name": "transactionalSms",
        "baseName": "transactionalSms",
        "type": "boolean"
    },
    {
        "name": "marketingAutomation",
        "baseName": "marketingAutomation",
        "type": "boolean"
    },
    {
        "name": "smsCampaign",
        "baseName": "smsCampaign",
        "type": "boolean"
    }
];
exports.UpdateChildAccountStatus = UpdateChildAccountStatus;
//# sourceMappingURL=updateChildAccountStatus.js.map