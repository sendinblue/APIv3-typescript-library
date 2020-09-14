"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendReportEmail {
    static getAttributeTypeMap() {
        return SendReportEmail.attributeTypeMap;
    }
}
SendReportEmail.discriminator = undefined;
SendReportEmail.attributeTypeMap = [
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<string>"
    },
    {
        "name": "contentType",
        "baseName": "contentType",
        "type": "SendReportEmail.ContentTypeEnum"
    },
    {
        "name": "bcc",
        "baseName": "bcc",
        "type": "Array<string>"
    },
    {
        "name": "cc",
        "baseName": "cc",
        "type": "Array<string>"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    }
];
exports.SendReportEmail = SendReportEmail;
(function (SendReportEmail) {
    let ContentTypeEnum;
    (function (ContentTypeEnum) {
        ContentTypeEnum[ContentTypeEnum["Text"] = 'text'] = "Text";
        ContentTypeEnum[ContentTypeEnum["Html"] = 'html'] = "Html";
    })(ContentTypeEnum = SendReportEmail.ContentTypeEnum || (SendReportEmail.ContentTypeEnum = {}));
})(SendReportEmail = exports.SendReportEmail || (exports.SendReportEmail = {}));
//# sourceMappingURL=sendReportEmail.js.map