"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./accountApi"));
const accountApi_1 = require("./accountApi");
__export(require("./attributesApi"));
const attributesApi_1 = require("./attributesApi");
__export(require("./contactsApi"));
const contactsApi_1 = require("./contactsApi");
__export(require("./emailCampaignsApi"));
const emailCampaignsApi_1 = require("./emailCampaignsApi");
__export(require("./foldersApi"));
const foldersApi_1 = require("./foldersApi");
__export(require("./listsApi"));
const listsApi_1 = require("./listsApi");
__export(require("./processApi"));
const processApi_1 = require("./processApi");
__export(require("./resellerApi"));
const resellerApi_1 = require("./resellerApi");
__export(require("./sMSCampaignsApi"));
const sMSCampaignsApi_1 = require("./sMSCampaignsApi");
__export(require("./sendersApi"));
const sendersApi_1 = require("./sendersApi");
__export(require("./transactionalEmailsApi"));
const transactionalEmailsApi_1 = require("./transactionalEmailsApi");
__export(require("./transactionalSMSApi"));
const transactionalSMSApi_1 = require("./transactionalSMSApi");
__export(require("./webhooksApi"));
const webhooksApi_1 = require("./webhooksApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [accountApi_1.AccountApi, attributesApi_1.AttributesApi, contactsApi_1.ContactsApi, emailCampaignsApi_1.EmailCampaignsApi, foldersApi_1.FoldersApi, listsApi_1.ListsApi, processApi_1.ProcessApi, resellerApi_1.ResellerApi, sMSCampaignsApi_1.SMSCampaignsApi, sendersApi_1.SendersApi, transactionalEmailsApi_1.TransactionalEmailsApi, transactionalSMSApi_1.TransactionalSMSApi, webhooksApi_1.WebhooksApi];
//# sourceMappingURL=apis.js.map