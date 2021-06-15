"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateEmailCampaign {
    static getAttributeTypeMap() {
        return CreateEmailCampaign.attributeTypeMap;
    }
}
CreateEmailCampaign.discriminator = undefined;
CreateEmailCampaign.attributeTypeMap = [
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "CreateEmailCampaignSender"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "htmlUrl",
        "baseName": "htmlUrl",
        "type": "string"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
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
        "name": "recipients",
        "baseName": "recipients",
        "type": "CreateEmailCampaignRecipients"
    },
    {
        "name": "attachmentUrl",
        "baseName": "attachmentUrl",
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
        "name": "footer",
        "baseName": "footer",
        "type": "string"
    },
    {
        "name": "header",
        "baseName": "header",
        "type": "string"
    },
    {
        "name": "utmCampaign",
        "baseName": "utmCampaign",
        "type": "string"
    },
    {
        "name": "params",
        "baseName": "params",
        "type": "object"
    },
    {
        "name": "sendAtBestTime",
        "baseName": "sendAtBestTime",
        "type": "boolean"
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
        "type": "CreateEmailCampaign.WinnerCriteriaEnum"
    },
    {
        "name": "winnerDelay",
        "baseName": "winnerDelay",
        "type": "number"
    },
    {
        "name": "ipWarmupEnable",
        "baseName": "ipWarmupEnable",
        "type": "boolean"
    },
    {
        "name": "initialQuota",
        "baseName": "initialQuota",
        "type": "number"
    },
    {
        "name": "increaseRate",
        "baseName": "increaseRate",
        "type": "number"
    }
];
exports.CreateEmailCampaign = CreateEmailCampaign;
(function (CreateEmailCampaign) {
    let WinnerCriteriaEnum;
    (function (WinnerCriteriaEnum) {
        WinnerCriteriaEnum[WinnerCriteriaEnum["Open"] = 'open'] = "Open";
        WinnerCriteriaEnum[WinnerCriteriaEnum["Click"] = 'click'] = "Click";
    })(WinnerCriteriaEnum = CreateEmailCampaign.WinnerCriteriaEnum || (CreateEmailCampaign.WinnerCriteriaEnum = {}));
})(CreateEmailCampaign = exports.CreateEmailCampaign || (exports.CreateEmailCampaign = {}));
//# sourceMappingURL=createEmailCampaign.js.map