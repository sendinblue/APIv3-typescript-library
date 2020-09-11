"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSmtpTemplates {
    static getAttributeTypeMap() {
        return GetSmtpTemplates.attributeTypeMap;
    }
}
GetSmtpTemplates.discriminator = undefined;
GetSmtpTemplates.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "templates",
        "baseName": "templates",
        "type": "Array<GetSmtpTemplateOverview>"
    }
];
exports.GetSmtpTemplates = GetSmtpTemplates;
//# sourceMappingURL=getSmtpTemplates.js.map