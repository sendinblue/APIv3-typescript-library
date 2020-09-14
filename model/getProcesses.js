"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetProcesses {
    static getAttributeTypeMap() {
        return GetProcesses.attributeTypeMap;
    }
}
GetProcesses.discriminator = undefined;
GetProcesses.attributeTypeMap = [
    {
        "name": "processes",
        "baseName": "processes",
        "type": "Array<GetProcess>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetProcesses = GetProcesses;
//# sourceMappingURL=getProcesses.js.map