"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostSendFailed {
    static getAttributeTypeMap() {
        return PostSendFailed.attributeTypeMap;
    }
}
PostSendFailed.discriminator = undefined;
PostSendFailed.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "unexistingEmails",
        "baseName": "unexistingEmails",
        "type": "Array<string>"
    },
    {
        "name": "withoutListEmails",
        "baseName": "withoutListEmails",
        "type": "Array<string>"
    },
    {
        "name": "blackListedEmails",
        "baseName": "blackListedEmails",
        "type": "Array<string>"
    }
];
exports.PostSendFailed = PostSendFailed;
//# sourceMappingURL=postSendFailed.js.map