"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetEmailEventReport {
    static getAttributeTypeMap() {
        return GetEmailEventReport.attributeTypeMap;
    }
}
GetEmailEventReport.discriminator = undefined;
GetEmailEventReport.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetEmailEventReportEvents>"
    }
];
exports.GetEmailEventReport = GetEmailEventReport;
//# sourceMappingURL=getEmailEventReport.js.map