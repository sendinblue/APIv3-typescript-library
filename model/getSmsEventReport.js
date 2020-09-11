"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSmsEventReport {
    static getAttributeTypeMap() {
        return GetSmsEventReport.attributeTypeMap;
    }
}
GetSmsEventReport.discriminator = undefined;
GetSmsEventReport.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetSmsEventReportEvents>"
    }
];
exports.GetSmsEventReport = GetSmsEventReport;
//# sourceMappingURL=getSmsEventReport.js.map