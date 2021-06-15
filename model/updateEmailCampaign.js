"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateEmailCampaign {
    static getAttributeTypeMap() {
        return UpdateEmailCampaign.attributeTypeMap;
    }
}
UpdateEmailCampaign.discriminator = undefined;
UpdateEmailCampaign.attributeTypeMap = [
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "UpdateEmailCampaignSender"
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
        "type": "UpdateEmailCampaignRecipients"
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
        "name": "recurring",
        "baseName": "recurring",
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
        "type": "UpdateEmailCampaign.WinnerCriteriaEnum"
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
exports.UpdateEmailCampaign = UpdateEmailCampaign;
(function (UpdateEmailCampaign) {
    let WinnerCriteriaEnum;
    (function (WinnerCriteriaEnum) {
        WinnerCriteriaEnum[WinnerCriteriaEnum["Open"] = 'open'] = "Open";
        WinnerCriteriaEnum[WinnerCriteriaEnum["Click"] = 'click'] = "Click";
    })(WinnerCriteriaEnum = UpdateEmailCampaign.WinnerCriteriaEnum || (UpdateEmailCampaign.WinnerCriteriaEnum = {}));
})(UpdateEmailCampaign = exports.UpdateEmailCampaign || (exports.UpdateEmailCampaign = {}));
//# sourceMappingURL=updateEmailCampaign.js.map