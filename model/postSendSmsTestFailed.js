"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostSendSmsTestFailed {
    static getAttributeTypeMap() {
        return PostSendSmsTestFailed.attributeTypeMap;
    }
}
PostSendSmsTestFailed.discriminator = undefined;
PostSendSmsTestFailed.attributeTypeMap = [
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
        "name": "unexistingSms",
        "baseName": "unexistingSms",
        "type": "Array<string>"
    },
    {
        "name": "withoutListSms",
        "baseName": "withoutListSms",
        "type": "Array<string>"
    }
];
exports.PostSendSmsTestFailed = PostSendSmsTestFailed;
//# sourceMappingURL=postSendSmsTestFailed.js.map