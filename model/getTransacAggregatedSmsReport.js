"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetTransacAggregatedSmsReport {
    static getAttributeTypeMap() {
        return GetTransacAggregatedSmsReport.attributeTypeMap;
    }
}
GetTransacAggregatedSmsReport.discriminator = undefined;
GetTransacAggregatedSmsReport.attributeTypeMap = [
    {
        "name": "range",
        "baseName": "range",
        "type": "string"
    },
    {
        "name": "requests",
        "baseName": "requests",
        "type": "number"
    },
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "number"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "number"
    },
    {
        "name": "blocked",
        "baseName": "blocked",
        "type": "number"
    },
    {
        "name": "unsubscribed",
        "baseName": "unsubscribed",
        "type": "number"
    },
    {
        "name": "replied",
        "baseName": "replied",
        "type": "number"
    },
    {
        "name": "accepted",
        "baseName": "accepted",
        "type": "number"
    },
    {
        "name": "rejected",
        "baseName": "rejected",
        "type": "number"
    }
];
exports.GetTransacAggregatedSmsReport = GetTransacAggregatedSmsReport;
//# sourceMappingURL=getTransacAggregatedSmsReport.js.map