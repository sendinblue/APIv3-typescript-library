"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetEmailCampaign {
    static getAttributeTypeMap() {
        return GetEmailCampaign.attributeTypeMap;
    }
}
GetEmailCampaign.discriminator = undefined;
GetEmailCampaign.attributeTypeMap = [
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
        "type": "GetEmailCampaign.TypeEnum"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetEmailCampaign.StatusEnum"
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
    },
    {
        "name": "testSent",
        "baseName": "testSent",
        "type": "boolean"
    },
    {
        "name": "header",
        "baseName": "header",
        "type": "string"
    },
    {
        "name": "footer",
        "baseName": "footer",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "GetExtendedCampaignOverviewAllOfSender"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "string"
    },
    {
        "name": "toField",
        "baseName": "toField",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "shareLink",
        "baseName": "shareLink",
        "type": "string"
    },
    {
        "name": "tag",
        "baseName": "tag",
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
        "name": "inlineImageActivation",
        "baseName": "inlineImageActivation",
        "type": "boolean"
    },
    {
        "name": "mirrorActive",
        "baseName": "mirrorActive",
        "type": "boolean"
    },
    {
        "name": "recurring",
        "baseName": "recurring",
        "type": "boolean"
    },
    {
        "name": "sentDate",
        "baseName": "sentDate",
        "type": "string"
    },
    {
        "name": "returnBounce",
        "baseName": "returnBounce",
        "type": "number"
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "GetCampaignRecipients"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetExtendedCampaignStats"
    }
];
exports.GetEmailCampaign = GetEmailCampaign;
(function (GetEmailCampaign) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Classic"] = 'classic'] = "Classic";
        TypeEnum[TypeEnum["Trigger"] = 'trigger'] = "Trigger";
    })(TypeEnum = GetEmailCampaign.TypeEnum || (GetEmailCampaign.TypeEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["InProcess"] = 'in_process'] = "InProcess";
    })(StatusEnum = GetEmailCampaign.StatusEnum || (GetEmailCampaign.StatusEnum = {}));
})(GetEmailCampaign = exports.GetEmailCampaign || (exports.GetEmailCampaign = {}));
//# sourceMappingURL=getEmailCampaign.js.map