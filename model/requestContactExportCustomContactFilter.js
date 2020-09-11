"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestContactExportCustomContactFilter {
    static getAttributeTypeMap() {
        return RequestContactExportCustomContactFilter.attributeTypeMap;
    }
}
RequestContactExportCustomContactFilter.discriminator = undefined;
RequestContactExportCustomContactFilter.attributeTypeMap = [
    {
        "name": "actionForContacts",
        "baseName": "actionForContacts",
        "type": "RequestContactExportCustomContactFilter.ActionForContactsEnum"
    },
    {
        "name": "actionForEmailCampaigns",
        "baseName": "actionForEmailCampaigns",
        "type": "RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum"
    },
    {
        "name": "actionForSmsCampaigns",
        "baseName": "actionForSmsCampaigns",
        "type": "RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum"
    },
    {
        "name": "listId",
        "baseName": "listId",
        "type": "number"
    },
    {
        "name": "emailCampaignId",
        "baseName": "emailCampaignId",
        "type": "number"
    },
    {
        "name": "smsCampaignId",
        "baseName": "smsCampaignId",
        "type": "number"
    }
];
exports.RequestContactExportCustomContactFilter = RequestContactExportCustomContactFilter;
(function (RequestContactExportCustomContactFilter) {
    let ActionForContactsEnum;
    (function (ActionForContactsEnum) {
        ActionForContactsEnum[ActionForContactsEnum["AllContacts"] = 'allContacts'] = "AllContacts";
        ActionForContactsEnum[ActionForContactsEnum["Subscribed"] = 'subscribed'] = "Subscribed";
        ActionForContactsEnum[ActionForContactsEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
        ActionForContactsEnum[ActionForContactsEnum["UnsubscribedPerList"] = 'unsubscribedPerList'] = "UnsubscribedPerList";
    })(ActionForContactsEnum = RequestContactExportCustomContactFilter.ActionForContactsEnum || (RequestContactExportCustomContactFilter.ActionForContactsEnum = {}));
    let ActionForEmailCampaignsEnum;
    (function (ActionForEmailCampaignsEnum) {
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["Openers"] = 'openers'] = "Openers";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["NonOpeners"] = 'nonOpeners'] = "NonOpeners";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["Clickers"] = 'clickers'] = "Clickers";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["NonClickers"] = 'nonClickers'] = "NonClickers";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
    })(ActionForEmailCampaignsEnum = RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum || (RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum = {}));
    let ActionForSmsCampaignsEnum;
    (function (ActionForSmsCampaignsEnum) {
        ActionForSmsCampaignsEnum[ActionForSmsCampaignsEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        ActionForSmsCampaignsEnum[ActionForSmsCampaignsEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
        ActionForSmsCampaignsEnum[ActionForSmsCampaignsEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
    })(ActionForSmsCampaignsEnum = RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum || (RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum = {}));
})(RequestContactExportCustomContactFilter = exports.RequestContactExportCustomContactFilter || (exports.RequestContactExportCustomContactFilter = {}));
//# sourceMappingURL=requestContactExportCustomContactFilter.js.map