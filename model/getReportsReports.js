"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetReportsReports {
    static getAttributeTypeMap() {
        return GetReportsReports.attributeTypeMap;
    }
}
GetReportsReports.discriminator = undefined;
GetReportsReports.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
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
        "name": "clicks",
        "baseName": "clicks",
        "type": "number"
    },
    {
        "name": "uniqueClicks",
        "baseName": "uniqueClicks",
        "type": "number"
    },
    {
        "name": "opens",
        "baseName": "opens",
        "type": "number"
    },
    {
        "name": "uniqueOpens",
        "baseName": "uniqueOpens",
        "type": "number"
    },
    {
        "name": "spamReports",
        "baseName": "spamReports",
        "type": "number"
    },
    {
        "name": "blocked",
        "baseName": "blocked",
        "type": "number"
    },
    {
        "name": "invalid",
        "baseName": "invalid",
        "type": "number"
    },
    {
        "name": "unsubscribed",
        "baseName": "unsubscribed",
        "type": "number"
    }
];
exports.GetReportsReports = GetReportsReports;
//# sourceMappingURL=getReportsReports.js.map