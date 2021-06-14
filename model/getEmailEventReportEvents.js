"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetEmailEventReportEvents {
    static getAttributeTypeMap() {
        return GetEmailEventReportEvents.attributeTypeMap;
    }
}
GetEmailEventReportEvents.discriminator = undefined;
GetEmailEventReportEvents.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "event",
        "baseName": "event",
        "type": "GetEmailEventReportEvents.EventEnum"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "string"
    },
    {
        "name": "from",
        "baseName": "from",
        "type": "string"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    }
];
exports.GetEmailEventReportEvents = GetEmailEventReportEvents;
(function (GetEmailEventReportEvents) {
    let EventEnum;
    (function (EventEnum) {
        EventEnum[EventEnum["Bounces"] = 'bounces'] = "Bounces";
        EventEnum[EventEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        EventEnum[EventEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
        EventEnum[EventEnum["Delivered"] = 'delivered'] = "Delivered";
        EventEnum[EventEnum["Spam"] = 'spam'] = "Spam";
        EventEnum[EventEnum["Requests"] = 'requests'] = "Requests";
        EventEnum[EventEnum["Opened"] = 'opened'] = "Opened";
        EventEnum[EventEnum["Clicks"] = 'clicks'] = "Clicks";
        EventEnum[EventEnum["Invalid"] = 'invalid'] = "Invalid";
        EventEnum[EventEnum["Deferred"] = 'deferred'] = "Deferred";
        EventEnum[EventEnum["Blocked"] = 'blocked'] = "Blocked";
        EventEnum[EventEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
        EventEnum[EventEnum["Error"] = 'error'] = "Error";
    })(EventEnum = GetEmailEventReportEvents.EventEnum || (GetEmailEventReportEvents.EventEnum = {}));
})(GetEmailEventReportEvents = exports.GetEmailEventReportEvents || (exports.GetEmailEventReportEvents = {}));
//# sourceMappingURL=getEmailEventReportEvents.js.map