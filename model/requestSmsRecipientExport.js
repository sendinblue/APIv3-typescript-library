"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestSmsRecipientExport {
    static getAttributeTypeMap() {
        return RequestSmsRecipientExport.attributeTypeMap;
    }
}
RequestSmsRecipientExport.discriminator = undefined;
RequestSmsRecipientExport.attributeTypeMap = [
    {
        "name": "notifyURL",
        "baseName": "notifyURL",
        "type": "string"
    },
    {
        "name": "recipientsType",
        "baseName": "recipientsType",
        "type": "RequestSmsRecipientExport.RecipientsTypeEnum"
    }
];
exports.RequestSmsRecipientExport = RequestSmsRecipientExport;
(function (RequestSmsRecipientExport) {
    let RecipientsTypeEnum;
    (function (RecipientsTypeEnum) {
        RecipientsTypeEnum[RecipientsTypeEnum["All"] = 'all'] = "All";
        RecipientsTypeEnum[RecipientsTypeEnum["Delivered"] = 'delivered'] = "Delivered";
        RecipientsTypeEnum[RecipientsTypeEnum["Answered"] = 'answered'] = "Answered";
        RecipientsTypeEnum[RecipientsTypeEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
        RecipientsTypeEnum[RecipientsTypeEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        RecipientsTypeEnum[RecipientsTypeEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
    })(RecipientsTypeEnum = RequestSmsRecipientExport.RecipientsTypeEnum || (RequestSmsRecipientExport.RecipientsTypeEnum = {}));
})(RequestSmsRecipientExport = exports.RequestSmsRecipientExport || (exports.RequestSmsRecipientExport = {}));
//# sourceMappingURL=requestSmsRecipientExport.js.map