"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetCampaignOverview {
    static getAttributeTypeMap() {
        return GetCampaignOverview.attributeTypeMap;
    }
}
GetCampaignOverview.discriminator = undefined;
GetCampaignOverview.attributeTypeMap = [
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
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetCampaignOverview.TypeEnum"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetCampaignOverview.StatusEnum"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "string"
    },
    {
        "name": "abTesting",
        "baseName": "abTesting",
        "type": "boolean"
    },
    {
        "name": "subjectA",
        "baseName": "subjectA",
        "type": "string"
    },
    {
        "name": "subjectB",
        "baseName": "subjectB",
        "type": "string"
    },
    {
        "name": "splitRule",
        "baseName": "splitRule",
        "type": "number"
    },
    {
        "name": "winnerCriteria",
        "baseName": "winnerCriteria",
        "type": "string"
    },
    {
        "name": "winnerDelay",
        "baseName": "winnerDelay",
        "type": "number"
    },
    {
        "name": "sendAtBestTime",
        "baseName": "sendAtBestTime",
        "type": "boolean"
    }
];
exports.GetCampaignOverview = GetCampaignOverview;
(function (GetCampaignOverview) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Classic"] = 'classic'] = "Classic";
        TypeEnum[TypeEnum["Trigger"] = 'trigger'] = "Trigger";
    })(TypeEnum = GetCampaignOverview.TypeEnum || (GetCampaignOverview.TypeEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["InProcess"] = 'in_process'] = "InProcess";
    })(StatusEnum = GetCampaignOverview.StatusEnum || (GetCampaignOverview.StatusEnum = {}));
})(GetCampaignOverview = exports.GetCampaignOverview || (exports.GetCampaignOverview = {}));
//# sourceMappingURL=getCampaignOverview.js.map