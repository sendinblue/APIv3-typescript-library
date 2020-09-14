"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetAccount {
    static getAttributeTypeMap() {
        return GetAccount.attributeTypeMap;
    }
}
GetAccount.discriminator = undefined;
GetAccount.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "GetExtendedClientAllOfAddress"
    },
    {
        "name": "plan",
        "baseName": "plan",
        "type": "Array<GetAccountAllOfPlan>"
    },
    {
        "name": "relay",
        "baseName": "relay",
        "type": "GetAccountAllOfRelay"
    },
    {
        "name": "marketingAutomation",
        "baseName": "marketingAutomation",
        "type": "GetAccountAllOfMarketingAutomation"
    }
];
exports.GetAccount = GetAccount;
//# sourceMappingURL=getAccount.js.map