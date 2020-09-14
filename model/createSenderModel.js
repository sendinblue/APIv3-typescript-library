"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateSenderModel {
    static getAttributeTypeMap() {
        return CreateSenderModel.attributeTypeMap;
    }
}
CreateSenderModel.discriminator = undefined;
CreateSenderModel.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "spfError",
        "baseName": "spfError",
        "type": "boolean"
    },
    {
        "name": "dkimError",
        "baseName": "dkimError",
        "type": "boolean"
    }
];
exports.CreateSenderModel = CreateSenderModel;
//# sourceMappingURL=createSenderModel.js.map