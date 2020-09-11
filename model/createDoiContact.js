"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateDoiContact {
    static getAttributeTypeMap() {
        return CreateDoiContact.attributeTypeMap;
    }
}
CreateDoiContact.discriminator = undefined;
CreateDoiContact.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "object"
    },
    {
        "name": "includeListIds",
        "baseName": "includeListIds",
        "type": "Array<number>"
    },
    {
        "name": "excludeListIds",
        "baseName": "excludeListIds",
        "type": "Array<number>"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "redirectionUrl",
        "baseName": "redirectionUrl",
        "type": "string"
    }
];
exports.CreateDoiContact = CreateDoiContact;
//# sourceMappingURL=createDoiContact.js.map