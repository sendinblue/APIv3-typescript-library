"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendReport {
    static getAttributeTypeMap() {
        return SendReport.attributeTypeMap;
    }
}
SendReport.discriminator = undefined;
SendReport.attributeTypeMap = [
    {
        "name": "language",
        "baseName": "language",
        "type": "SendReport.LanguageEnum"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "SendReportEmail"
    }
];
exports.SendReport = SendReport;
(function (SendReport) {
    let LanguageEnum;
    (function (LanguageEnum) {
        LanguageEnum[LanguageEnum["Fr"] = 'fr'] = "Fr";
        LanguageEnum[LanguageEnum["Es"] = 'es'] = "Es";
        LanguageEnum[LanguageEnum["Pt"] = 'pt'] = "Pt";
        LanguageEnum[LanguageEnum["It"] = 'it'] = "It";
        LanguageEnum[LanguageEnum["De"] = 'de'] = "De";
        LanguageEnum[LanguageEnum["En"] = 'en'] = "En";
    })(LanguageEnum = SendReport.LanguageEnum || (SendReport.LanguageEnum = {}));
})(SendReport = exports.SendReport || (exports.SendReport = {}));
//# sourceMappingURL=sendReport.js.map