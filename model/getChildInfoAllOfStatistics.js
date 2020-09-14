"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetChildInfoAllOfStatistics {
    static getAttributeTypeMap() {
        return GetChildInfoAllOfStatistics.attributeTypeMap;
    }
}
GetChildInfoAllOfStatistics.discriminator = undefined;
GetChildInfoAllOfStatistics.attributeTypeMap = [
    {
        "name": "previousMonthTotalSent",
        "baseName": "previousMonthTotalSent",
        "type": "number"
    },
    {
        "name": "currentMonthTotalSent",
        "baseName": "currentMonthTotalSent",
        "type": "number"
    },
    {
        "name": "totalSent",
        "baseName": "totalSent",
        "type": "number"
    }
];
exports.GetChildInfoAllOfStatistics = GetChildInfoAllOfStatistics;
//# sourceMappingURL=getChildInfoAllOfStatistics.js.map