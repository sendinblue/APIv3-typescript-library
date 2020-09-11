"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetWebhooks {
    static getAttributeTypeMap() {
        return GetWebhooks.attributeTypeMap;
    }
}
GetWebhooks.discriminator = undefined;
GetWebhooks.attributeTypeMap = [
    {
        "name": "webhooks",
        "baseName": "webhooks",
        "type": "Array<GetWebhook>"
    }
];
exports.GetWebhooks = GetWebhooks;
//# sourceMappingURL=getWebhooks.js.map