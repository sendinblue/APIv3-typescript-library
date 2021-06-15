"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSmsCampaign {
    static getAttributeTypeMap() {
        return GetSmsCampaign.attributeTypeMap;
    }
}
GetSmsCampaign.discriminator = undefined;
GetSmsCampaign.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetSmsCampaign.StatusEnum"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
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
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "GetCampaignRecipients"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetSmsCampaignStats"
    }
];
exports.GetSmsCampaign = GetSmsCampaign;
(function (GetSmsCampaign) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["InProcess"] = 'inProcess'] = "InProcess";
    })(StatusEnum = GetSmsCampaign.StatusEnum || (GetSmsCampaign.StatusEnum = {}));
})(GetSmsCampaign = exports.GetSmsCampaign || (exports.GetSmsCampaign = {}));
//# sourceMappingURL=getSmsCampaign.js.map