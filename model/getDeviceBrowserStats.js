"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetDeviceBrowserStats {
    static getAttributeTypeMap() {
        return GetDeviceBrowserStats.attributeTypeMap;
    }
}
GetDeviceBrowserStats.discriminator = undefined;
GetDeviceBrowserStats.attributeTypeMap = [
    {
        "name": "clickers",
        "baseName": "clickers",
        "type": "number"
    },
    {
        "name": "uniqueClicks",
        "baseName": "uniqueClicks",
        "type": "number"
    },
    {
        "name": "viewed",
        "baseName": "viewed",
        "type": "number"
    },
    {
        "name": "uniqueViews",
        "baseName": "uniqueViews",
        "type": "number"
    }
];
exports.GetDeviceBrowserStats = GetDeviceBrowserStats;
//# sourceMappingURL=getDeviceBrowserStats.js.map