"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetExtendedContactDetailsAllOfStatisticsUnsubscriptions {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsAllOfStatisticsUnsubscriptions.attributeTypeMap;
    }
}
GetExtendedContactDetailsAllOfStatisticsUnsubscriptions.discriminator = undefined;
GetExtendedContactDetailsAllOfStatisticsUnsubscriptions.attributeTypeMap = [
    {
        "name": "userUnsubscription",
        "baseName": "userUnsubscription",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription>"
    },
    {
        "name": "adminUnsubscription",
        "baseName": "adminUnsubscription",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription>"
    }
];
exports.GetExtendedContactDetailsAllOfStatisticsUnsubscriptions = GetExtendedContactDetailsAllOfStatisticsUnsubscriptions;
//# sourceMappingURL=getExtendedContactDetailsAllOfStatisticsUnsubscriptions.js.map