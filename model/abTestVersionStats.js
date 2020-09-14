"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbTestVersionStats {
    static getAttributeTypeMap() {
        return AbTestVersionStats.attributeTypeMap;
    }
}
AbTestVersionStats.discriminator = undefined;
AbTestVersionStats.attributeTypeMap = [
    {
        "name": "versionA",
        "baseName": "Version A",
        "type": "string"
    },
    {
        "name": "versionB",
        "baseName": "Version B",
        "type": "string"
    }
];
exports.AbTestVersionStats = AbTestVersionStats;
//# sourceMappingURL=abTestVersionStats.js.map