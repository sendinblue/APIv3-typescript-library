"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetWebhook {
    static getAttributeTypeMap() {
        return GetWebhook.attributeTypeMap;
    }
}
GetWebhook.discriminator = undefined;
GetWebhook.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<string>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetWebhook.TypeEnum"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "string"
    }
];
exports.GetWebhook = GetWebhook;
(function (GetWebhook) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Marketing"] = 'marketing'] = "Marketing";
        TypeEnum[TypeEnum["Transac"] = 'transac'] = "Transac";
    })(TypeEnum = GetWebhook.TypeEnum || (GetWebhook.TypeEnum = {}));
})(GetWebhook = exports.GetWebhook || (exports.GetWebhook = {}));
//# sourceMappingURL=getWebhook.js.map