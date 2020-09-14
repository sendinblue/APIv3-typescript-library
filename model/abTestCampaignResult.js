"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbTestCampaignResult {
    static getAttributeTypeMap() {
        return AbTestCampaignResult.attributeTypeMap;
    }
}
AbTestCampaignResult.discriminator = undefined;
AbTestCampaignResult.attributeTypeMap = [
    {
        "name": "winningVersion",
        "baseName": "winningVersion",
        "type": "AbTestCampaignResult.WinningVersionEnum"
    },
    {
        "name": "winningCriteria",
        "baseName": "winningCriteria",
        "type": "AbTestCampaignResult.WinningCriteriaEnum"
    },
    {
        "name": "winningSubjectLine",
        "baseName": "winningSubjectLine",
        "type": "string"
    },
    {
        "name": "openRate",
        "baseName": "openRate",
        "type": "string"
    },
    {
        "name": "clickRate",
        "baseName": "clickRate",
        "type": "string"
    },
    {
        "name": "winningVersionRate",
        "baseName": "winningVersionRate",
        "type": "string"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "AbTestCampaignResultStatistics"
    },
    {
        "name": "clickedLinks",
        "baseName": "clickedLinks",
        "type": "AbTestCampaignResultClickedLinks"
    }
];
exports.AbTestCampaignResult = AbTestCampaignResult;
(function (AbTestCampaignResult) {
    let WinningVersionEnum;
    (function (WinningVersionEnum) {
        WinningVersionEnum[WinningVersionEnum["NotAvailable"] = 'notAvailable'] = "NotAvailable";
        WinningVersionEnum[WinningVersionEnum["Pending"] = 'pending'] = "Pending";
        WinningVersionEnum[WinningVersionEnum["Tie"] = 'tie'] = "Tie";
        WinningVersionEnum[WinningVersionEnum["A"] = 'A'] = "A";
        WinningVersionEnum[WinningVersionEnum["B"] = 'B'] = "B";
    })(WinningVersionEnum = AbTestCampaignResult.WinningVersionEnum || (AbTestCampaignResult.WinningVersionEnum = {}));
    let WinningCriteriaEnum;
    (function (WinningCriteriaEnum) {
        WinningCriteriaEnum[WinningCriteriaEnum["Open"] = 'Open'] = "Open";
        WinningCriteriaEnum[WinningCriteriaEnum["Click"] = 'Click'] = "Click";
    })(WinningCriteriaEnum = AbTestCampaignResult.WinningCriteriaEnum || (AbTestCampaignResult.WinningCriteriaEnum = {}));
})(AbTestCampaignResult = exports.AbTestCampaignResult || (exports.AbTestCampaignResult = {}));
//# sourceMappingURL=abTestCampaignResult.js.map