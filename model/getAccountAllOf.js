"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetAccountAllOf {
    static getAttributeTypeMap() {
        return GetAccountAllOf.attributeTypeMap;
    }
}
GetAccountAllOf.discriminator = undefined;
GetAccountAllOf.attributeTypeMap = [
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
exports.GetAccountAllOf = GetAccountAllOf;
//# sourceMappingURL=getAccountAllOf.js.map