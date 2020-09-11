"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestContactExport {
    static getAttributeTypeMap() {
        return RequestContactExport.attributeTypeMap;
    }
}
RequestContactExport.discriminator = undefined;
RequestContactExport.attributeTypeMap = [
    {
        "name": "exportAttributes",
        "baseName": "exportAttributes",
        "type": "Array<string>"
    },
    {
        "name": "contactFilter",
        "baseName": "contactFilter",
        "type": "object"
    },
    {
        "name": "customContactFilter",
        "baseName": "customContactFilter",
        "type": "RequestContactExportCustomContactFilter"
    },
    {
        "name": "notifyUrl",
        "baseName": "notifyUrl",
        "type": "string"
    }
];
exports.RequestContactExport = RequestContactExport;
//# sourceMappingURL=requestContactExport.js.map