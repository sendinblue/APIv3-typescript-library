"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetExtendedContactDetailsAllOfStatistics {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsAllOfStatistics.attributeTypeMap;
    }
}
GetExtendedContactDetailsAllOfStatistics.discriminator = undefined;
GetExtendedContactDetailsAllOfStatistics.attributeTypeMap = [
    {
        "name": "messagesSent",
        "baseName": "messagesSent",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>"
    },
    {
        "name": "complaints",
        "baseName": "complaints",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsMessagesSent>"
    },
    {
        "name": "unsubscriptions",
        "baseName": "unsubscriptions",
        "type": "GetExtendedContactDetailsAllOfStatisticsUnsubscriptions"
    },
    {
        "name": "opened",
        "baseName": "opened",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsOpened>"
    },
    {
        "name": "clicked",
        "baseName": "clicked",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsClicked>"
    },
    {
        "name": "transacAttributes",
        "baseName": "transacAttributes",
        "type": "Array<object>"
    }
];
exports.GetExtendedContactDetailsAllOfStatistics = GetExtendedContactDetailsAllOfStatistics;
//# sourceMappingURL=getExtendedContactDetailsAllOfStatistics.js.map