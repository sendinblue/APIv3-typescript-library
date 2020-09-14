"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetStatsByDevice {
    static getAttributeTypeMap() {
        return GetStatsByDevice.attributeTypeMap;
    }
}
GetStatsByDevice.discriminator = undefined;
GetStatsByDevice.attributeTypeMap = [
    {
        "name": "desktop",
        "baseName": "desktop",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    },
    {
        "name": "mobile",
        "baseName": "mobile",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    },
    {
        "name": "tablet",
        "baseName": "tablet",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    },
    {
        "name": "unknown",
        "baseName": "unknown",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    }
];
exports.GetStatsByDevice = GetStatsByDevice;
//# sourceMappingURL=getStatsByDevice.js.map