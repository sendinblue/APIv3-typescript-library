"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostContactInfo {
    static getAttributeTypeMap() {
        return PostContactInfo.attributeTypeMap;
    }
}
PostContactInfo.discriminator = undefined;
PostContactInfo.attributeTypeMap = [
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "PostContactInfoContacts"
    }
];
exports.PostContactInfo = PostContactInfo;
//# sourceMappingURL=postContactInfo.js.map