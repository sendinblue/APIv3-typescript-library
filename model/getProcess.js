"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetProcess {
    static getAttributeTypeMap() {
        return GetProcess.attributeTypeMap;
    }
}
GetProcess.discriminator = undefined;
GetProcess.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetProcess.StatusEnum"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "exportUrl",
        "baseName": "export_url",
        "type": "string"
    }
];
exports.GetProcess = GetProcess;
(function (GetProcess) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["InProcess"] = 'in_process'] = "InProcess";
        StatusEnum[StatusEnum["Completed"] = 'completed'] = "Completed";
    })(StatusEnum = GetProcess.StatusEnum || (GetProcess.StatusEnum = {}));
})(GetProcess = exports.GetProcess || (exports.GetProcess = {}));
//# sourceMappingURL=getProcess.js.map