"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostContactInfoContacts {
    static getAttributeTypeMap() {
        return PostContactInfoContacts.attributeTypeMap;
    }
}
PostContactInfoContacts.discriminator = undefined;
PostContactInfoContacts.attributeTypeMap = [
    {
        "name": "success",
        "baseName": "success",
        "type": "Array<string>"
    },
    {
        "name": "failure",
        "baseName": "failure",
        "type": "Array<string>"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "processId",
        "baseName": "processId",
        "type": "number"
    }
];
exports.PostContactInfoContacts = PostContactInfoContacts;
//# sourceMappingURL=postContactInfoContacts.js.map