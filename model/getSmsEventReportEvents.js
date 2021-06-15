"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSmsEventReportEvents {
    static getAttributeTypeMap() {
        return GetSmsEventReportEvents.attributeTypeMap;
    }
}
GetSmsEventReportEvents.discriminator = undefined;
GetSmsEventReportEvents.attributeTypeMap = [
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
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
        "type": "GetSmsEventReportEvents.EventEnum"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "reply",
        "baseName": "reply",
        "type": "string"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    }
];
exports.GetSmsEventReportEvents = GetSmsEventReportEvents;
(function (GetSmsEventReportEvents) {
    let EventEnum;
    (function (EventEnum) {
        EventEnum[EventEnum["Bounces"] = 'bounces'] = "Bounces";
        EventEnum[EventEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        EventEnum[EventEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
        EventEnum[EventEnum["Delivered"] = 'delivered'] = "Delivered";
        EventEnum[EventEnum["Sent"] = 'sent'] = "Sent";
        EventEnum[EventEnum["Accepted"] = 'accepted'] = "Accepted";
        EventEnum[EventEnum["Unsubscription"] = 'unsubscription'] = "Unsubscription";
        EventEnum[EventEnum["Replies"] = 'replies'] = "Replies";
        EventEnum[EventEnum["Blocked"] = 'blocked'] = "Blocked";
    })(EventEnum = GetSmsEventReportEvents.EventEnum || (GetSmsEventReportEvents.EventEnum = {}));
})(GetSmsEventReportEvents = exports.GetSmsEventReportEvents || (exports.GetSmsEventReportEvents = {}));
//# sourceMappingURL=getSmsEventReportEvents.js.map