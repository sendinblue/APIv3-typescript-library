"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localVarRequest = require("request");
const Promise = require("bluebird");
let defaultBasePath = 'https://api.sendinblue.com/v3';
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    return data[discriminatorProperty];
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
class AddChildDomain {
    static getAttributeTypeMap() {
        return AddChildDomain.attributeTypeMap;
    }
}
AddChildDomain.discriminator = undefined;
AddChildDomain.attributeTypeMap = [
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    }
];
exports.AddChildDomain = AddChildDomain;
class AddContactToList {
    static getAttributeTypeMap() {
        return AddContactToList.attributeTypeMap;
    }
}
AddContactToList.discriminator = undefined;
AddContactToList.attributeTypeMap = [
    {
        "name": "emails",
        "baseName": "emails",
        "type": "Array<string>"
    }
];
exports.AddContactToList = AddContactToList;
class AddCredits {
    static getAttributeTypeMap() {
        return AddCredits.attributeTypeMap;
    }
}
AddCredits.discriminator = undefined;
AddCredits.attributeTypeMap = [
    {
        "name": "sms",
        "baseName": "sms",
        "type": "number"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "number"
    }
];
exports.AddCredits = AddCredits;
class CreateAttribute {
    static getAttributeTypeMap() {
        return CreateAttribute.attributeTypeMap;
    }
}
CreateAttribute.discriminator = undefined;
CreateAttribute.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    },
    {
        "name": "enumeration",
        "baseName": "enumeration",
        "type": "Array<CreateAttributeEnumeration>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "CreateAttribute.TypeEnum"
    }
];
exports.CreateAttribute = CreateAttribute;
(function (CreateAttribute) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Text"] = 'text'] = "Text";
        TypeEnum[TypeEnum["Date"] = 'date'] = "Date";
        TypeEnum[TypeEnum["Float"] = 'float'] = "Float";
        TypeEnum[TypeEnum["Boolean"] = 'boolean'] = "Boolean";
        TypeEnum[TypeEnum["Id"] = 'id'] = "Id";
        TypeEnum[TypeEnum["Category"] = 'category'] = "Category";
    })(TypeEnum = CreateAttribute.TypeEnum || (CreateAttribute.TypeEnum = {}));
})(CreateAttribute = exports.CreateAttribute || (exports.CreateAttribute = {}));
class CreateAttributeEnumeration {
    static getAttributeTypeMap() {
        return CreateAttributeEnumeration.attributeTypeMap;
    }
}
CreateAttributeEnumeration.discriminator = undefined;
CreateAttributeEnumeration.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "number"
    },
    {
        "name": "label",
        "baseName": "label",
        "type": "string"
    }
];
exports.CreateAttributeEnumeration = CreateAttributeEnumeration;
class CreateChild {
    static getAttributeTypeMap() {
        return CreateChild.attributeTypeMap;
    }
}
CreateChild.discriminator = undefined;
CreateChild.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "string"
    }
];
exports.CreateChild = CreateChild;
class CreateContact {
    static getAttributeTypeMap() {
        return CreateContact.attributeTypeMap;
    }
}
CreateContact.discriminator = undefined;
CreateContact.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "any"
    },
    {
        "name": "emailBlacklisted",
        "baseName": "emailBlacklisted",
        "type": "boolean"
    },
    {
        "name": "smsBlacklisted",
        "baseName": "smsBlacklisted",
        "type": "boolean"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "updateEnabled",
        "baseName": "updateEnabled",
        "type": "boolean"
    },
    {
        "name": "smtpBlacklistSender",
        "baseName": "smtpBlacklistSender",
        "type": "Array<string>"
    }
];
exports.CreateContact = CreateContact;
class CreateEmailCampaign {
    static getAttributeTypeMap() {
        return CreateEmailCampaign.attributeTypeMap;
    }
}
CreateEmailCampaign.discriminator = undefined;
CreateEmailCampaign.attributeTypeMap = [
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "CreateEmailCampaignSender"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "htmlUrl",
        "baseName": "htmlUrl",
        "type": "string"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "string"
    },
    {
        "name": "toField",
        "baseName": "toField",
        "type": "string"
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "CreateEmailCampaignRecipients"
    },
    {
        "name": "attachmentUrl",
        "baseName": "attachmentUrl",
        "type": "string"
    },
    {
        "name": "inlineImageActivation",
        "baseName": "inlineImageActivation",
        "type": "boolean"
    },
    {
        "name": "mirrorActive",
        "baseName": "mirrorActive",
        "type": "boolean"
    },
    {
        "name": "footer",
        "baseName": "footer",
        "type": "string"
    },
    {
        "name": "header",
        "baseName": "header",
        "type": "string"
    },
    {
        "name": "utmCampaign",
        "baseName": "utmCampaign",
        "type": "string"
    },
    {
        "name": "params",
        "baseName": "params",
        "type": "any"
    },
    {
        "name": "sendAtBestTime",
        "baseName": "sendAtBestTime",
        "type": "boolean"
    },
    {
        "name": "abTesting",
        "baseName": "abTesting",
        "type": "boolean"
    },
    {
        "name": "subjectA",
        "baseName": "subjectA",
        "type": "string"
    },
    {
        "name": "subjectB",
        "baseName": "subjectB",
        "type": "string"
    },
    {
        "name": "splitRule",
        "baseName": "splitRule",
        "type": "number"
    },
    {
        "name": "winnerCriteria",
        "baseName": "winnerCriteria",
        "type": "CreateEmailCampaign.WinnerCriteriaEnum"
    },
    {
        "name": "winnerDelay",
        "baseName": "winnerDelay",
        "type": "number"
    }
];
exports.CreateEmailCampaign = CreateEmailCampaign;
(function (CreateEmailCampaign) {
    let WinnerCriteriaEnum;
    (function (WinnerCriteriaEnum) {
        WinnerCriteriaEnum[WinnerCriteriaEnum["Open"] = 'open'] = "Open";
        WinnerCriteriaEnum[WinnerCriteriaEnum["Click"] = 'click'] = "Click";
    })(WinnerCriteriaEnum = CreateEmailCampaign.WinnerCriteriaEnum || (CreateEmailCampaign.WinnerCriteriaEnum = {}));
})(CreateEmailCampaign = exports.CreateEmailCampaign || (exports.CreateEmailCampaign = {}));
class CreateEmailCampaignRecipients {
    static getAttributeTypeMap() {
        return CreateEmailCampaignRecipients.attributeTypeMap;
    }
}
CreateEmailCampaignRecipients.discriminator = undefined;
CreateEmailCampaignRecipients.attributeTypeMap = [
    {
        "name": "exclusionListIds",
        "baseName": "exclusionListIds",
        "type": "Array<number>"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    }
];
exports.CreateEmailCampaignRecipients = CreateEmailCampaignRecipients;
class CreateEmailCampaignSender {
    static getAttributeTypeMap() {
        return CreateEmailCampaignSender.attributeTypeMap;
    }
}
CreateEmailCampaignSender.discriminator = undefined;
CreateEmailCampaignSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    }
];
exports.CreateEmailCampaignSender = CreateEmailCampaignSender;
class CreateList {
    static getAttributeTypeMap() {
        return CreateList.attributeTypeMap;
    }
}
CreateList.discriminator = undefined;
CreateList.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "folderId",
        "baseName": "folderId",
        "type": "number"
    }
];
exports.CreateList = CreateList;
class CreateModel {
    static getAttributeTypeMap() {
        return CreateModel.attributeTypeMap;
    }
}
CreateModel.discriminator = undefined;
CreateModel.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
exports.CreateModel = CreateModel;
class CreateReseller {
    static getAttributeTypeMap() {
        return CreateReseller.attributeTypeMap;
    }
}
CreateReseller.discriminator = undefined;
CreateReseller.attributeTypeMap = [
    {
        "name": "authKey",
        "baseName": "authKey",
        "type": "string"
    }
];
exports.CreateReseller = CreateReseller;
class CreateSender {
    static getAttributeTypeMap() {
        return CreateSender.attributeTypeMap;
    }
}
CreateSender.discriminator = undefined;
CreateSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<CreateSenderIps>"
    }
];
exports.CreateSender = CreateSender;
class CreateSenderIps {
    static getAttributeTypeMap() {
        return CreateSenderIps.attributeTypeMap;
    }
}
CreateSenderIps.discriminator = undefined;
CreateSenderIps.attributeTypeMap = [
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "number"
    }
];
exports.CreateSenderIps = CreateSenderIps;
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
class CreateSmsCampaign {
    static getAttributeTypeMap() {
        return CreateSmsCampaign.attributeTypeMap;
    }
}
CreateSmsCampaign.discriminator = undefined;
CreateSmsCampaign.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "CreateSmsCampaignRecipients"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    }
];
exports.CreateSmsCampaign = CreateSmsCampaign;
class CreateSmsCampaignRecipients {
    static getAttributeTypeMap() {
        return CreateSmsCampaignRecipients.attributeTypeMap;
    }
}
CreateSmsCampaignRecipients.discriminator = undefined;
CreateSmsCampaignRecipients.attributeTypeMap = [
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "exclusionListIds",
        "baseName": "exclusionListIds",
        "type": "Array<number>"
    }
];
exports.CreateSmsCampaignRecipients = CreateSmsCampaignRecipients;
class CreateSmtpEmail {
    static getAttributeTypeMap() {
        return CreateSmtpEmail.attributeTypeMap;
    }
}
CreateSmtpEmail.discriminator = undefined;
CreateSmtpEmail.attributeTypeMap = [
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    }
];
exports.CreateSmtpEmail = CreateSmtpEmail;
class CreateSmtpTemplate {
    static getAttributeTypeMap() {
        return CreateSmtpTemplate.attributeTypeMap;
    }
}
CreateSmtpTemplate.discriminator = undefined;
CreateSmtpTemplate.attributeTypeMap = [
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "CreateSmtpTemplateSender"
    },
    {
        "name": "templateName",
        "baseName": "templateName",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "htmlUrl",
        "baseName": "htmlUrl",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "string"
    },
    {
        "name": "toField",
        "baseName": "toField",
        "type": "string"
    },
    {
        "name": "attachmentUrl",
        "baseName": "attachmentUrl",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    }
];
exports.CreateSmtpTemplate = CreateSmtpTemplate;
class CreateSmtpTemplateSender {
    static getAttributeTypeMap() {
        return CreateSmtpTemplateSender.attributeTypeMap;
    }
}
CreateSmtpTemplateSender.discriminator = undefined;
CreateSmtpTemplateSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    }
];
exports.CreateSmtpTemplateSender = CreateSmtpTemplateSender;
class CreateUpdateContactModel {
    static getAttributeTypeMap() {
        return CreateUpdateContactModel.attributeTypeMap;
    }
}
CreateUpdateContactModel.discriminator = undefined;
CreateUpdateContactModel.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
exports.CreateUpdateContactModel = CreateUpdateContactModel;
class CreateUpdateFolder {
    static getAttributeTypeMap() {
        return CreateUpdateFolder.attributeTypeMap;
    }
}
CreateUpdateFolder.discriminator = undefined;
CreateUpdateFolder.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.CreateUpdateFolder = CreateUpdateFolder;
class CreateWebhook {
    static getAttributeTypeMap() {
        return CreateWebhook.attributeTypeMap;
    }
}
CreateWebhook.discriminator = undefined;
CreateWebhook.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<CreateWebhook.EventsEnum>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "CreateWebhook.TypeEnum"
    }
];
exports.CreateWebhook = CreateWebhook;
(function (CreateWebhook) {
    let EventsEnum;
    (function (EventsEnum) {
        EventsEnum[EventsEnum["HardBounce"] = 'hardBounce'] = "HardBounce";
        EventsEnum[EventsEnum["SoftBounce"] = 'softBounce'] = "SoftBounce";
        EventsEnum[EventsEnum["Blocked"] = 'blocked'] = "Blocked";
        EventsEnum[EventsEnum["Spam"] = 'spam'] = "Spam";
        EventsEnum[EventsEnum["Delivered"] = 'delivered'] = "Delivered";
        EventsEnum[EventsEnum["Request"] = 'request'] = "Request";
        EventsEnum[EventsEnum["Click"] = 'click'] = "Click";
        EventsEnum[EventsEnum["Invalid"] = 'invalid'] = "Invalid";
        EventsEnum[EventsEnum["Deferred"] = 'deferred'] = "Deferred";
        EventsEnum[EventsEnum["Opened"] = 'opened'] = "Opened";
        EventsEnum[EventsEnum["UniqueOpened"] = 'uniqueOpened'] = "UniqueOpened";
        EventsEnum[EventsEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
        EventsEnum[EventsEnum["ListAddition"] = 'listAddition'] = "ListAddition";
        EventsEnum[EventsEnum["ContactUpdated"] = 'contactUpdated'] = "ContactUpdated";
        EventsEnum[EventsEnum["ContactDeleted"] = 'contactDeleted'] = "ContactDeleted";
    })(EventsEnum = CreateWebhook.EventsEnum || (CreateWebhook.EventsEnum = {}));
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Transactional"] = 'transactional'] = "Transactional";
        TypeEnum[TypeEnum["Marketing"] = 'marketing'] = "Marketing";
    })(TypeEnum = CreateWebhook.TypeEnum || (CreateWebhook.TypeEnum = {}));
})(CreateWebhook = exports.CreateWebhook || (exports.CreateWebhook = {}));
class CreatedProcessId {
    static getAttributeTypeMap() {
        return CreatedProcessId.attributeTypeMap;
    }
}
CreatedProcessId.discriminator = undefined;
CreatedProcessId.attributeTypeMap = [
    {
        "name": "processId",
        "baseName": "processId",
        "type": "number"
    }
];
exports.CreatedProcessId = CreatedProcessId;
class DeleteHardbounces {
    static getAttributeTypeMap() {
        return DeleteHardbounces.attributeTypeMap;
    }
}
DeleteHardbounces.discriminator = undefined;
DeleteHardbounces.attributeTypeMap = [
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "string"
    },
    {
        "name": "contactEmail",
        "baseName": "contactEmail",
        "type": "string"
    }
];
exports.DeleteHardbounces = DeleteHardbounces;
class EmailExportRecipients {
    static getAttributeTypeMap() {
        return EmailExportRecipients.attributeTypeMap;
    }
}
EmailExportRecipients.discriminator = undefined;
EmailExportRecipients.attributeTypeMap = [
    {
        "name": "notifyURL",
        "baseName": "notifyURL",
        "type": "string"
    },
    {
        "name": "recipientsType",
        "baseName": "recipientsType",
        "type": "EmailExportRecipients.RecipientsTypeEnum"
    }
];
exports.EmailExportRecipients = EmailExportRecipients;
(function (EmailExportRecipients) {
    let RecipientsTypeEnum;
    (function (RecipientsTypeEnum) {
        RecipientsTypeEnum[RecipientsTypeEnum["All"] = 'all'] = "All";
        RecipientsTypeEnum[RecipientsTypeEnum["NonClickers"] = 'nonClickers'] = "NonClickers";
        RecipientsTypeEnum[RecipientsTypeEnum["NonOpeners"] = 'nonOpeners'] = "NonOpeners";
        RecipientsTypeEnum[RecipientsTypeEnum["Clickers"] = 'clickers'] = "Clickers";
        RecipientsTypeEnum[RecipientsTypeEnum["Openers"] = 'openers'] = "Openers";
        RecipientsTypeEnum[RecipientsTypeEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
        RecipientsTypeEnum[RecipientsTypeEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        RecipientsTypeEnum[RecipientsTypeEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
    })(RecipientsTypeEnum = EmailExportRecipients.RecipientsTypeEnum || (EmailExportRecipients.RecipientsTypeEnum = {}));
})(EmailExportRecipients = exports.EmailExportRecipients || (exports.EmailExportRecipients = {}));
class ErrorModel {
    static getAttributeTypeMap() {
        return ErrorModel.attributeTypeMap;
    }
}
ErrorModel.discriminator = undefined;
ErrorModel.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "ErrorModel.CodeEnum"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
exports.ErrorModel = ErrorModel;
(function (ErrorModel) {
    let CodeEnum;
    (function (CodeEnum) {
        CodeEnum[CodeEnum["InvalidParameter"] = 'invalid_parameter'] = "InvalidParameter";
        CodeEnum[CodeEnum["MissingParameter"] = 'missing_parameter'] = "MissingParameter";
        CodeEnum[CodeEnum["OutOfRange"] = 'out_of_range'] = "OutOfRange";
        CodeEnum[CodeEnum["CampaignProcessing"] = 'campaign_processing'] = "CampaignProcessing";
        CodeEnum[CodeEnum["CampaignSent"] = 'campaign_sent'] = "CampaignSent";
        CodeEnum[CodeEnum["DocumentNotFound"] = 'document_not_found'] = "DocumentNotFound";
        CodeEnum[CodeEnum["ResellerPermissionDenied"] = 'reseller_permission_denied'] = "ResellerPermissionDenied";
        CodeEnum[CodeEnum["NotEnoughCredits"] = 'not_enough_credits'] = "NotEnoughCredits";
        CodeEnum[CodeEnum["PermissionDenied"] = 'permission_denied'] = "PermissionDenied";
        CodeEnum[CodeEnum["DuplicateParameter"] = 'duplicate_parameter'] = "DuplicateParameter";
        CodeEnum[CodeEnum["DuplicateRequest"] = 'duplicate_request'] = "DuplicateRequest";
        CodeEnum[CodeEnum["MethodNotAllowed"] = 'method_not_allowed'] = "MethodNotAllowed";
        CodeEnum[CodeEnum["Unauthorized"] = 'unauthorized'] = "Unauthorized";
        CodeEnum[CodeEnum["AccountUnderValidation"] = 'account_under_validation'] = "AccountUnderValidation";
        CodeEnum[CodeEnum["NotAcceptable"] = 'not_acceptable'] = "NotAcceptable";
    })(CodeEnum = ErrorModel.CodeEnum || (ErrorModel.CodeEnum = {}));
})(ErrorModel = exports.ErrorModel || (exports.ErrorModel = {}));
class GetAccountMarketingAutomation {
    static getAttributeTypeMap() {
        return GetAccountMarketingAutomation.attributeTypeMap;
    }
}
GetAccountMarketingAutomation.discriminator = undefined;
GetAccountMarketingAutomation.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    },
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean"
    }
];
exports.GetAccountMarketingAutomation = GetAccountMarketingAutomation;
class GetAccountPlan {
    static getAttributeTypeMap() {
        return GetAccountPlan.attributeTypeMap;
    }
}
GetAccountPlan.discriminator = undefined;
GetAccountPlan.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "GetAccountPlan.TypeEnum"
    },
    {
        "name": "creditsType",
        "baseName": "creditsType",
        "type": "GetAccountPlan.CreditsTypeEnum"
    },
    {
        "name": "credits",
        "baseName": "credits",
        "type": "number"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "string"
    },
    {
        "name": "userLimit",
        "baseName": "userLimit",
        "type": "number"
    }
];
exports.GetAccountPlan = GetAccountPlan;
(function (GetAccountPlan) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["PayAsYouGo"] = 'payAsYouGo'] = "PayAsYouGo";
        TypeEnum[TypeEnum["Free"] = 'free'] = "Free";
        TypeEnum[TypeEnum["Subscription"] = 'subscription'] = "Subscription";
        TypeEnum[TypeEnum["Sms"] = 'sms'] = "Sms";
        TypeEnum[TypeEnum["Reseller"] = 'reseller'] = "Reseller";
    })(TypeEnum = GetAccountPlan.TypeEnum || (GetAccountPlan.TypeEnum = {}));
    let CreditsTypeEnum;
    (function (CreditsTypeEnum) {
        CreditsTypeEnum[CreditsTypeEnum["SendLimit"] = 'sendLimit'] = "SendLimit";
    })(CreditsTypeEnum = GetAccountPlan.CreditsTypeEnum || (GetAccountPlan.CreditsTypeEnum = {}));
})(GetAccountPlan = exports.GetAccountPlan || (exports.GetAccountPlan = {}));
class GetAccountRelay {
    static getAttributeTypeMap() {
        return GetAccountRelay.attributeTypeMap;
    }
}
GetAccountRelay.discriminator = undefined;
GetAccountRelay.attributeTypeMap = [
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "GetAccountRelayData"
    }
];
exports.GetAccountRelay = GetAccountRelay;
class GetAccountRelayData {
    static getAttributeTypeMap() {
        return GetAccountRelayData.attributeTypeMap;
    }
}
GetAccountRelayData.discriminator = undefined;
GetAccountRelayData.attributeTypeMap = [
    {
        "name": "userName",
        "baseName": "userName",
        "type": "string"
    },
    {
        "name": "relay",
        "baseName": "relay",
        "type": "string"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    }
];
exports.GetAccountRelayData = GetAccountRelayData;
class GetAggregatedReport {
    static getAttributeTypeMap() {
        return GetAggregatedReport.attributeTypeMap;
    }
}
GetAggregatedReport.discriminator = undefined;
GetAggregatedReport.attributeTypeMap = [
    {
        "name": "range",
        "baseName": "range",
        "type": "string"
    },
    {
        "name": "requests",
        "baseName": "requests",
        "type": "number"
    },
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "number"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "number"
    },
    {
        "name": "clicks",
        "baseName": "clicks",
        "type": "number"
    },
    {
        "name": "uniqueClicks",
        "baseName": "uniqueClicks",
        "type": "number"
    },
    {
        "name": "opens",
        "baseName": "opens",
        "type": "number"
    },
    {
        "name": "uniqueOpens",
        "baseName": "uniqueOpens",
        "type": "number"
    },
    {
        "name": "spamReports",
        "baseName": "spamReports",
        "type": "number"
    },
    {
        "name": "blocked",
        "baseName": "blocked",
        "type": "number"
    },
    {
        "name": "invalid",
        "baseName": "invalid",
        "type": "number"
    },
    {
        "name": "unsubscribed",
        "baseName": "unsubscribed",
        "type": "number"
    }
];
exports.GetAggregatedReport = GetAggregatedReport;
class GetAttributes {
    static getAttributeTypeMap() {
        return GetAttributes.attributeTypeMap;
    }
}
GetAttributes.discriminator = undefined;
GetAttributes.attributeTypeMap = [
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "Array<GetAttributesAttributes>"
    }
];
exports.GetAttributes = GetAttributes;
class GetAttributesAttributes {
    static getAttributeTypeMap() {
        return GetAttributesAttributes.attributeTypeMap;
    }
}
GetAttributesAttributes.discriminator = undefined;
GetAttributesAttributes.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "GetAttributesAttributes.CategoryEnum"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetAttributesAttributes.TypeEnum"
    },
    {
        "name": "enumeration",
        "baseName": "enumeration",
        "type": "Array<GetAttributesEnumeration>"
    },
    {
        "name": "calculatedValue",
        "baseName": "calculatedValue",
        "type": "string"
    }
];
exports.GetAttributesAttributes = GetAttributesAttributes;
(function (GetAttributesAttributes) {
    let CategoryEnum;
    (function (CategoryEnum) {
        CategoryEnum[CategoryEnum["Normal"] = 'normal'] = "Normal";
        CategoryEnum[CategoryEnum["Transactional"] = 'transactional'] = "Transactional";
        CategoryEnum[CategoryEnum["Category"] = 'category'] = "Category";
        CategoryEnum[CategoryEnum["Calculated"] = 'calculated'] = "Calculated";
        CategoryEnum[CategoryEnum["Global"] = 'global'] = "Global";
    })(CategoryEnum = GetAttributesAttributes.CategoryEnum || (GetAttributesAttributes.CategoryEnum = {}));
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Text"] = 'text'] = "Text";
        TypeEnum[TypeEnum["Date"] = 'date'] = "Date";
        TypeEnum[TypeEnum["Float"] = 'float'] = "Float";
        TypeEnum[TypeEnum["Id"] = 'id'] = "Id";
        TypeEnum[TypeEnum["Boolean"] = 'boolean'] = "Boolean";
    })(TypeEnum = GetAttributesAttributes.TypeEnum || (GetAttributesAttributes.TypeEnum = {}));
})(GetAttributesAttributes = exports.GetAttributesAttributes || (exports.GetAttributesAttributes = {}));
class GetAttributesEnumeration {
    static getAttributeTypeMap() {
        return GetAttributesEnumeration.attributeTypeMap;
    }
}
GetAttributesEnumeration.discriminator = undefined;
GetAttributesEnumeration.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "number"
    },
    {
        "name": "label",
        "baseName": "label",
        "type": "string"
    }
];
exports.GetAttributesEnumeration = GetAttributesEnumeration;
class GetCampaignOverview {
    static getAttributeTypeMap() {
        return GetCampaignOverview.attributeTypeMap;
    }
}
GetCampaignOverview.discriminator = undefined;
GetCampaignOverview.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetCampaignOverview.TypeEnum"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetCampaignOverview.StatusEnum"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    },
    {
        "name": "abTesting",
        "baseName": "abTesting",
        "type": "boolean"
    },
    {
        "name": "subjectA",
        "baseName": "subjectA",
        "type": "string"
    },
    {
        "name": "subjectB",
        "baseName": "subjectB",
        "type": "string"
    },
    {
        "name": "splitRule",
        "baseName": "splitRule",
        "type": "number"
    },
    {
        "name": "winnerCriteria",
        "baseName": "winnerCriteria",
        "type": "string"
    },
    {
        "name": "winnerDelay",
        "baseName": "winnerDelay",
        "type": "number"
    },
    {
        "name": "sendAtBestTime",
        "baseName": "sendAtBestTime",
        "type": "boolean"
    }
];
exports.GetCampaignOverview = GetCampaignOverview;
(function (GetCampaignOverview) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Classic"] = 'classic'] = "Classic";
        TypeEnum[TypeEnum["Trigger"] = 'trigger'] = "Trigger";
    })(TypeEnum = GetCampaignOverview.TypeEnum || (GetCampaignOverview.TypeEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["InProcess"] = 'in_process'] = "InProcess";
    })(StatusEnum = GetCampaignOverview.StatusEnum || (GetCampaignOverview.StatusEnum = {}));
})(GetCampaignOverview = exports.GetCampaignOverview || (exports.GetCampaignOverview = {}));
class GetCampaignRecipients {
    static getAttributeTypeMap() {
        return GetCampaignRecipients.attributeTypeMap;
    }
}
GetCampaignRecipients.discriminator = undefined;
GetCampaignRecipients.attributeTypeMap = [
    {
        "name": "lists",
        "baseName": "lists",
        "type": "Array<number>"
    },
    {
        "name": "exclusionLists",
        "baseName": "exclusionLists",
        "type": "Array<number>"
    }
];
exports.GetCampaignRecipients = GetCampaignRecipients;
class GetCampaignStats {
    static getAttributeTypeMap() {
        return GetCampaignStats.attributeTypeMap;
    }
}
GetCampaignStats.discriminator = undefined;
GetCampaignStats.attributeTypeMap = [
    {
        "name": "listId",
        "baseName": "listId",
        "type": "number"
    },
    {
        "name": "uniqueClicks",
        "baseName": "uniqueClicks",
        "type": "number"
    },
    {
        "name": "clickers",
        "baseName": "clickers",
        "type": "number"
    },
    {
        "name": "complaints",
        "baseName": "complaints",
        "type": "number"
    },
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number"
    },
    {
        "name": "sent",
        "baseName": "sent",
        "type": "number"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "number"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "number"
    },
    {
        "name": "uniqueViews",
        "baseName": "uniqueViews",
        "type": "number"
    },
    {
        "name": "unsubscriptions",
        "baseName": "unsubscriptions",
        "type": "number"
    },
    {
        "name": "viewed",
        "baseName": "viewed",
        "type": "number"
    },
    {
        "name": "deferred",
        "baseName": "deferred",
        "type": "number"
    }
];
exports.GetCampaignStats = GetCampaignStats;
class GetChildDomain {
    static getAttributeTypeMap() {
        return GetChildDomain.attributeTypeMap;
    }
}
GetChildDomain.discriminator = undefined;
GetChildDomain.attributeTypeMap = [
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    },
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean"
    }
];
exports.GetChildDomain = GetChildDomain;
class GetChildDomains extends Array {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetChildDomains.attributeTypeMap);
    }
}
GetChildDomains.discriminator = undefined;
GetChildDomains.attributeTypeMap = [];
exports.GetChildDomains = GetChildDomains;
class GetChildInfoApiKeys {
    static getAttributeTypeMap() {
        return GetChildInfoApiKeys.attributeTypeMap;
    }
}
GetChildInfoApiKeys.discriminator = undefined;
GetChildInfoApiKeys.attributeTypeMap = [
    {
        "name": "v2",
        "baseName": "v2",
        "type": "Array<GetChildInfoApiKeysV2>"
    },
    {
        "name": "v3",
        "baseName": "v3",
        "type": "Array<GetChildInfoApiKeysV3>"
    }
];
exports.GetChildInfoApiKeys = GetChildInfoApiKeys;
class GetChildInfoApiKeysV2 {
    static getAttributeTypeMap() {
        return GetChildInfoApiKeysV2.attributeTypeMap;
    }
}
GetChildInfoApiKeysV2.discriminator = undefined;
GetChildInfoApiKeysV2.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    }
];
exports.GetChildInfoApiKeysV2 = GetChildInfoApiKeysV2;
class GetChildInfoApiKeysV3 {
    static getAttributeTypeMap() {
        return GetChildInfoApiKeysV3.attributeTypeMap;
    }
}
GetChildInfoApiKeysV3.discriminator = undefined;
GetChildInfoApiKeysV3.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    }
];
exports.GetChildInfoApiKeysV3 = GetChildInfoApiKeysV3;
class GetChildInfoCredits {
    static getAttributeTypeMap() {
        return GetChildInfoCredits.attributeTypeMap;
    }
}
GetChildInfoCredits.discriminator = undefined;
GetChildInfoCredits.attributeTypeMap = [
    {
        "name": "emailCredits",
        "baseName": "emailCredits",
        "type": "number"
    },
    {
        "name": "smsCredits",
        "baseName": "smsCredits",
        "type": "number"
    }
];
exports.GetChildInfoCredits = GetChildInfoCredits;
class GetChildInfoStatistics {
    static getAttributeTypeMap() {
        return GetChildInfoStatistics.attributeTypeMap;
    }
}
GetChildInfoStatistics.discriminator = undefined;
GetChildInfoStatistics.attributeTypeMap = [
    {
        "name": "previousMonthTotalSent",
        "baseName": "previousMonthTotalSent",
        "type": "number"
    },
    {
        "name": "currentMonthTotalSent",
        "baseName": "currentMonthTotalSent",
        "type": "number"
    },
    {
        "name": "totalSent",
        "baseName": "totalSent",
        "type": "number"
    }
];
exports.GetChildInfoStatistics = GetChildInfoStatistics;
class GetChildrenList {
    static getAttributeTypeMap() {
        return GetChildrenList.attributeTypeMap;
    }
}
GetChildrenList.discriminator = undefined;
GetChildrenList.attributeTypeMap = [
    {
        "name": "children",
        "baseName": "children",
        "type": "Array<any>"
    }
];
exports.GetChildrenList = GetChildrenList;
class GetClient {
    static getAttributeTypeMap() {
        return GetClient.attributeTypeMap;
    }
}
GetClient.discriminator = undefined;
GetClient.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    }
];
exports.GetClient = GetClient;
class GetContactCampaignStats {
    static getAttributeTypeMap() {
        return GetContactCampaignStats.attributeTypeMap;
    }
}
GetContactCampaignStats.discriminator = undefined;
GetContactCampaignStats.attributeTypeMap = [
    {
        "name": "messagesSent",
        "baseName": "messagesSent",
        "type": "Array<GetExtendedContactDetailsStatisticsMessagesSent>"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "Array<GetExtendedContactDetailsStatisticsMessagesSent>"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "Array<GetExtendedContactDetailsStatisticsMessagesSent>"
    },
    {
        "name": "complaints",
        "baseName": "complaints",
        "type": "Array<GetExtendedContactDetailsStatisticsMessagesSent>"
    },
    {
        "name": "unsubscriptions",
        "baseName": "unsubscriptions",
        "type": "GetContactCampaignStatsUnsubscriptions"
    },
    {
        "name": "opened",
        "baseName": "opened",
        "type": "Array<GetContactCampaignStatsOpened>"
    },
    {
        "name": "clicked",
        "baseName": "clicked",
        "type": "Array<GetContactCampaignStatsClicked>"
    },
    {
        "name": "transacAttributes",
        "baseName": "transacAttributes",
        "type": "Array<GetContactCampaignStatsTransacAttributes>"
    }
];
exports.GetContactCampaignStats = GetContactCampaignStats;
class GetContactCampaignStatsClicked {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsClicked.attributeTypeMap;
    }
}
GetContactCampaignStatsClicked.discriminator = undefined;
GetContactCampaignStatsClicked.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "links",
        "baseName": "links",
        "type": "Array<GetExtendedContactDetailsStatisticsLinks>"
    }
];
exports.GetContactCampaignStatsClicked = GetContactCampaignStatsClicked;
class GetContactCampaignStatsOpened {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsOpened.attributeTypeMap;
    }
}
GetContactCampaignStatsOpened.discriminator = undefined;
GetContactCampaignStatsOpened.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "eventTime",
        "baseName": "eventTime",
        "type": "Date"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
exports.GetContactCampaignStatsOpened = GetContactCampaignStatsOpened;
class GetContactCampaignStatsTransacAttributes {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsTransacAttributes.attributeTypeMap;
    }
}
GetContactCampaignStatsTransacAttributes.discriminator = undefined;
GetContactCampaignStatsTransacAttributes.attributeTypeMap = [
    {
        "name": "orderDate",
        "baseName": "orderDate",
        "type": "string"
    },
    {
        "name": "orderPrice",
        "baseName": "orderPrice",
        "type": "number"
    },
    {
        "name": "orderId",
        "baseName": "orderId",
        "type": "number"
    }
];
exports.GetContactCampaignStatsTransacAttributes = GetContactCampaignStatsTransacAttributes;
class GetContactCampaignStatsUnsubscriptions {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsUnsubscriptions.attributeTypeMap;
    }
}
GetContactCampaignStatsUnsubscriptions.discriminator = undefined;
GetContactCampaignStatsUnsubscriptions.attributeTypeMap = [
    {
        "name": "userUnsubscription",
        "baseName": "userUnsubscription",
        "type": "Array<GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription>"
    },
    {
        "name": "adminUnsubscription",
        "baseName": "adminUnsubscription",
        "type": "Array<GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription>"
    }
];
exports.GetContactCampaignStatsUnsubscriptions = GetContactCampaignStatsUnsubscriptions;
class GetContactDetails {
    static getAttributeTypeMap() {
        return GetContactDetails.attributeTypeMap;
    }
}
GetContactDetails.discriminator = undefined;
GetContactDetails.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "emailBlacklisted",
        "baseName": "emailBlacklisted",
        "type": "boolean"
    },
    {
        "name": "smsBlacklisted",
        "baseName": "smsBlacklisted",
        "type": "boolean"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "Date"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "listUnsubscribed",
        "baseName": "listUnsubscribed",
        "type": "Array<number>"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "any"
    }
];
exports.GetContactDetails = GetContactDetails;
class GetContacts {
    static getAttributeTypeMap() {
        return GetContacts.attributeTypeMap;
    }
}
GetContacts.discriminator = undefined;
GetContacts.attributeTypeMap = [
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "Array<any>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetContacts = GetContacts;
class GetEmailCampaigns {
    static getAttributeTypeMap() {
        return GetEmailCampaigns.attributeTypeMap;
    }
}
GetEmailCampaigns.discriminator = undefined;
GetEmailCampaigns.attributeTypeMap = [
    {
        "name": "campaigns",
        "baseName": "campaigns",
        "type": "Array<any>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetEmailCampaigns = GetEmailCampaigns;
class GetEmailEventReport {
    static getAttributeTypeMap() {
        return GetEmailEventReport.attributeTypeMap;
    }
}
GetEmailEventReport.discriminator = undefined;
GetEmailEventReport.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetEmailEventReportEvents>"
    }
];
exports.GetEmailEventReport = GetEmailEventReport;
class GetEmailEventReportEvents {
    static getAttributeTypeMap() {
        return GetEmailEventReportEvents.attributeTypeMap;
    }
}
GetEmailEventReportEvents.discriminator = undefined;
GetEmailEventReportEvents.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "Date"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "event",
        "baseName": "event",
        "type": "GetEmailEventReportEvents.EventEnum"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "string"
    },
    {
        "name": "from",
        "baseName": "from",
        "type": "string"
    }
];
exports.GetEmailEventReportEvents = GetEmailEventReportEvents;
(function (GetEmailEventReportEvents) {
    let EventEnum;
    (function (EventEnum) {
        EventEnum[EventEnum["Bounces"] = 'bounces'] = "Bounces";
        EventEnum[EventEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        EventEnum[EventEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
        EventEnum[EventEnum["Delivered"] = 'delivered'] = "Delivered";
        EventEnum[EventEnum["Spam"] = 'spam'] = "Spam";
        EventEnum[EventEnum["Requests"] = 'requests'] = "Requests";
        EventEnum[EventEnum["Opened"] = 'opened'] = "Opened";
        EventEnum[EventEnum["Clicks"] = 'clicks'] = "Clicks";
        EventEnum[EventEnum["Invalid"] = 'invalid'] = "Invalid";
        EventEnum[EventEnum["Deferred"] = 'deferred'] = "Deferred";
        EventEnum[EventEnum["Blocked"] = 'blocked'] = "Blocked";
        EventEnum[EventEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
    })(EventEnum = GetEmailEventReportEvents.EventEnum || (GetEmailEventReportEvents.EventEnum = {}));
})(GetEmailEventReportEvents = exports.GetEmailEventReportEvents || (exports.GetEmailEventReportEvents = {}));
class GetExtendedCampaignOverviewSender {
    static getAttributeTypeMap() {
        return GetExtendedCampaignOverviewSender.attributeTypeMap;
    }
}
GetExtendedCampaignOverviewSender.discriminator = undefined;
GetExtendedCampaignOverviewSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    }
];
exports.GetExtendedCampaignOverviewSender = GetExtendedCampaignOverviewSender;
class GetExtendedCampaignStats {
    static getAttributeTypeMap() {
        return GetExtendedCampaignStats.attributeTypeMap;
    }
}
GetExtendedCampaignStats.discriminator = undefined;
GetExtendedCampaignStats.attributeTypeMap = [
    {
        "name": "globalStats",
        "baseName": "globalStats",
        "type": "any"
    },
    {
        "name": "campaignStats",
        "baseName": "campaignStats",
        "type": "Array<any>"
    },
    {
        "name": "mirrorClick",
        "baseName": "mirrorClick",
        "type": "number"
    },
    {
        "name": "remaining",
        "baseName": "remaining",
        "type": "number"
    },
    {
        "name": "linksStats",
        "baseName": "linksStats",
        "type": "any"
    },
    {
        "name": "statsByDomain",
        "baseName": "statsByDomain",
        "type": "GetStatsByDomain"
    }
];
exports.GetExtendedCampaignStats = GetExtendedCampaignStats;
class GetExtendedClientAddress {
    static getAttributeTypeMap() {
        return GetExtendedClientAddress.attributeTypeMap;
    }
}
GetExtendedClientAddress.discriminator = undefined;
GetExtendedClientAddress.attributeTypeMap = [
    {
        "name": "street",
        "baseName": "street",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "zipCode",
        "baseName": "zipCode",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    }
];
exports.GetExtendedClientAddress = GetExtendedClientAddress;
class GetExtendedContactDetailsStatistics {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatistics.attributeTypeMap;
    }
}
GetExtendedContactDetailsStatistics.discriminator = undefined;
GetExtendedContactDetailsStatistics.attributeTypeMap = [
    {
        "name": "messagesSent",
        "baseName": "messagesSent",
        "type": "Array<GetExtendedContactDetailsStatisticsMessagesSent>"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "Array<GetExtendedContactDetailsStatisticsMessagesSent>"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "Array<GetExtendedContactDetailsStatisticsMessagesSent>"
    },
    {
        "name": "complaints",
        "baseName": "complaints",
        "type": "Array<GetExtendedContactDetailsStatisticsMessagesSent>"
    },
    {
        "name": "unsubscriptions",
        "baseName": "unsubscriptions",
        "type": "GetExtendedContactDetailsStatisticsUnsubscriptions"
    },
    {
        "name": "opened",
        "baseName": "opened",
        "type": "Array<GetExtendedContactDetailsStatisticsOpened>"
    },
    {
        "name": "clicked",
        "baseName": "clicked",
        "type": "Array<GetExtendedContactDetailsStatisticsClicked>"
    },
    {
        "name": "transacAttributes",
        "baseName": "transacAttributes",
        "type": "Array<any>"
    }
];
exports.GetExtendedContactDetailsStatistics = GetExtendedContactDetailsStatistics;
class GetExtendedContactDetailsStatisticsClicked {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsClicked.attributeTypeMap;
    }
}
GetExtendedContactDetailsStatisticsClicked.discriminator = undefined;
GetExtendedContactDetailsStatisticsClicked.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "links",
        "baseName": "links",
        "type": "Array<GetExtendedContactDetailsStatisticsLinks>"
    }
];
exports.GetExtendedContactDetailsStatisticsClicked = GetExtendedContactDetailsStatisticsClicked;
class GetExtendedContactDetailsStatisticsLinks {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsLinks.attributeTypeMap;
    }
}
GetExtendedContactDetailsStatisticsLinks.discriminator = undefined;
GetExtendedContactDetailsStatisticsLinks.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "eventTime",
        "baseName": "eventTime",
        "type": "Date"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    }
];
exports.GetExtendedContactDetailsStatisticsLinks = GetExtendedContactDetailsStatisticsLinks;
class GetExtendedContactDetailsStatisticsMessagesSent {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsMessagesSent.attributeTypeMap;
    }
}
GetExtendedContactDetailsStatisticsMessagesSent.discriminator = undefined;
GetExtendedContactDetailsStatisticsMessagesSent.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "eventTime",
        "baseName": "eventTime",
        "type": "Date"
    }
];
exports.GetExtendedContactDetailsStatisticsMessagesSent = GetExtendedContactDetailsStatisticsMessagesSent;
class GetExtendedContactDetailsStatisticsOpened {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsOpened.attributeTypeMap;
    }
}
GetExtendedContactDetailsStatisticsOpened.discriminator = undefined;
GetExtendedContactDetailsStatisticsOpened.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "eventTime",
        "baseName": "eventTime",
        "type": "Date"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
exports.GetExtendedContactDetailsStatisticsOpened = GetExtendedContactDetailsStatisticsOpened;
class GetExtendedContactDetailsStatisticsUnsubscriptions {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsUnsubscriptions.attributeTypeMap;
    }
}
GetExtendedContactDetailsStatisticsUnsubscriptions.discriminator = undefined;
GetExtendedContactDetailsStatisticsUnsubscriptions.attributeTypeMap = [
    {
        "name": "userUnsubscription",
        "baseName": "userUnsubscription",
        "type": "Array<GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription>"
    },
    {
        "name": "adminUnsubscription",
        "baseName": "adminUnsubscription",
        "type": "Array<GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription>"
    }
];
exports.GetExtendedContactDetailsStatisticsUnsubscriptions = GetExtendedContactDetailsStatisticsUnsubscriptions;
class GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription.attributeTypeMap;
    }
}
GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription.discriminator = undefined;
GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription.attributeTypeMap = [
    {
        "name": "eventTime",
        "baseName": "eventTime",
        "type": "Date"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
exports.GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription = GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription;
class GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription.attributeTypeMap;
    }
}
GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription.discriminator = undefined;
GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "eventTime",
        "baseName": "eventTime",
        "type": "Date"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
exports.GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription = GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription;
class GetExtendedListCampaignStats {
    static getAttributeTypeMap() {
        return GetExtendedListCampaignStats.attributeTypeMap;
    }
}
GetExtendedListCampaignStats.discriminator = undefined;
GetExtendedListCampaignStats.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "stats",
        "baseName": "stats",
        "type": "GetCampaignStats"
    }
];
exports.GetExtendedListCampaignStats = GetExtendedListCampaignStats;
class GetFolder {
    static getAttributeTypeMap() {
        return GetFolder.attributeTypeMap;
    }
}
GetFolder.discriminator = undefined;
GetFolder.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "totalBlacklisted",
        "baseName": "totalBlacklisted",
        "type": "number"
    },
    {
        "name": "totalSubscribers",
        "baseName": "totalSubscribers",
        "type": "number"
    },
    {
        "name": "uniqueSubscribers",
        "baseName": "uniqueSubscribers",
        "type": "number"
    }
];
exports.GetFolder = GetFolder;
class GetFolderLists {
    static getAttributeTypeMap() {
        return GetFolderLists.attributeTypeMap;
    }
}
GetFolderLists.discriminator = undefined;
GetFolderLists.attributeTypeMap = [
    {
        "name": "lists",
        "baseName": "lists",
        "type": "Array<any>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetFolderLists = GetFolderLists;
class GetFolders {
    static getAttributeTypeMap() {
        return GetFolders.attributeTypeMap;
    }
}
GetFolders.discriminator = undefined;
GetFolders.attributeTypeMap = [
    {
        "name": "folders",
        "baseName": "folders",
        "type": "Array<any>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetFolders = GetFolders;
class GetIp {
    static getAttributeTypeMap() {
        return GetIp.attributeTypeMap;
    }
}
GetIp.discriminator = undefined;
GetIp.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean"
    },
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    }
];
exports.GetIp = GetIp;
class GetIpFromSender {
    static getAttributeTypeMap() {
        return GetIpFromSender.attributeTypeMap;
    }
}
GetIpFromSender.discriminator = undefined;
GetIpFromSender.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "number"
    }
];
exports.GetIpFromSender = GetIpFromSender;
class GetIps {
    static getAttributeTypeMap() {
        return GetIps.attributeTypeMap;
    }
}
GetIps.discriminator = undefined;
GetIps.attributeTypeMap = [
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<GetIp>"
    }
];
exports.GetIps = GetIps;
class GetIpsFromSender {
    static getAttributeTypeMap() {
        return GetIpsFromSender.attributeTypeMap;
    }
}
GetIpsFromSender.discriminator = undefined;
GetIpsFromSender.attributeTypeMap = [
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<GetIpFromSender>"
    }
];
exports.GetIpsFromSender = GetIpsFromSender;
class GetList {
    static getAttributeTypeMap() {
        return GetList.attributeTypeMap;
    }
}
GetList.discriminator = undefined;
GetList.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "totalBlacklisted",
        "baseName": "totalBlacklisted",
        "type": "number"
    },
    {
        "name": "totalSubscribers",
        "baseName": "totalSubscribers",
        "type": "number"
    }
];
exports.GetList = GetList;
class GetLists {
    static getAttributeTypeMap() {
        return GetLists.attributeTypeMap;
    }
}
GetLists.discriminator = undefined;
GetLists.attributeTypeMap = [
    {
        "name": "lists",
        "baseName": "lists",
        "type": "Array<any>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetLists = GetLists;
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
class GetProcesses {
    static getAttributeTypeMap() {
        return GetProcesses.attributeTypeMap;
    }
}
GetProcesses.discriminator = undefined;
GetProcesses.attributeTypeMap = [
    {
        "name": "processes",
        "baseName": "processes",
        "type": "Array<GetProcess>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetProcesses = GetProcesses;
class GetReports {
    static getAttributeTypeMap() {
        return GetReports.attributeTypeMap;
    }
}
GetReports.discriminator = undefined;
GetReports.attributeTypeMap = [
    {
        "name": "reports",
        "baseName": "reports",
        "type": "Array<GetReportsReports>"
    }
];
exports.GetReports = GetReports;
class GetReportsReports {
    static getAttributeTypeMap() {
        return GetReportsReports.attributeTypeMap;
    }
}
GetReportsReports.discriminator = undefined;
GetReportsReports.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "requests",
        "baseName": "requests",
        "type": "number"
    },
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "number"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "number"
    },
    {
        "name": "clicks",
        "baseName": "clicks",
        "type": "number"
    },
    {
        "name": "uniqueClicks",
        "baseName": "uniqueClicks",
        "type": "number"
    },
    {
        "name": "opens",
        "baseName": "opens",
        "type": "number"
    },
    {
        "name": "uniqueOpens",
        "baseName": "uniqueOpens",
        "type": "number"
    },
    {
        "name": "spamReports",
        "baseName": "spamReports",
        "type": "number"
    },
    {
        "name": "blocked",
        "baseName": "blocked",
        "type": "number"
    },
    {
        "name": "invalid",
        "baseName": "invalid",
        "type": "number"
    },
    {
        "name": "unsubscribed",
        "baseName": "unsubscribed",
        "type": "number"
    }
];
exports.GetReportsReports = GetReportsReports;
class GetSendersList {
    static getAttributeTypeMap() {
        return GetSendersList.attributeTypeMap;
    }
}
GetSendersList.discriminator = undefined;
GetSendersList.attributeTypeMap = [
    {
        "name": "senders",
        "baseName": "senders",
        "type": "Array<GetSendersListSenders>"
    }
];
exports.GetSendersList = GetSendersList;
class GetSendersListIps {
    static getAttributeTypeMap() {
        return GetSendersListIps.attributeTypeMap;
    }
}
GetSendersListIps.discriminator = undefined;
GetSendersListIps.attributeTypeMap = [
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "number"
    }
];
exports.GetSendersListIps = GetSendersListIps;
class GetSendersListSenders {
    static getAttributeTypeMap() {
        return GetSendersListSenders.attributeTypeMap;
    }
}
GetSendersListSenders.discriminator = undefined;
GetSendersListSenders.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean"
    },
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<GetSendersListIps>"
    }
];
exports.GetSendersListSenders = GetSendersListSenders;
class GetSmsCampaignOverview {
    static getAttributeTypeMap() {
        return GetSmsCampaignOverview.attributeTypeMap;
    }
}
GetSmsCampaignOverview.discriminator = undefined;
GetSmsCampaignOverview.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetSmsCampaignOverview.StatusEnum"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "Date"
    }
];
exports.GetSmsCampaignOverview = GetSmsCampaignOverview;
(function (GetSmsCampaignOverview) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["InProcess"] = 'inProcess'] = "InProcess";
    })(StatusEnum = GetSmsCampaignOverview.StatusEnum || (GetSmsCampaignOverview.StatusEnum = {}));
})(GetSmsCampaignOverview = exports.GetSmsCampaignOverview || (exports.GetSmsCampaignOverview = {}));
class GetSmsCampaignStats {
    static getAttributeTypeMap() {
        return GetSmsCampaignStats.attributeTypeMap;
    }
}
GetSmsCampaignStats.discriminator = undefined;
GetSmsCampaignStats.attributeTypeMap = [
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number"
    },
    {
        "name": "sent",
        "baseName": "sent",
        "type": "number"
    },
    {
        "name": "processing",
        "baseName": "processing",
        "type": "number"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "number"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "number"
    },
    {
        "name": "unsubscriptions",
        "baseName": "unsubscriptions",
        "type": "number"
    },
    {
        "name": "answered",
        "baseName": "answered",
        "type": "number"
    }
];
exports.GetSmsCampaignStats = GetSmsCampaignStats;
class GetSmsCampaigns {
    static getAttributeTypeMap() {
        return GetSmsCampaigns.attributeTypeMap;
    }
}
GetSmsCampaigns.discriminator = undefined;
GetSmsCampaigns.attributeTypeMap = [
    {
        "name": "campaigns",
        "baseName": "campaigns",
        "type": "Array<any>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
exports.GetSmsCampaigns = GetSmsCampaigns;
class GetSmsEventReport {
    static getAttributeTypeMap() {
        return GetSmsEventReport.attributeTypeMap;
    }
}
GetSmsEventReport.discriminator = undefined;
GetSmsEventReport.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetSmsEventReportEvents>"
    }
];
exports.GetSmsEventReport = GetSmsEventReport;
class GetSmsEventReportEvents {
    static getAttributeTypeMap() {
        return GetSmsEventReportEvents.attributeTypeMap;
    }
}
GetSmsEventReportEvents.discriminator = undefined;
GetSmsEventReportEvents.attributeTypeMap = [
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "Date"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "event",
        "baseName": "event",
        "type": "GetSmsEventReportEvents.EventEnum"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "reply",
        "baseName": "reply",
        "type": "string"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    }
];
exports.GetSmsEventReportEvents = GetSmsEventReportEvents;
(function (GetSmsEventReportEvents) {
    let EventEnum;
    (function (EventEnum) {
        EventEnum[EventEnum["Bounces"] = 'bounces'] = "Bounces";
        EventEnum[EventEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        EventEnum[EventEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
        EventEnum[EventEnum["Delivered"] = 'delivered'] = "Delivered";
        EventEnum[EventEnum["Sent"] = 'sent'] = "Sent";
        EventEnum[EventEnum["Accepted"] = 'accepted'] = "Accepted";
        EventEnum[EventEnum["Unsubscription"] = 'unsubscription'] = "Unsubscription";
        EventEnum[EventEnum["Replies"] = 'replies'] = "Replies";
        EventEnum[EventEnum["Blocked"] = 'blocked'] = "Blocked";
    })(EventEnum = GetSmsEventReportEvents.EventEnum || (GetSmsEventReportEvents.EventEnum = {}));
})(GetSmsEventReportEvents = exports.GetSmsEventReportEvents || (exports.GetSmsEventReportEvents = {}));
class GetSmtpTemplateOverview {
    static getAttributeTypeMap() {
        return GetSmtpTemplateOverview.attributeTypeMap;
    }
}
GetSmtpTemplateOverview.discriminator = undefined;
GetSmtpTemplateOverview.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "testSent",
        "baseName": "testSent",
        "type": "boolean"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "GetSmtpTemplateOverviewSender"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "string"
    },
    {
        "name": "toField",
        "baseName": "toField",
        "type": "string"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "Date"
    }
];
exports.GetSmtpTemplateOverview = GetSmtpTemplateOverview;
class GetSmtpTemplateOverviewSender {
    static getAttributeTypeMap() {
        return GetSmtpTemplateOverviewSender.attributeTypeMap;
    }
}
GetSmtpTemplateOverviewSender.discriminator = undefined;
GetSmtpTemplateOverviewSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    }
];
exports.GetSmtpTemplateOverviewSender = GetSmtpTemplateOverviewSender;
class GetSmtpTemplates {
    static getAttributeTypeMap() {
        return GetSmtpTemplates.attributeTypeMap;
    }
}
GetSmtpTemplates.discriminator = undefined;
GetSmtpTemplates.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "templates",
        "baseName": "templates",
        "type": "Array<GetSmtpTemplateOverview>"
    }
];
exports.GetSmtpTemplates = GetSmtpTemplates;
class GetSsoToken {
    static getAttributeTypeMap() {
        return GetSsoToken.attributeTypeMap;
    }
}
GetSsoToken.discriminator = undefined;
GetSsoToken.attributeTypeMap = [
    {
        "name": "token",
        "baseName": "token",
        "type": "string"
    }
];
exports.GetSsoToken = GetSsoToken;
class GetStatsByDomain extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetStatsByDomain.attributeTypeMap);
    }
}
GetStatsByDomain.discriminator = undefined;
GetStatsByDomain.attributeTypeMap = [];
exports.GetStatsByDomain = GetStatsByDomain;
class GetTransacAggregatedSmsReport {
    static getAttributeTypeMap() {
        return GetTransacAggregatedSmsReport.attributeTypeMap;
    }
}
GetTransacAggregatedSmsReport.discriminator = undefined;
GetTransacAggregatedSmsReport.attributeTypeMap = [
    {
        "name": "range",
        "baseName": "range",
        "type": "string"
    },
    {
        "name": "requests",
        "baseName": "requests",
        "type": "number"
    },
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "number"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "number"
    },
    {
        "name": "blocked",
        "baseName": "blocked",
        "type": "number"
    },
    {
        "name": "unsubscribed",
        "baseName": "unsubscribed",
        "type": "number"
    },
    {
        "name": "replied",
        "baseName": "replied",
        "type": "number"
    },
    {
        "name": "accepted",
        "baseName": "accepted",
        "type": "number"
    },
    {
        "name": "rejected",
        "baseName": "rejected",
        "type": "number"
    }
];
exports.GetTransacAggregatedSmsReport = GetTransacAggregatedSmsReport;
class GetTransacEmailContent {
    static getAttributeTypeMap() {
        return GetTransacEmailContent.attributeTypeMap;
    }
}
GetTransacEmailContent.discriminator = undefined;
GetTransacEmailContent.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "Date"
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetTransacEmailContentEvents>"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "attachmentCount",
        "baseName": "attachmentCount",
        "type": "number"
    }
];
exports.GetTransacEmailContent = GetTransacEmailContent;
class GetTransacEmailContentEvents {
    static getAttributeTypeMap() {
        return GetTransacEmailContentEvents.attributeTypeMap;
    }
}
GetTransacEmailContentEvents.discriminator = undefined;
GetTransacEmailContentEvents.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "time",
        "baseName": "time",
        "type": "Date"
    }
];
exports.GetTransacEmailContentEvents = GetTransacEmailContentEvents;
class GetTransacEmailsList {
    static getAttributeTypeMap() {
        return GetTransacEmailsList.attributeTypeMap;
    }
}
GetTransacEmailsList.discriminator = undefined;
GetTransacEmailsList.attributeTypeMap = [
    {
        "name": "transactionalEmails",
        "baseName": "transactionalEmails",
        "type": "Array<GetTransacEmailsListTransactionalEmails>"
    }
];
exports.GetTransacEmailsList = GetTransacEmailsList;
class GetTransacEmailsListTransactionalEmails {
    static getAttributeTypeMap() {
        return GetTransacEmailsListTransactionalEmails.attributeTypeMap;
    }
}
GetTransacEmailsListTransactionalEmails.discriminator = undefined;
GetTransacEmailsListTransactionalEmails.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "uuid",
        "baseName": "uuid",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "Date"
    }
];
exports.GetTransacEmailsListTransactionalEmails = GetTransacEmailsListTransactionalEmails;
class GetTransacSmsReport {
    static getAttributeTypeMap() {
        return GetTransacSmsReport.attributeTypeMap;
    }
}
GetTransacSmsReport.discriminator = undefined;
GetTransacSmsReport.attributeTypeMap = [
    {
        "name": "reports",
        "baseName": "reports",
        "type": "Array<GetTransacSmsReportReports>"
    }
];
exports.GetTransacSmsReport = GetTransacSmsReport;
class GetTransacSmsReportReports {
    static getAttributeTypeMap() {
        return GetTransacSmsReportReports.attributeTypeMap;
    }
}
GetTransacSmsReportReports.discriminator = undefined;
GetTransacSmsReportReports.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "requests",
        "baseName": "requests",
        "type": "number"
    },
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "number"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "number"
    },
    {
        "name": "blocked",
        "baseName": "blocked",
        "type": "number"
    },
    {
        "name": "unsubscribed",
        "baseName": "unsubscribed",
        "type": "number"
    },
    {
        "name": "replied",
        "baseName": "replied",
        "type": "number"
    },
    {
        "name": "accepted",
        "baseName": "accepted",
        "type": "number"
    },
    {
        "name": "rejected",
        "baseName": "rejected",
        "type": "number"
    }
];
exports.GetTransacSmsReportReports = GetTransacSmsReportReports;
class GetWebhook {
    static getAttributeTypeMap() {
        return GetWebhook.attributeTypeMap;
    }
}
GetWebhook.discriminator = undefined;
GetWebhook.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<string>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetWebhook.TypeEnum"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "Date"
    }
];
exports.GetWebhook = GetWebhook;
(function (GetWebhook) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Marketing"] = 'marketing'] = "Marketing";
        TypeEnum[TypeEnum["Transac"] = 'transac'] = "Transac";
    })(TypeEnum = GetWebhook.TypeEnum || (GetWebhook.TypeEnum = {}));
})(GetWebhook = exports.GetWebhook || (exports.GetWebhook = {}));
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
        "type": "Array<any>"
    }
];
exports.GetWebhooks = GetWebhooks;
class ManageIp {
    static getAttributeTypeMap() {
        return ManageIp.attributeTypeMap;
    }
}
ManageIp.discriminator = undefined;
ManageIp.attributeTypeMap = [
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
exports.ManageIp = ManageIp;
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
    }
];
exports.PostContactInfoContacts = PostContactInfoContacts;
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
class RemainingCreditModel {
    static getAttributeTypeMap() {
        return RemainingCreditModel.attributeTypeMap;
    }
}
RemainingCreditModel.discriminator = undefined;
RemainingCreditModel.attributeTypeMap = [
    {
        "name": "child",
        "baseName": "child",
        "type": "RemainingCreditModelChild"
    },
    {
        "name": "reseller",
        "baseName": "reseller",
        "type": "RemainingCreditModelReseller"
    }
];
exports.RemainingCreditModel = RemainingCreditModel;
class RemainingCreditModelChild {
    static getAttributeTypeMap() {
        return RemainingCreditModelChild.attributeTypeMap;
    }
}
RemainingCreditModelChild.discriminator = undefined;
RemainingCreditModelChild.attributeTypeMap = [
    {
        "name": "sms",
        "baseName": "sms",
        "type": "number"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "number"
    }
];
exports.RemainingCreditModelChild = RemainingCreditModelChild;
class RemainingCreditModelReseller {
    static getAttributeTypeMap() {
        return RemainingCreditModelReseller.attributeTypeMap;
    }
}
RemainingCreditModelReseller.discriminator = undefined;
RemainingCreditModelReseller.attributeTypeMap = [
    {
        "name": "sms",
        "baseName": "sms",
        "type": "number"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "number"
    }
];
exports.RemainingCreditModelReseller = RemainingCreditModelReseller;
class RemoveContactFromList {
    static getAttributeTypeMap() {
        return RemoveContactFromList.attributeTypeMap;
    }
}
RemoveContactFromList.discriminator = undefined;
RemoveContactFromList.attributeTypeMap = [
    {
        "name": "emails",
        "baseName": "emails",
        "type": "Array<string>"
    },
    {
        "name": "all",
        "baseName": "all",
        "type": "boolean"
    }
];
exports.RemoveContactFromList = RemoveContactFromList;
class RemoveCredits {
    static getAttributeTypeMap() {
        return RemoveCredits.attributeTypeMap;
    }
}
RemoveCredits.discriminator = undefined;
RemoveCredits.attributeTypeMap = [
    {
        "name": "sms",
        "baseName": "sms",
        "type": "number"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "number"
    }
];
exports.RemoveCredits = RemoveCredits;
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
        "type": "any"
    },
    {
        "name": "notifyUrl",
        "baseName": "notifyUrl",
        "type": "string"
    }
];
exports.RequestContactExport = RequestContactExport;
class RequestContactImport {
    static getAttributeTypeMap() {
        return RequestContactImport.attributeTypeMap;
    }
}
RequestContactImport.discriminator = undefined;
RequestContactImport.attributeTypeMap = [
    {
        "name": "fileUrl",
        "baseName": "fileUrl",
        "type": "string"
    },
    {
        "name": "fileBody",
        "baseName": "fileBody",
        "type": "string"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "notifyUrl",
        "baseName": "notifyUrl",
        "type": "string"
    },
    {
        "name": "newList",
        "baseName": "newList",
        "type": "RequestContactImportNewList"
    },
    {
        "name": "emailBlacklist",
        "baseName": "emailBlacklist",
        "type": "boolean"
    },
    {
        "name": "smsBlacklist",
        "baseName": "smsBlacklist",
        "type": "boolean"
    },
    {
        "name": "updateExistingContacts",
        "baseName": "updateExistingContacts",
        "type": "boolean"
    },
    {
        "name": "emptyContactsAttributes",
        "baseName": "emptyContactsAttributes",
        "type": "boolean"
    }
];
exports.RequestContactImport = RequestContactImport;
class RequestContactImportNewList {
    static getAttributeTypeMap() {
        return RequestContactImportNewList.attributeTypeMap;
    }
}
RequestContactImportNewList.discriminator = undefined;
RequestContactImportNewList.attributeTypeMap = [
    {
        "name": "listName",
        "baseName": "listName",
        "type": "string"
    },
    {
        "name": "folderId",
        "baseName": "folderId",
        "type": "number"
    }
];
exports.RequestContactImportNewList = RequestContactImportNewList;
class RequestSmsRecipientExport {
    static getAttributeTypeMap() {
        return RequestSmsRecipientExport.attributeTypeMap;
    }
}
RequestSmsRecipientExport.discriminator = undefined;
RequestSmsRecipientExport.attributeTypeMap = [
    {
        "name": "notifyURL",
        "baseName": "notifyURL",
        "type": "string"
    },
    {
        "name": "recipientsType",
        "baseName": "recipientsType",
        "type": "RequestSmsRecipientExport.RecipientsTypeEnum"
    }
];
exports.RequestSmsRecipientExport = RequestSmsRecipientExport;
(function (RequestSmsRecipientExport) {
    let RecipientsTypeEnum;
    (function (RecipientsTypeEnum) {
        RecipientsTypeEnum[RecipientsTypeEnum["All"] = 'all'] = "All";
        RecipientsTypeEnum[RecipientsTypeEnum["Delivered"] = 'delivered'] = "Delivered";
        RecipientsTypeEnum[RecipientsTypeEnum["Answered"] = 'answered'] = "Answered";
        RecipientsTypeEnum[RecipientsTypeEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
        RecipientsTypeEnum[RecipientsTypeEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        RecipientsTypeEnum[RecipientsTypeEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
    })(RecipientsTypeEnum = RequestSmsRecipientExport.RecipientsTypeEnum || (RequestSmsRecipientExport.RecipientsTypeEnum = {}));
})(RequestSmsRecipientExport = exports.RequestSmsRecipientExport || (exports.RequestSmsRecipientExport = {}));
class SendEmail {
    static getAttributeTypeMap() {
        return SendEmail.attributeTypeMap;
    }
}
SendEmail.discriminator = undefined;
SendEmail.attributeTypeMap = [
    {
        "name": "emailTo",
        "baseName": "emailTo",
        "type": "Array<string>"
    },
    {
        "name": "emailBcc",
        "baseName": "emailBcc",
        "type": "Array<string>"
    },
    {
        "name": "emailCc",
        "baseName": "emailCc",
        "type": "Array<string>"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "string"
    },
    {
        "name": "attachmentUrl",
        "baseName": "attachmentUrl",
        "type": "string"
    },
    {
        "name": "attachment",
        "baseName": "attachment",
        "type": "Array<SendEmailAttachment>"
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "any"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "any"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>"
    }
];
exports.SendEmail = SendEmail;
class SendEmailAttachment {
    static getAttributeTypeMap() {
        return SendEmailAttachment.attributeTypeMap;
    }
}
SendEmailAttachment.discriminator = undefined;
SendEmailAttachment.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.SendEmailAttachment = SendEmailAttachment;
class SendReport {
    static getAttributeTypeMap() {
        return SendReport.attributeTypeMap;
    }
}
SendReport.discriminator = undefined;
SendReport.attributeTypeMap = [
    {
        "name": "language",
        "baseName": "language",
        "type": "SendReport.LanguageEnum"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "SendReportEmail"
    }
];
exports.SendReport = SendReport;
(function (SendReport) {
    let LanguageEnum;
    (function (LanguageEnum) {
        LanguageEnum[LanguageEnum["Fr"] = 'fr'] = "Fr";
        LanguageEnum[LanguageEnum["Es"] = 'es'] = "Es";
        LanguageEnum[LanguageEnum["Pt"] = 'pt'] = "Pt";
        LanguageEnum[LanguageEnum["It"] = 'it'] = "It";
        LanguageEnum[LanguageEnum["De"] = 'de'] = "De";
        LanguageEnum[LanguageEnum["En"] = 'en'] = "En";
    })(LanguageEnum = SendReport.LanguageEnum || (SendReport.LanguageEnum = {}));
})(SendReport = exports.SendReport || (exports.SendReport = {}));
class SendReportEmail {
    static getAttributeTypeMap() {
        return SendReportEmail.attributeTypeMap;
    }
}
SendReportEmail.discriminator = undefined;
SendReportEmail.attributeTypeMap = [
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<string>"
    },
    {
        "name": "contentType",
        "baseName": "contentType",
        "type": "SendReportEmail.ContentTypeEnum"
    },
    {
        "name": "bcc",
        "baseName": "bcc",
        "type": "Array<string>"
    },
    {
        "name": "cc",
        "baseName": "cc",
        "type": "Array<string>"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    }
];
exports.SendReportEmail = SendReportEmail;
(function (SendReportEmail) {
    let ContentTypeEnum;
    (function (ContentTypeEnum) {
        ContentTypeEnum[ContentTypeEnum["Text"] = 'text'] = "Text";
        ContentTypeEnum[ContentTypeEnum["Html"] = 'html'] = "Html";
    })(ContentTypeEnum = SendReportEmail.ContentTypeEnum || (SendReportEmail.ContentTypeEnum = {}));
})(SendReportEmail = exports.SendReportEmail || (exports.SendReportEmail = {}));
class SendSms {
    static getAttributeTypeMap() {
        return SendSms.attributeTypeMap;
    }
}
SendSms.discriminator = undefined;
SendSms.attributeTypeMap = [
    {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "number"
    },
    {
        "name": "smsCount",
        "baseName": "smsCount",
        "type": "number"
    },
    {
        "name": "usedCredits",
        "baseName": "usedCredits",
        "type": "number"
    },
    {
        "name": "remainingCredits",
        "baseName": "remainingCredits",
        "type": "number"
    }
];
exports.SendSms = SendSms;
class SendSmtpEmail {
    static getAttributeTypeMap() {
        return SendSmtpEmail.attributeTypeMap;
    }
}
SendSmtpEmail.discriminator = undefined;
SendSmtpEmail.attributeTypeMap = [
    {
        "name": "sender",
        "baseName": "sender",
        "type": "SendSmtpEmailSender"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<SendSmtpEmailTo>"
    },
    {
        "name": "bcc",
        "baseName": "bcc",
        "type": "Array<SendSmtpEmailBcc>"
    },
    {
        "name": "cc",
        "baseName": "cc",
        "type": "Array<SendSmtpEmailCc>"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "textContent",
        "baseName": "textContent",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "SendSmtpEmailReplyTo"
    },
    {
        "name": "attachment",
        "baseName": "attachment",
        "type": "Array<SendSmtpEmailAttachment>"
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "any"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "params",
        "baseName": "params",
        "type": "any"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>"
    }
];
exports.SendSmtpEmail = SendSmtpEmail;
class SendSmtpEmailAttachment {
    static getAttributeTypeMap() {
        return SendSmtpEmailAttachment.attributeTypeMap;
    }
}
SendSmtpEmailAttachment.discriminator = undefined;
SendSmtpEmailAttachment.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.SendSmtpEmailAttachment = SendSmtpEmailAttachment;
class SendSmtpEmailBcc {
    static getAttributeTypeMap() {
        return SendSmtpEmailBcc.attributeTypeMap;
    }
}
SendSmtpEmailBcc.discriminator = undefined;
SendSmtpEmailBcc.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.SendSmtpEmailBcc = SendSmtpEmailBcc;
class SendSmtpEmailCc {
    static getAttributeTypeMap() {
        return SendSmtpEmailCc.attributeTypeMap;
    }
}
SendSmtpEmailCc.discriminator = undefined;
SendSmtpEmailCc.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.SendSmtpEmailCc = SendSmtpEmailCc;
class SendSmtpEmailReplyTo {
    static getAttributeTypeMap() {
        return SendSmtpEmailReplyTo.attributeTypeMap;
    }
}
SendSmtpEmailReplyTo.discriminator = undefined;
SendSmtpEmailReplyTo.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.SendSmtpEmailReplyTo = SendSmtpEmailReplyTo;
class SendSmtpEmailSender {
    static getAttributeTypeMap() {
        return SendSmtpEmailSender.attributeTypeMap;
    }
}
SendSmtpEmailSender.discriminator = undefined;
SendSmtpEmailSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    }
];
exports.SendSmtpEmailSender = SendSmtpEmailSender;
class SendSmtpEmailTo {
    static getAttributeTypeMap() {
        return SendSmtpEmailTo.attributeTypeMap;
    }
}
SendSmtpEmailTo.discriminator = undefined;
SendSmtpEmailTo.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.SendSmtpEmailTo = SendSmtpEmailTo;
class SendTemplateEmail {
    static getAttributeTypeMap() {
        return SendTemplateEmail.attributeTypeMap;
    }
}
SendTemplateEmail.discriminator = undefined;
SendTemplateEmail.attributeTypeMap = [
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    }
];
exports.SendTemplateEmail = SendTemplateEmail;
class SendTestEmail {
    static getAttributeTypeMap() {
        return SendTestEmail.attributeTypeMap;
    }
}
SendTestEmail.discriminator = undefined;
SendTestEmail.attributeTypeMap = [
    {
        "name": "emailTo",
        "baseName": "emailTo",
        "type": "Array<string>"
    }
];
exports.SendTestEmail = SendTestEmail;
class SendTestSms {
    static getAttributeTypeMap() {
        return SendTestSms.attributeTypeMap;
    }
}
SendTestSms.discriminator = undefined;
SendTestSms.attributeTypeMap = [
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    }
];
exports.SendTestSms = SendTestSms;
class SendTransacSms {
    static getAttributeTypeMap() {
        return SendTransacSms.attributeTypeMap;
    }
}
SendTransacSms.discriminator = undefined;
SendTransacSms.attributeTypeMap = [
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "recipient",
        "baseName": "recipient",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "SendTransacSms.TypeEnum"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "webUrl",
        "baseName": "webUrl",
        "type": "string"
    }
];
exports.SendTransacSms = SendTransacSms;
(function (SendTransacSms) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Transactional"] = 'transactional'] = "Transactional";
        TypeEnum[TypeEnum["Marketing"] = 'marketing'] = "Marketing";
    })(TypeEnum = SendTransacSms.TypeEnum || (SendTransacSms.TypeEnum = {}));
})(SendTransacSms = exports.SendTransacSms || (exports.SendTransacSms = {}));
class UpdateAttribute {
    static getAttributeTypeMap() {
        return UpdateAttribute.attributeTypeMap;
    }
}
UpdateAttribute.discriminator = undefined;
UpdateAttribute.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    },
    {
        "name": "enumeration",
        "baseName": "enumeration",
        "type": "Array<UpdateAttributeEnumeration>"
    }
];
exports.UpdateAttribute = UpdateAttribute;
class UpdateAttributeEnumeration {
    static getAttributeTypeMap() {
        return UpdateAttributeEnumeration.attributeTypeMap;
    }
}
UpdateAttributeEnumeration.discriminator = undefined;
UpdateAttributeEnumeration.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "number"
    },
    {
        "name": "label",
        "baseName": "label",
        "type": "string"
    }
];
exports.UpdateAttributeEnumeration = UpdateAttributeEnumeration;
class UpdateCampaignStatus {
    static getAttributeTypeMap() {
        return UpdateCampaignStatus.attributeTypeMap;
    }
}
UpdateCampaignStatus.discriminator = undefined;
UpdateCampaignStatus.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "UpdateCampaignStatus.StatusEnum"
    }
];
exports.UpdateCampaignStatus = UpdateCampaignStatus;
(function (UpdateCampaignStatus) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Darchive"] = 'darchive'] = "Darchive";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Replicate"] = 'replicate'] = "Replicate";
        StatusEnum[StatusEnum["ReplicateTemplate"] = 'replicateTemplate'] = "ReplicateTemplate";
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
    })(StatusEnum = UpdateCampaignStatus.StatusEnum || (UpdateCampaignStatus.StatusEnum = {}));
})(UpdateCampaignStatus = exports.UpdateCampaignStatus || (exports.UpdateCampaignStatus = {}));
class UpdateChild {
    static getAttributeTypeMap() {
        return UpdateChild.attributeTypeMap;
    }
}
UpdateChild.discriminator = undefined;
UpdateChild.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "string"
    }
];
exports.UpdateChild = UpdateChild;
class UpdateChildAccountStatus {
    static getAttributeTypeMap() {
        return UpdateChildAccountStatus.attributeTypeMap;
    }
}
UpdateChildAccountStatus.discriminator = undefined;
UpdateChildAccountStatus.attributeTypeMap = [
    {
        "name": "transactionalEmail",
        "baseName": "transactionalEmail",
        "type": "boolean"
    },
    {
        "name": "transactionalSms",
        "baseName": "transactionalSms",
        "type": "boolean"
    },
    {
        "name": "marketingAutomation",
        "baseName": "marketingAutomation",
        "type": "boolean"
    }
];
exports.UpdateChildAccountStatus = UpdateChildAccountStatus;
class UpdateChildDomain {
    static getAttributeTypeMap() {
        return UpdateChildDomain.attributeTypeMap;
    }
}
UpdateChildDomain.discriminator = undefined;
UpdateChildDomain.attributeTypeMap = [
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    }
];
exports.UpdateChildDomain = UpdateChildDomain;
class UpdateContact {
    static getAttributeTypeMap() {
        return UpdateContact.attributeTypeMap;
    }
}
UpdateContact.discriminator = undefined;
UpdateContact.attributeTypeMap = [
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "any"
    },
    {
        "name": "emailBlacklisted",
        "baseName": "emailBlacklisted",
        "type": "boolean"
    },
    {
        "name": "smsBlacklisted",
        "baseName": "smsBlacklisted",
        "type": "boolean"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "unlinkListIds",
        "baseName": "unlinkListIds",
        "type": "Array<number>"
    },
    {
        "name": "smtpBlacklistSender",
        "baseName": "smtpBlacklistSender",
        "type": "Array<string>"
    }
];
exports.UpdateContact = UpdateContact;
class UpdateEmailCampaign {
    static getAttributeTypeMap() {
        return UpdateEmailCampaign.attributeTypeMap;
    }
}
UpdateEmailCampaign.discriminator = undefined;
UpdateEmailCampaign.attributeTypeMap = [
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "UpdateEmailCampaignSender"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "htmlUrl",
        "baseName": "htmlUrl",
        "type": "string"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "string"
    },
    {
        "name": "toField",
        "baseName": "toField",
        "type": "string"
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "UpdateEmailCampaignRecipients"
    },
    {
        "name": "attachmentUrl",
        "baseName": "attachmentUrl",
        "type": "string"
    },
    {
        "name": "inlineImageActivation",
        "baseName": "inlineImageActivation",
        "type": "boolean"
    },
    {
        "name": "mirrorActive",
        "baseName": "mirrorActive",
        "type": "boolean"
    },
    {
        "name": "recurring",
        "baseName": "recurring",
        "type": "boolean"
    },
    {
        "name": "footer",
        "baseName": "footer",
        "type": "string"
    },
    {
        "name": "header",
        "baseName": "header",
        "type": "string"
    },
    {
        "name": "utmCampaign",
        "baseName": "utmCampaign",
        "type": "string"
    },
    {
        "name": "params",
        "baseName": "params",
        "type": "any"
    },
    {
        "name": "sendAtBestTime",
        "baseName": "sendAtBestTime",
        "type": "boolean"
    },
    {
        "name": "abTesting",
        "baseName": "abTesting",
        "type": "boolean"
    },
    {
        "name": "subjectA",
        "baseName": "subjectA",
        "type": "string"
    },
    {
        "name": "subjectB",
        "baseName": "subjectB",
        "type": "string"
    },
    {
        "name": "splitRule",
        "baseName": "splitRule",
        "type": "number"
    },
    {
        "name": "winnerCriteria",
        "baseName": "winnerCriteria",
        "type": "UpdateEmailCampaign.WinnerCriteriaEnum"
    },
    {
        "name": "winnerDelay",
        "baseName": "winnerDelay",
        "type": "number"
    }
];
exports.UpdateEmailCampaign = UpdateEmailCampaign;
(function (UpdateEmailCampaign) {
    let WinnerCriteriaEnum;
    (function (WinnerCriteriaEnum) {
        WinnerCriteriaEnum[WinnerCriteriaEnum["Open"] = 'open'] = "Open";
        WinnerCriteriaEnum[WinnerCriteriaEnum["Click"] = 'click'] = "Click";
    })(WinnerCriteriaEnum = UpdateEmailCampaign.WinnerCriteriaEnum || (UpdateEmailCampaign.WinnerCriteriaEnum = {}));
})(UpdateEmailCampaign = exports.UpdateEmailCampaign || (exports.UpdateEmailCampaign = {}));
class UpdateEmailCampaignRecipients {
    static getAttributeTypeMap() {
        return UpdateEmailCampaignRecipients.attributeTypeMap;
    }
}
UpdateEmailCampaignRecipients.discriminator = undefined;
UpdateEmailCampaignRecipients.attributeTypeMap = [
    {
        "name": "exclusionListIds",
        "baseName": "exclusionListIds",
        "type": "Array<number>"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    }
];
exports.UpdateEmailCampaignRecipients = UpdateEmailCampaignRecipients;
class UpdateEmailCampaignSender {
    static getAttributeTypeMap() {
        return UpdateEmailCampaignSender.attributeTypeMap;
    }
}
UpdateEmailCampaignSender.discriminator = undefined;
UpdateEmailCampaignSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    }
];
exports.UpdateEmailCampaignSender = UpdateEmailCampaignSender;
class UpdateList {
    static getAttributeTypeMap() {
        return UpdateList.attributeTypeMap;
    }
}
UpdateList.discriminator = undefined;
UpdateList.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "folderId",
        "baseName": "folderId",
        "type": "number"
    }
];
exports.UpdateList = UpdateList;
class UpdateSender {
    static getAttributeTypeMap() {
        return UpdateSender.attributeTypeMap;
    }
}
UpdateSender.discriminator = undefined;
UpdateSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<CreateSenderIps>"
    }
];
exports.UpdateSender = UpdateSender;
class UpdateSmsCampaign {
    static getAttributeTypeMap() {
        return UpdateSmsCampaign.attributeTypeMap;
    }
}
UpdateSmsCampaign.discriminator = undefined;
UpdateSmsCampaign.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "CreateSmsCampaignRecipients"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    }
];
exports.UpdateSmsCampaign = UpdateSmsCampaign;
class UpdateSmtpTemplate {
    static getAttributeTypeMap() {
        return UpdateSmtpTemplate.attributeTypeMap;
    }
}
UpdateSmtpTemplate.discriminator = undefined;
UpdateSmtpTemplate.attributeTypeMap = [
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "UpdateSmtpTemplateSender"
    },
    {
        "name": "templateName",
        "baseName": "templateName",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "htmlUrl",
        "baseName": "htmlUrl",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "string"
    },
    {
        "name": "toField",
        "baseName": "toField",
        "type": "string"
    },
    {
        "name": "attachmentUrl",
        "baseName": "attachmentUrl",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    }
];
exports.UpdateSmtpTemplate = UpdateSmtpTemplate;
class UpdateSmtpTemplateSender {
    static getAttributeTypeMap() {
        return UpdateSmtpTemplateSender.attributeTypeMap;
    }
}
UpdateSmtpTemplateSender.discriminator = undefined;
UpdateSmtpTemplateSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    }
];
exports.UpdateSmtpTemplateSender = UpdateSmtpTemplateSender;
class UpdateWebhook {
    static getAttributeTypeMap() {
        return UpdateWebhook.attributeTypeMap;
    }
}
UpdateWebhook.discriminator = undefined;
UpdateWebhook.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<UpdateWebhook.EventsEnum>"
    }
];
exports.UpdateWebhook = UpdateWebhook;
(function (UpdateWebhook) {
    let EventsEnum;
    (function (EventsEnum) {
        EventsEnum[EventsEnum["HardBounce"] = 'hardBounce'] = "HardBounce";
        EventsEnum[EventsEnum["SoftBounce"] = 'softBounce'] = "SoftBounce";
        EventsEnum[EventsEnum["Blocked"] = 'blocked'] = "Blocked";
        EventsEnum[EventsEnum["Spam"] = 'spam'] = "Spam";
        EventsEnum[EventsEnum["Delivered"] = 'delivered'] = "Delivered";
        EventsEnum[EventsEnum["Request"] = 'request'] = "Request";
        EventsEnum[EventsEnum["Click"] = 'click'] = "Click";
        EventsEnum[EventsEnum["Invalid"] = 'invalid'] = "Invalid";
        EventsEnum[EventsEnum["Deferred"] = 'deferred'] = "Deferred";
        EventsEnum[EventsEnum["Opened"] = 'opened'] = "Opened";
        EventsEnum[EventsEnum["UniqueOpened"] = 'uniqueOpened'] = "UniqueOpened";
        EventsEnum[EventsEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
        EventsEnum[EventsEnum["ListAddition"] = 'listAddition'] = "ListAddition";
        EventsEnum[EventsEnum["ContactUpdated"] = 'contactUpdated'] = "ContactUpdated";
        EventsEnum[EventsEnum["ContactDeleted"] = 'contactDeleted'] = "ContactDeleted";
    })(EventsEnum = UpdateWebhook.EventsEnum || (UpdateWebhook.EventsEnum = {}));
})(UpdateWebhook = exports.UpdateWebhook || (exports.UpdateWebhook = {}));
class GetChildInfo {
    static getAttributeTypeMap() {
        return GetChildInfo.attributeTypeMap;
    }
}
GetChildInfo.discriminator = undefined;
GetChildInfo.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "credits",
        "baseName": "credits",
        "type": "GetChildInfoCredits"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetChildInfoStatistics"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "string"
    },
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<string>"
    },
    {
        "name": "apiKeys",
        "baseName": "apiKeys",
        "type": "GetChildInfoApiKeys"
    }
];
exports.GetChildInfo = GetChildInfo;
class GetExtendedCampaignOverview {
    static getAttributeTypeMap() {
        return GetExtendedCampaignOverview.attributeTypeMap;
    }
}
GetExtendedCampaignOverview.discriminator = undefined;
GetExtendedCampaignOverview.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetExtendedCampaignOverview.TypeEnum"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetExtendedCampaignOverview.StatusEnum"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    },
    {
        "name": "abTesting",
        "baseName": "abTesting",
        "type": "boolean"
    },
    {
        "name": "subjectA",
        "baseName": "subjectA",
        "type": "string"
    },
    {
        "name": "subjectB",
        "baseName": "subjectB",
        "type": "string"
    },
    {
        "name": "splitRule",
        "baseName": "splitRule",
        "type": "number"
    },
    {
        "name": "winnerCriteria",
        "baseName": "winnerCriteria",
        "type": "string"
    },
    {
        "name": "winnerDelay",
        "baseName": "winnerDelay",
        "type": "number"
    },
    {
        "name": "sendAtBestTime",
        "baseName": "sendAtBestTime",
        "type": "boolean"
    },
    {
        "name": "testSent",
        "baseName": "testSent",
        "type": "boolean"
    },
    {
        "name": "header",
        "baseName": "header",
        "type": "string"
    },
    {
        "name": "footer",
        "baseName": "footer",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "GetExtendedCampaignOverviewSender"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "string"
    },
    {
        "name": "toField",
        "baseName": "toField",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "shareLink",
        "baseName": "shareLink",
        "type": "string"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "Date"
    },
    {
        "name": "inlineImageActivation",
        "baseName": "inlineImageActivation",
        "type": "boolean"
    },
    {
        "name": "mirrorActive",
        "baseName": "mirrorActive",
        "type": "boolean"
    },
    {
        "name": "recurring",
        "baseName": "recurring",
        "type": "boolean"
    },
    {
        "name": "sentDate",
        "baseName": "sentDate",
        "type": "Date"
    }
];
exports.GetExtendedCampaignOverview = GetExtendedCampaignOverview;
(function (GetExtendedCampaignOverview) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Classic"] = 'classic'] = "Classic";
        TypeEnum[TypeEnum["Trigger"] = 'trigger'] = "Trigger";
    })(TypeEnum = GetExtendedCampaignOverview.TypeEnum || (GetExtendedCampaignOverview.TypeEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["InProcess"] = 'in_process'] = "InProcess";
    })(StatusEnum = GetExtendedCampaignOverview.StatusEnum || (GetExtendedCampaignOverview.StatusEnum = {}));
})(GetExtendedCampaignOverview = exports.GetExtendedCampaignOverview || (exports.GetExtendedCampaignOverview = {}));
class GetExtendedClient {
    static getAttributeTypeMap() {
        return GetExtendedClient.attributeTypeMap;
    }
}
GetExtendedClient.discriminator = undefined;
GetExtendedClient.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "GetExtendedClientAddress"
    }
];
exports.GetExtendedClient = GetExtendedClient;
class GetExtendedContactDetails {
    static getAttributeTypeMap() {
        return GetExtendedContactDetails.attributeTypeMap;
    }
}
GetExtendedContactDetails.discriminator = undefined;
GetExtendedContactDetails.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "emailBlacklisted",
        "baseName": "emailBlacklisted",
        "type": "boolean"
    },
    {
        "name": "smsBlacklisted",
        "baseName": "smsBlacklisted",
        "type": "boolean"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "Date"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "listUnsubscribed",
        "baseName": "listUnsubscribed",
        "type": "Array<number>"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "any"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetExtendedContactDetailsStatistics"
    }
];
exports.GetExtendedContactDetails = GetExtendedContactDetails;
class GetExtendedList {
    static getAttributeTypeMap() {
        return GetExtendedList.attributeTypeMap;
    }
}
GetExtendedList.discriminator = undefined;
GetExtendedList.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "totalBlacklisted",
        "baseName": "totalBlacklisted",
        "type": "number"
    },
    {
        "name": "totalSubscribers",
        "baseName": "totalSubscribers",
        "type": "number"
    },
    {
        "name": "folderId",
        "baseName": "folderId",
        "type": "number"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "campaignStats",
        "baseName": "campaignStats",
        "type": "Array<GetExtendedListCampaignStats>"
    },
    {
        "name": "dynamicList",
        "baseName": "dynamicList",
        "type": "boolean"
    }
];
exports.GetExtendedList = GetExtendedList;
class GetSmsCampaign {
    static getAttributeTypeMap() {
        return GetSmsCampaign.attributeTypeMap;
    }
}
GetSmsCampaign.discriminator = undefined;
GetSmsCampaign.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetSmsCampaign.StatusEnum"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "Date"
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "any"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "any"
    }
];
exports.GetSmsCampaign = GetSmsCampaign;
(function (GetSmsCampaign) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["InProcess"] = 'inProcess'] = "InProcess";
    })(StatusEnum = GetSmsCampaign.StatusEnum || (GetSmsCampaign.StatusEnum = {}));
})(GetSmsCampaign = exports.GetSmsCampaign || (exports.GetSmsCampaign = {}));
class GetAccount {
    static getAttributeTypeMap() {
        return GetAccount.attributeTypeMap;
    }
}
GetAccount.discriminator = undefined;
GetAccount.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "GetExtendedClientAddress"
    },
    {
        "name": "plan",
        "baseName": "plan",
        "type": "Array<GetAccountPlan>"
    },
    {
        "name": "relay",
        "baseName": "relay",
        "type": "GetAccountRelay"
    },
    {
        "name": "marketingAutomation",
        "baseName": "marketingAutomation",
        "type": "GetAccountMarketingAutomation"
    }
];
exports.GetAccount = GetAccount;
class GetEmailCampaign {
    static getAttributeTypeMap() {
        return GetEmailCampaign.attributeTypeMap;
    }
}
GetEmailCampaign.discriminator = undefined;
GetEmailCampaign.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetEmailCampaign.TypeEnum"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetEmailCampaign.StatusEnum"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    },
    {
        "name": "abTesting",
        "baseName": "abTesting",
        "type": "boolean"
    },
    {
        "name": "subjectA",
        "baseName": "subjectA",
        "type": "string"
    },
    {
        "name": "subjectB",
        "baseName": "subjectB",
        "type": "string"
    },
    {
        "name": "splitRule",
        "baseName": "splitRule",
        "type": "number"
    },
    {
        "name": "winnerCriteria",
        "baseName": "winnerCriteria",
        "type": "string"
    },
    {
        "name": "winnerDelay",
        "baseName": "winnerDelay",
        "type": "number"
    },
    {
        "name": "sendAtBestTime",
        "baseName": "sendAtBestTime",
        "type": "boolean"
    },
    {
        "name": "testSent",
        "baseName": "testSent",
        "type": "boolean"
    },
    {
        "name": "header",
        "baseName": "header",
        "type": "string"
    },
    {
        "name": "footer",
        "baseName": "footer",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "GetExtendedCampaignOverviewSender"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "string"
    },
    {
        "name": "toField",
        "baseName": "toField",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "shareLink",
        "baseName": "shareLink",
        "type": "string"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "Date"
    },
    {
        "name": "inlineImageActivation",
        "baseName": "inlineImageActivation",
        "type": "boolean"
    },
    {
        "name": "mirrorActive",
        "baseName": "mirrorActive",
        "type": "boolean"
    },
    {
        "name": "recurring",
        "baseName": "recurring",
        "type": "boolean"
    },
    {
        "name": "sentDate",
        "baseName": "sentDate",
        "type": "Date"
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "any"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "any"
    }
];
exports.GetEmailCampaign = GetEmailCampaign;
(function (GetEmailCampaign) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Classic"] = 'classic'] = "Classic";
        TypeEnum[TypeEnum["Trigger"] = 'trigger'] = "Trigger";
    })(TypeEnum = GetEmailCampaign.TypeEnum || (GetEmailCampaign.TypeEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["InProcess"] = 'in_process'] = "InProcess";
    })(StatusEnum = GetEmailCampaign.StatusEnum || (GetEmailCampaign.StatusEnum = {}));
})(GetEmailCampaign = exports.GetEmailCampaign || (exports.GetEmailCampaign = {}));
let enumsMap = {
    "CreateAttribute.TypeEnum": CreateAttribute.TypeEnum,
    "CreateEmailCampaign.WinnerCriteriaEnum": CreateEmailCampaign.WinnerCriteriaEnum,
    "CreateWebhook.EventsEnum": CreateWebhook.EventsEnum,
    "CreateWebhook.TypeEnum": CreateWebhook.TypeEnum,
    "EmailExportRecipients.RecipientsTypeEnum": EmailExportRecipients.RecipientsTypeEnum,
    "ErrorModel.CodeEnum": ErrorModel.CodeEnum,
    "GetAccountPlan.TypeEnum": GetAccountPlan.TypeEnum,
    "GetAccountPlan.CreditsTypeEnum": GetAccountPlan.CreditsTypeEnum,
    "GetAttributesAttributes.CategoryEnum": GetAttributesAttributes.CategoryEnum,
    "GetAttributesAttributes.TypeEnum": GetAttributesAttributes.TypeEnum,
    "GetCampaignOverview.TypeEnum": GetCampaignOverview.TypeEnum,
    "GetCampaignOverview.StatusEnum": GetCampaignOverview.StatusEnum,
    "GetEmailEventReportEvents.EventEnum": GetEmailEventReportEvents.EventEnum,
    "GetProcess.StatusEnum": GetProcess.StatusEnum,
    "GetSmsCampaignOverview.StatusEnum": GetSmsCampaignOverview.StatusEnum,
    "GetSmsEventReportEvents.EventEnum": GetSmsEventReportEvents.EventEnum,
    "GetWebhook.TypeEnum": GetWebhook.TypeEnum,
    "RequestSmsRecipientExport.RecipientsTypeEnum": RequestSmsRecipientExport.RecipientsTypeEnum,
    "SendReport.LanguageEnum": SendReport.LanguageEnum,
    "SendReportEmail.ContentTypeEnum": SendReportEmail.ContentTypeEnum,
    "SendTransacSms.TypeEnum": SendTransacSms.TypeEnum,
    "UpdateCampaignStatus.StatusEnum": UpdateCampaignStatus.StatusEnum,
    "UpdateEmailCampaign.WinnerCriteriaEnum": UpdateEmailCampaign.WinnerCriteriaEnum,
    "UpdateWebhook.EventsEnum": UpdateWebhook.EventsEnum,
    "GetExtendedCampaignOverview.TypeEnum": GetExtendedCampaignOverview.TypeEnum,
    "GetExtendedCampaignOverview.StatusEnum": GetExtendedCampaignOverview.StatusEnum,
    "GetSmsCampaign.StatusEnum": GetSmsCampaign.StatusEnum,
    "GetEmailCampaign.TypeEnum": GetEmailCampaign.TypeEnum,
    "GetEmailCampaign.StatusEnum": GetEmailCampaign.StatusEnum,
};
let typeMap = {
    "AddChildDomain": AddChildDomain,
    "AddContactToList": AddContactToList,
    "AddCredits": AddCredits,
    "CreateAttribute": CreateAttribute,
    "CreateAttributeEnumeration": CreateAttributeEnumeration,
    "CreateChild": CreateChild,
    "CreateContact": CreateContact,
    "CreateEmailCampaign": CreateEmailCampaign,
    "CreateEmailCampaignRecipients": CreateEmailCampaignRecipients,
    "CreateEmailCampaignSender": CreateEmailCampaignSender,
    "CreateList": CreateList,
    "CreateModel": CreateModel,
    "CreateReseller": CreateReseller,
    "CreateSender": CreateSender,
    "CreateSenderIps": CreateSenderIps,
    "CreateSenderModel": CreateSenderModel,
    "CreateSmsCampaign": CreateSmsCampaign,
    "CreateSmsCampaignRecipients": CreateSmsCampaignRecipients,
    "CreateSmtpEmail": CreateSmtpEmail,
    "CreateSmtpTemplate": CreateSmtpTemplate,
    "CreateSmtpTemplateSender": CreateSmtpTemplateSender,
    "CreateUpdateContactModel": CreateUpdateContactModel,
    "CreateUpdateFolder": CreateUpdateFolder,
    "CreateWebhook": CreateWebhook,
    "CreatedProcessId": CreatedProcessId,
    "DeleteHardbounces": DeleteHardbounces,
    "EmailExportRecipients": EmailExportRecipients,
    "ErrorModel": ErrorModel,
    "GetAccountMarketingAutomation": GetAccountMarketingAutomation,
    "GetAccountPlan": GetAccountPlan,
    "GetAccountRelay": GetAccountRelay,
    "GetAccountRelayData": GetAccountRelayData,
    "GetAggregatedReport": GetAggregatedReport,
    "GetAttributes": GetAttributes,
    "GetAttributesAttributes": GetAttributesAttributes,
    "GetAttributesEnumeration": GetAttributesEnumeration,
    "GetCampaignOverview": GetCampaignOverview,
    "GetCampaignRecipients": GetCampaignRecipients,
    "GetCampaignStats": GetCampaignStats,
    "GetChildDomain": GetChildDomain,
    "GetChildDomains": GetChildDomains,
    "GetChildInfoApiKeys": GetChildInfoApiKeys,
    "GetChildInfoApiKeysV2": GetChildInfoApiKeysV2,
    "GetChildInfoApiKeysV3": GetChildInfoApiKeysV3,
    "GetChildInfoCredits": GetChildInfoCredits,
    "GetChildInfoStatistics": GetChildInfoStatistics,
    "GetChildrenList": GetChildrenList,
    "GetClient": GetClient,
    "GetContactCampaignStats": GetContactCampaignStats,
    "GetContactCampaignStatsClicked": GetContactCampaignStatsClicked,
    "GetContactCampaignStatsOpened": GetContactCampaignStatsOpened,
    "GetContactCampaignStatsTransacAttributes": GetContactCampaignStatsTransacAttributes,
    "GetContactCampaignStatsUnsubscriptions": GetContactCampaignStatsUnsubscriptions,
    "GetContactDetails": GetContactDetails,
    "GetContacts": GetContacts,
    "GetEmailCampaigns": GetEmailCampaigns,
    "GetEmailEventReport": GetEmailEventReport,
    "GetEmailEventReportEvents": GetEmailEventReportEvents,
    "GetExtendedCampaignOverviewSender": GetExtendedCampaignOverviewSender,
    "GetExtendedCampaignStats": GetExtendedCampaignStats,
    "GetExtendedClientAddress": GetExtendedClientAddress,
    "GetExtendedContactDetailsStatistics": GetExtendedContactDetailsStatistics,
    "GetExtendedContactDetailsStatisticsClicked": GetExtendedContactDetailsStatisticsClicked,
    "GetExtendedContactDetailsStatisticsLinks": GetExtendedContactDetailsStatisticsLinks,
    "GetExtendedContactDetailsStatisticsMessagesSent": GetExtendedContactDetailsStatisticsMessagesSent,
    "GetExtendedContactDetailsStatisticsOpened": GetExtendedContactDetailsStatisticsOpened,
    "GetExtendedContactDetailsStatisticsUnsubscriptions": GetExtendedContactDetailsStatisticsUnsubscriptions,
    "GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription": GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription,
    "GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription": GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription,
    "GetExtendedListCampaignStats": GetExtendedListCampaignStats,
    "GetFolder": GetFolder,
    "GetFolderLists": GetFolderLists,
    "GetFolders": GetFolders,
    "GetIp": GetIp,
    "GetIpFromSender": GetIpFromSender,
    "GetIps": GetIps,
    "GetIpsFromSender": GetIpsFromSender,
    "GetList": GetList,
    "GetLists": GetLists,
    "GetProcess": GetProcess,
    "GetProcesses": GetProcesses,
    "GetReports": GetReports,
    "GetReportsReports": GetReportsReports,
    "GetSendersList": GetSendersList,
    "GetSendersListIps": GetSendersListIps,
    "GetSendersListSenders": GetSendersListSenders,
    "GetSmsCampaignOverview": GetSmsCampaignOverview,
    "GetSmsCampaignStats": GetSmsCampaignStats,
    "GetSmsCampaigns": GetSmsCampaigns,
    "GetSmsEventReport": GetSmsEventReport,
    "GetSmsEventReportEvents": GetSmsEventReportEvents,
    "GetSmtpTemplateOverview": GetSmtpTemplateOverview,
    "GetSmtpTemplateOverviewSender": GetSmtpTemplateOverviewSender,
    "GetSmtpTemplates": GetSmtpTemplates,
    "GetSsoToken": GetSsoToken,
    "GetStatsByDomain": GetStatsByDomain,
    "GetTransacAggregatedSmsReport": GetTransacAggregatedSmsReport,
    "GetTransacEmailContent": GetTransacEmailContent,
    "GetTransacEmailContentEvents": GetTransacEmailContentEvents,
    "GetTransacEmailsList": GetTransacEmailsList,
    "GetTransacEmailsListTransactionalEmails": GetTransacEmailsListTransactionalEmails,
    "GetTransacSmsReport": GetTransacSmsReport,
    "GetTransacSmsReportReports": GetTransacSmsReportReports,
    "GetWebhook": GetWebhook,
    "GetWebhooks": GetWebhooks,
    "ManageIp": ManageIp,
    "PostContactInfo": PostContactInfo,
    "PostContactInfoContacts": PostContactInfoContacts,
    "PostSendFailed": PostSendFailed,
    "PostSendSmsTestFailed": PostSendSmsTestFailed,
    "RemainingCreditModel": RemainingCreditModel,
    "RemainingCreditModelChild": RemainingCreditModelChild,
    "RemainingCreditModelReseller": RemainingCreditModelReseller,
    "RemoveContactFromList": RemoveContactFromList,
    "RemoveCredits": RemoveCredits,
    "RequestContactExport": RequestContactExport,
    "RequestContactImport": RequestContactImport,
    "RequestContactImportNewList": RequestContactImportNewList,
    "RequestSmsRecipientExport": RequestSmsRecipientExport,
    "SendEmail": SendEmail,
    "SendEmailAttachment": SendEmailAttachment,
    "SendReport": SendReport,
    "SendReportEmail": SendReportEmail,
    "SendSms": SendSms,
    "SendSmtpEmail": SendSmtpEmail,
    "SendSmtpEmailAttachment": SendSmtpEmailAttachment,
    "SendSmtpEmailBcc": SendSmtpEmailBcc,
    "SendSmtpEmailCc": SendSmtpEmailCc,
    "SendSmtpEmailReplyTo": SendSmtpEmailReplyTo,
    "SendSmtpEmailSender": SendSmtpEmailSender,
    "SendSmtpEmailTo": SendSmtpEmailTo,
    "SendTemplateEmail": SendTemplateEmail,
    "SendTestEmail": SendTestEmail,
    "SendTestSms": SendTestSms,
    "SendTransacSms": SendTransacSms,
    "UpdateAttribute": UpdateAttribute,
    "UpdateAttributeEnumeration": UpdateAttributeEnumeration,
    "UpdateCampaignStatus": UpdateCampaignStatus,
    "UpdateChild": UpdateChild,
    "UpdateChildAccountStatus": UpdateChildAccountStatus,
    "UpdateChildDomain": UpdateChildDomain,
    "UpdateContact": UpdateContact,
    "UpdateEmailCampaign": UpdateEmailCampaign,
    "UpdateEmailCampaignRecipients": UpdateEmailCampaignRecipients,
    "UpdateEmailCampaignSender": UpdateEmailCampaignSender,
    "UpdateList": UpdateList,
    "UpdateSender": UpdateSender,
    "UpdateSmsCampaign": UpdateSmsCampaign,
    "UpdateSmtpTemplate": UpdateSmtpTemplate,
    "UpdateSmtpTemplateSender": UpdateSmtpTemplateSender,
    "UpdateWebhook": UpdateWebhook,
    "GetChildInfo": GetChildInfo,
    "GetExtendedCampaignOverview": GetExtendedCampaignOverview,
    "GetExtendedClient": GetExtendedClient,
    "GetExtendedContactDetails": GetExtendedContactDetails,
    "GetExtendedList": GetExtendedList,
    "GetSmsCampaign": GetSmsCampaign,
    "GetAccount": GetAccount,
    "GetEmailCampaign": GetEmailCampaign,
};
class HttpBasicAuth {
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    applyToRequest(_) {
    }
}
exports.VoidAuth = VoidAuth;
var AccountApiApiKeys;
(function (AccountApiApiKeys) {
    AccountApiApiKeys[AccountApiApiKeys["apiKey"] = 0] = "apiKey";
    AccountApiApiKeys[AccountApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(AccountApiApiKeys = exports.AccountApiApiKeys || (exports.AccountApiApiKeys = {}));
class AccountApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[AccountApiApiKeys[key]].apiKey = value;
    }
    getAccount() {
        const localVarPath = this.basePath + '/account';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetAccount");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AccountApi = AccountApi;
var AttributesApiApiKeys;
(function (AttributesApiApiKeys) {
    AttributesApiApiKeys[AttributesApiApiKeys["apiKey"] = 0] = "apiKey";
    AttributesApiApiKeys[AttributesApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(AttributesApiApiKeys = exports.AttributesApiApiKeys || (exports.AttributesApiApiKeys = {}));
class AttributesApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[AttributesApiApiKeys[key]].apiKey = value;
    }
    createAttribute(attributeCategory, attributeName, createAttribute) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling createAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling createAttribute.');
        }
        if (createAttribute === null || createAttribute === undefined) {
            throw new Error('Required parameter createAttribute was null or undefined when calling createAttribute.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createAttribute, "CreateAttribute")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteAttribute(attributeCategory, attributeName) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling deleteAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling deleteAttribute.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getAttributes() {
        const localVarPath = this.basePath + '/contacts/attributes';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetAttributes");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateAttribute(attributeCategory, attributeName, updateAttribute) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling updateAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling updateAttribute.');
        }
        if (updateAttribute === null || updateAttribute === undefined) {
            throw new Error('Required parameter updateAttribute was null or undefined when calling updateAttribute.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateAttribute, "UpdateAttribute")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.AttributesApi = AttributesApi;
var ContactsApiApiKeys;
(function (ContactsApiApiKeys) {
    ContactsApiApiKeys[ContactsApiApiKeys["apiKey"] = 0] = "apiKey";
    ContactsApiApiKeys[ContactsApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(ContactsApiApiKeys = exports.ContactsApiApiKeys || (exports.ContactsApiApiKeys = {}));
class ContactsApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[ContactsApiApiKeys[key]].apiKey = value;
    }
    addContactToList(listId, contactEmails) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/add'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling addContactToList.');
        }
        if (contactEmails === null || contactEmails === undefined) {
            throw new Error('Required parameter contactEmails was null or undefined when calling addContactToList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(contactEmails, "AddContactToList")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "PostContactInfo");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    createAttribute(attributeCategory, attributeName, createAttribute) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling createAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling createAttribute.');
        }
        if (createAttribute === null || createAttribute === undefined) {
            throw new Error('Required parameter createAttribute was null or undefined when calling createAttribute.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createAttribute, "CreateAttribute")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    createContact(createContact) {
        const localVarPath = this.basePath + '/contacts';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (createContact === null || createContact === undefined) {
            throw new Error('Required parameter createContact was null or undefined when calling createContact.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createContact, "CreateContact")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateUpdateContactModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    createFolder(createFolder) {
        const localVarPath = this.basePath + '/contacts/folders';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (createFolder === null || createFolder === undefined) {
            throw new Error('Required parameter createFolder was null or undefined when calling createFolder.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createFolder, "CreateUpdateFolder")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    createList(createList) {
        const localVarPath = this.basePath + '/contacts/lists';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (createList === null || createList === undefined) {
            throw new Error('Required parameter createList was null or undefined when calling createList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createList, "CreateList")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteAttribute(attributeCategory, attributeName) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling deleteAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling deleteAttribute.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteContact(email) {
        const localVarPath = this.basePath + '/contacts/{email}'
            .replace('{' + 'email' + '}', encodeURIComponent(String(email)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling deleteContact.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteFolder(folderId) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling deleteFolder.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteList(listId) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling deleteList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getAttributes() {
        const localVarPath = this.basePath + '/contacts/attributes';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetAttributes");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getContactInfo(email) {
        const localVarPath = this.basePath + '/contacts/{email}'
            .replace('{' + 'email' + '}', encodeURIComponent(String(email)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling getContactInfo.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetExtendedContactDetails");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getContactStats(email) {
        const localVarPath = this.basePath + '/contacts/{email}/campaignStats'
            .replace('{' + 'email' + '}', encodeURIComponent(String(email)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling getContactStats.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetContactCampaignStats");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getContacts(limit, offset, modifiedSince) {
        const localVarPath = this.basePath + '/contacts';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (modifiedSince !== undefined) {
            localVarQueryParameters['modifiedSince'] = ObjectSerializer.serialize(modifiedSince, "Date");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetContacts");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getContactsFromList(listId, modifiedSince, limit, offset) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling getContactsFromList.');
        }
        if (modifiedSince !== undefined) {
            localVarQueryParameters['modifiedSince'] = ObjectSerializer.serialize(modifiedSince, "Date");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetContacts");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getFolder(folderId) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getFolder.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetFolder");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getFolderLists(folderId, limit, offset) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}/lists'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getFolderLists.');
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetFolderLists");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getFolders(limit, offset) {
        const localVarPath = this.basePath + '/contacts/folders';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getFolders.');
        }
        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling getFolders.');
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetFolders");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getList(listId) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling getList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetExtendedList");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getLists(limit, offset) {
        const localVarPath = this.basePath + '/contacts/lists';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetLists");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    importContacts(requestContactImport) {
        const localVarPath = this.basePath + '/contacts/import';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (requestContactImport === null || requestContactImport === undefined) {
            throw new Error('Required parameter requestContactImport was null or undefined when calling importContacts.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(requestContactImport, "RequestContactImport")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreatedProcessId");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    removeContactFromList(listId, contactEmails) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/remove'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling removeContactFromList.');
        }
        if (contactEmails === null || contactEmails === undefined) {
            throw new Error('Required parameter contactEmails was null or undefined when calling removeContactFromList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(contactEmails, "RemoveContactFromList")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "PostContactInfo");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    requestContactExport(requestContactExport) {
        const localVarPath = this.basePath + '/contacts/export';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (requestContactExport === null || requestContactExport === undefined) {
            throw new Error('Required parameter requestContactExport was null or undefined when calling requestContactExport.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(requestContactExport, "RequestContactExport")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreatedProcessId");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateAttribute(attributeCategory, attributeName, updateAttribute) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling updateAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling updateAttribute.');
        }
        if (updateAttribute === null || updateAttribute === undefined) {
            throw new Error('Required parameter updateAttribute was null or undefined when calling updateAttribute.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateAttribute, "UpdateAttribute")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateContact(email, updateContact) {
        const localVarPath = this.basePath + '/contacts/{email}'
            .replace('{' + 'email' + '}', encodeURIComponent(String(email)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling updateContact.');
        }
        if (updateContact === null || updateContact === undefined) {
            throw new Error('Required parameter updateContact was null or undefined when calling updateContact.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateContact, "UpdateContact")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateFolder(folderId, updateFolder) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling updateFolder.');
        }
        if (updateFolder === null || updateFolder === undefined) {
            throw new Error('Required parameter updateFolder was null or undefined when calling updateFolder.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateFolder, "CreateUpdateFolder")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateList(listId, updateList) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling updateList.');
        }
        if (updateList === null || updateList === undefined) {
            throw new Error('Required parameter updateList was null or undefined when calling updateList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateList, "UpdateList")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.ContactsApi = ContactsApi;
var EmailCampaignsApiApiKeys;
(function (EmailCampaignsApiApiKeys) {
    EmailCampaignsApiApiKeys[EmailCampaignsApiApiKeys["apiKey"] = 0] = "apiKey";
    EmailCampaignsApiApiKeys[EmailCampaignsApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(EmailCampaignsApiApiKeys = exports.EmailCampaignsApiApiKeys || (exports.EmailCampaignsApiApiKeys = {}));
class EmailCampaignsApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[EmailCampaignsApiApiKeys[key]].apiKey = value;
    }
    createEmailCampaign(emailCampaigns) {
        const localVarPath = this.basePath + '/emailCampaigns';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (emailCampaigns === null || emailCampaigns === undefined) {
            throw new Error('Required parameter emailCampaigns was null or undefined when calling createEmailCampaign.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(emailCampaigns, "CreateEmailCampaign")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteEmailCampaign(campaignId) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling deleteEmailCampaign.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    emailExportRecipients(campaignId, recipientExport) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/exportRecipients'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling emailExportRecipients.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(recipientExport, "EmailExportRecipients")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreatedProcessId");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getEmailCampaign(campaignId) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling getEmailCampaign.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetEmailCampaign");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getEmailCampaigns(type, status, startDate, endDate, limit, offset) {
        const localVarPath = this.basePath + '/emailCampaigns';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "string");
        }
        if (status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "string");
        }
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "Date");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "Date");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetEmailCampaigns");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    sendEmailCampaignNow(campaignId) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/sendNow'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendEmailCampaignNow.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    sendReport(campaignId, sendReport) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/sendReport'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendReport.');
        }
        if (sendReport === null || sendReport === undefined) {
            throw new Error('Required parameter sendReport was null or undefined when calling sendReport.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(sendReport, "SendReport")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    sendTestEmail(campaignId, emailTo) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/sendTest'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendTestEmail.');
        }
        if (emailTo === null || emailTo === undefined) {
            throw new Error('Required parameter emailTo was null or undefined when calling sendTestEmail.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(emailTo, "SendTestEmail")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateCampaignStatus(campaignId, status) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/status'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateCampaignStatus.');
        }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling updateCampaignStatus.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(status, "UpdateCampaignStatus")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateEmailCampaign(campaignId, emailCampaign) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateEmailCampaign.');
        }
        if (emailCampaign === null || emailCampaign === undefined) {
            throw new Error('Required parameter emailCampaign was null or undefined when calling updateEmailCampaign.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(emailCampaign, "UpdateEmailCampaign")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.EmailCampaignsApi = EmailCampaignsApi;
var FoldersApiApiKeys;
(function (FoldersApiApiKeys) {
    FoldersApiApiKeys[FoldersApiApiKeys["apiKey"] = 0] = "apiKey";
    FoldersApiApiKeys[FoldersApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(FoldersApiApiKeys = exports.FoldersApiApiKeys || (exports.FoldersApiApiKeys = {}));
class FoldersApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[FoldersApiApiKeys[key]].apiKey = value;
    }
    createFolder(createFolder) {
        const localVarPath = this.basePath + '/contacts/folders';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (createFolder === null || createFolder === undefined) {
            throw new Error('Required parameter createFolder was null or undefined when calling createFolder.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createFolder, "CreateUpdateFolder")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteFolder(folderId) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling deleteFolder.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getFolder(folderId) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getFolder.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetFolder");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getFolderLists(folderId, limit, offset) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}/lists'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getFolderLists.');
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetFolderLists");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getFolders(limit, offset) {
        const localVarPath = this.basePath + '/contacts/folders';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getFolders.');
        }
        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling getFolders.');
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetFolders");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateFolder(folderId, updateFolder) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling updateFolder.');
        }
        if (updateFolder === null || updateFolder === undefined) {
            throw new Error('Required parameter updateFolder was null or undefined when calling updateFolder.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateFolder, "CreateUpdateFolder")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.FoldersApi = FoldersApi;
var ListsApiApiKeys;
(function (ListsApiApiKeys) {
    ListsApiApiKeys[ListsApiApiKeys["apiKey"] = 0] = "apiKey";
    ListsApiApiKeys[ListsApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(ListsApiApiKeys = exports.ListsApiApiKeys || (exports.ListsApiApiKeys = {}));
class ListsApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[ListsApiApiKeys[key]].apiKey = value;
    }
    addContactToList(listId, contactEmails) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/add'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling addContactToList.');
        }
        if (contactEmails === null || contactEmails === undefined) {
            throw new Error('Required parameter contactEmails was null or undefined when calling addContactToList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(contactEmails, "AddContactToList")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "PostContactInfo");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    createList(createList) {
        const localVarPath = this.basePath + '/contacts/lists';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (createList === null || createList === undefined) {
            throw new Error('Required parameter createList was null or undefined when calling createList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createList, "CreateList")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteList(listId) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling deleteList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getContactsFromList(listId, modifiedSince, limit, offset) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling getContactsFromList.');
        }
        if (modifiedSince !== undefined) {
            localVarQueryParameters['modifiedSince'] = ObjectSerializer.serialize(modifiedSince, "Date");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetContacts");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getFolderLists(folderId, limit, offset) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}/lists'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getFolderLists.');
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetFolderLists");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getList(listId) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling getList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetExtendedList");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getLists(limit, offset) {
        const localVarPath = this.basePath + '/contacts/lists';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetLists");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    removeContactFromList(listId, contactEmails) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/remove'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling removeContactFromList.');
        }
        if (contactEmails === null || contactEmails === undefined) {
            throw new Error('Required parameter contactEmails was null or undefined when calling removeContactFromList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(contactEmails, "RemoveContactFromList")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "PostContactInfo");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateList(listId, updateList) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling updateList.');
        }
        if (updateList === null || updateList === undefined) {
            throw new Error('Required parameter updateList was null or undefined when calling updateList.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateList, "UpdateList")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.ListsApi = ListsApi;
var ProcessApiApiKeys;
(function (ProcessApiApiKeys) {
    ProcessApiApiKeys[ProcessApiApiKeys["apiKey"] = 0] = "apiKey";
    ProcessApiApiKeys[ProcessApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(ProcessApiApiKeys = exports.ProcessApiApiKeys || (exports.ProcessApiApiKeys = {}));
class ProcessApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[ProcessApiApiKeys[key]].apiKey = value;
    }
    getProcess(processId) {
        const localVarPath = this.basePath + '/processes/{processId}'
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (processId === null || processId === undefined) {
            throw new Error('Required parameter processId was null or undefined when calling getProcess.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetProcess");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getProcesses(limit, offset) {
        const localVarPath = this.basePath + '/processes';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetProcesses");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.ProcessApi = ProcessApi;
var ResellerApiApiKeys;
(function (ResellerApiApiKeys) {
    ResellerApiApiKeys[ResellerApiApiKeys["apiKey"] = 0] = "apiKey";
    ResellerApiApiKeys[ResellerApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(ResellerApiApiKeys = exports.ResellerApiApiKeys || (exports.ResellerApiApiKeys = {}));
class ResellerApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[ResellerApiApiKeys[key]].apiKey = value;
    }
    addCredits(childAuthKey, addCredits) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}/credits/add'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling addCredits.');
        }
        if (addCredits === null || addCredits === undefined) {
            throw new Error('Required parameter addCredits was null or undefined when calling addCredits.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(addCredits, "AddCredits")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "RemainingCreditModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    associateIpToChild(childAuthKey, ip) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}/ips/associate'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling associateIpToChild.');
        }
        if (ip === null || ip === undefined) {
            throw new Error('Required parameter ip was null or undefined when calling associateIpToChild.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(ip, "ManageIp")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    createChildDomain(childAuthKey, addChildDomain) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}/domains'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling createChildDomain.');
        }
        if (addChildDomain === null || addChildDomain === undefined) {
            throw new Error('Required parameter addChildDomain was null or undefined when calling createChildDomain.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(addChildDomain, "AddChildDomain")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    createResellerChild(resellerChild) {
        const localVarPath = this.basePath + '/reseller/children';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(resellerChild, "CreateChild")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateReseller");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteChildDomain(childAuthKey, domainName) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}/domains/{domainName}'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)))
            .replace('{' + 'domainName' + '}', encodeURIComponent(String(domainName)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling deleteChildDomain.');
        }
        if (domainName === null || domainName === undefined) {
            throw new Error('Required parameter domainName was null or undefined when calling deleteChildDomain.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteResellerChild(childAuthKey) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling deleteResellerChild.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    dissociateIpFromChild(childAuthKey, ip) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}/ips/dissociate'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling dissociateIpFromChild.');
        }
        if (ip === null || ip === undefined) {
            throw new Error('Required parameter ip was null or undefined when calling dissociateIpFromChild.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(ip, "ManageIp")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getChildDomains(childAuthKey) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}/domains'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling getChildDomains.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetChildDomains");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getChildInfo(childAuthKey) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling getChildInfo.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetChildInfo");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getResellerChilds() {
        const localVarPath = this.basePath + '/reseller/children';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetChildrenList");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getSsoToken(childAuthKey) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}/auth'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling getSsoToken.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetSsoToken");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    removeCredits(childAuthKey, removeCredits) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}/credits/remove'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling removeCredits.');
        }
        if (removeCredits === null || removeCredits === undefined) {
            throw new Error('Required parameter removeCredits was null or undefined when calling removeCredits.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(removeCredits, "RemoveCredits")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "RemainingCreditModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateChildAccountStatus(childAuthKey, updateChildAccountStatus) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}/accountStatus'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling updateChildAccountStatus.');
        }
        if (updateChildAccountStatus === null || updateChildAccountStatus === undefined) {
            throw new Error('Required parameter updateChildAccountStatus was null or undefined when calling updateChildAccountStatus.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateChildAccountStatus, "UpdateChildAccountStatus")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateChildDomain(childAuthKey, domainName, updateChildDomain) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}/domains/{domainName}'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)))
            .replace('{' + 'domainName' + '}', encodeURIComponent(String(domainName)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling updateChildDomain.');
        }
        if (domainName === null || domainName === undefined) {
            throw new Error('Required parameter domainName was null or undefined when calling updateChildDomain.');
        }
        if (updateChildDomain === null || updateChildDomain === undefined) {
            throw new Error('Required parameter updateChildDomain was null or undefined when calling updateChildDomain.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateChildDomain, "UpdateChildDomain")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateResellerChild(childAuthKey, resellerChild) {
        const localVarPath = this.basePath + '/reseller/children/{childAuthKey}'
            .replace('{' + 'childAuthKey' + '}', encodeURIComponent(String(childAuthKey)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (childAuthKey === null || childAuthKey === undefined) {
            throw new Error('Required parameter childAuthKey was null or undefined when calling updateResellerChild.');
        }
        if (resellerChild === null || resellerChild === undefined) {
            throw new Error('Required parameter resellerChild was null or undefined when calling updateResellerChild.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(resellerChild, "UpdateChild")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.ResellerApi = ResellerApi;
var SMSCampaignsApiApiKeys;
(function (SMSCampaignsApiApiKeys) {
    SMSCampaignsApiApiKeys[SMSCampaignsApiApiKeys["apiKey"] = 0] = "apiKey";
    SMSCampaignsApiApiKeys[SMSCampaignsApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(SMSCampaignsApiApiKeys = exports.SMSCampaignsApiApiKeys || (exports.SMSCampaignsApiApiKeys = {}));
class SMSCampaignsApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[SMSCampaignsApiApiKeys[key]].apiKey = value;
    }
    createSmsCampaign(createSmsCampaign) {
        const localVarPath = this.basePath + '/smsCampaigns';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (createSmsCampaign === null || createSmsCampaign === undefined) {
            throw new Error('Required parameter createSmsCampaign was null or undefined when calling createSmsCampaign.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createSmsCampaign, "CreateSmsCampaign")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteSmsCampaign(campaignId) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling deleteSmsCampaign.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getSmsCampaign(campaignId) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling getSmsCampaign.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetSmsCampaign");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getSmsCampaigns(status, startDate, endDate, limit, offset) {
        const localVarPath = this.basePath + '/smsCampaigns';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "string");
        }
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "Date");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "Date");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetSmsCampaigns");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    requestSmsRecipientExport(campaignId, recipientExport) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}/exportRecipients'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling requestSmsRecipientExport.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(recipientExport, "RequestSmsRecipientExport")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreatedProcessId");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    sendSmsCampaignNow(campaignId) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}/sendNow'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendSmsCampaignNow.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    sendSmsReport(campaignId, sendReport) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}/sendReport'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendSmsReport.');
        }
        if (sendReport === null || sendReport === undefined) {
            throw new Error('Required parameter sendReport was null or undefined when calling sendSmsReport.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(sendReport, "SendReport")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    sendTestSms(campaignId, phoneNumber) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}/sendTest'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendTestSms.');
        }
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new Error('Required parameter phoneNumber was null or undefined when calling sendTestSms.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(phoneNumber, "SendTestSms")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateSmsCampaign(campaignId, updateSmsCampaign) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateSmsCampaign.');
        }
        if (updateSmsCampaign === null || updateSmsCampaign === undefined) {
            throw new Error('Required parameter updateSmsCampaign was null or undefined when calling updateSmsCampaign.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateSmsCampaign, "UpdateSmsCampaign")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateSmsCampaignStatus(campaignId, status) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}/status'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateSmsCampaignStatus.');
        }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling updateSmsCampaignStatus.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(status, "UpdateCampaignStatus")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.SMSCampaignsApi = SMSCampaignsApi;
var SMTPApiApiKeys;
(function (SMTPApiApiKeys) {
    SMTPApiApiKeys[SMTPApiApiKeys["apiKey"] = 0] = "apiKey";
    SMTPApiApiKeys[SMTPApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(SMTPApiApiKeys = exports.SMTPApiApiKeys || (exports.SMTPApiApiKeys = {}));
class SMTPApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[SMTPApiApiKeys[key]].apiKey = value;
    }
    createSmtpTemplate(smtpTemplate) {
        const localVarPath = this.basePath + '/smtp/templates';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (smtpTemplate === null || smtpTemplate === undefined) {
            throw new Error('Required parameter smtpTemplate was null or undefined when calling createSmtpTemplate.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(smtpTemplate, "CreateSmtpTemplate")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteHardbounces(deleteHardbounces) {
        const localVarPath = this.basePath + '/smtp/deleteHardbounces';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(deleteHardbounces, "DeleteHardbounces")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteSmtpTemplate(templateId) {
        const localVarPath = this.basePath + '/smtp/templates/{templateId}'
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling deleteSmtpTemplate.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getAggregatedSmtpReport(startDate, endDate, days, tag) {
        const localVarPath = this.basePath + '/smtp/statistics/aggregatedReport';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }
        if (days !== undefined) {
            localVarQueryParameters['days'] = ObjectSerializer.serialize(days, "number");
        }
        if (tag !== undefined) {
            localVarQueryParameters['tag'] = ObjectSerializer.serialize(tag, "string");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetAggregatedReport");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getEmailEventReport(limit, offset, startDate, endDate, days, email, event, tags, messageId, templateId) {
        const localVarPath = this.basePath + '/smtp/statistics/events';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }
        if (days !== undefined) {
            localVarQueryParameters['days'] = ObjectSerializer.serialize(days, "number");
        }
        if (email !== undefined) {
            localVarQueryParameters['email'] = ObjectSerializer.serialize(email, "string");
        }
        if (event !== undefined) {
            localVarQueryParameters['event'] = ObjectSerializer.serialize(event, "string");
        }
        if (tags !== undefined) {
            localVarQueryParameters['tags'] = ObjectSerializer.serialize(tags, "string");
        }
        if (messageId !== undefined) {
            localVarQueryParameters['messageId'] = ObjectSerializer.serialize(messageId, "string");
        }
        if (templateId !== undefined) {
            localVarQueryParameters['templateId'] = ObjectSerializer.serialize(templateId, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetEmailEventReport");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getSmtpReport(limit, offset, startDate, endDate, days, tag) {
        const localVarPath = this.basePath + '/smtp/statistics/reports';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }
        if (days !== undefined) {
            localVarQueryParameters['days'] = ObjectSerializer.serialize(days, "number");
        }
        if (tag !== undefined) {
            localVarQueryParameters['tag'] = ObjectSerializer.serialize(tag, "string");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetReports");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getSmtpTemplate(templateId) {
        const localVarPath = this.basePath + '/smtp/templates/{templateId}'
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling getSmtpTemplate.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetSmtpTemplateOverview");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getSmtpTemplates(templateStatus, limit, offset) {
        const localVarPath = this.basePath + '/smtp/templates';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (templateStatus !== undefined) {
            localVarQueryParameters['templateStatus'] = ObjectSerializer.serialize(templateStatus, "boolean");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetSmtpTemplates");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getTransacEmailContent(uuid) {
        const localVarPath = this.basePath + '/smtp/emails/{uuid}'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getTransacEmailContent.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetTransacEmailContent");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getTransacEmailsList(email, templateId, messageId, startDate, endDate) {
        const localVarPath = this.basePath + '/smtp/emails';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (email !== undefined) {
            localVarQueryParameters['email'] = ObjectSerializer.serialize(email, "string");
        }
        if (templateId !== undefined) {
            localVarQueryParameters['templateId'] = ObjectSerializer.serialize(templateId, "number");
        }
        if (messageId !== undefined) {
            localVarQueryParameters['messageId'] = ObjectSerializer.serialize(messageId, "string");
        }
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetTransacEmailsList");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    sendTemplate(templateId, sendEmail) {
        const localVarPath = this.basePath + '/smtp/templates/{templateId}/send'
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling sendTemplate.');
        }
        if (sendEmail === null || sendEmail === undefined) {
            throw new Error('Required parameter sendEmail was null or undefined when calling sendTemplate.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(sendEmail, "SendEmail")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "SendTemplateEmail");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    sendTestTemplate(templateId, sendTestEmail) {
        const localVarPath = this.basePath + '/smtp/templates/{templateId}/sendTest'
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling sendTestTemplate.');
        }
        if (sendTestEmail === null || sendTestEmail === undefined) {
            throw new Error('Required parameter sendTestEmail was null or undefined when calling sendTestTemplate.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(sendTestEmail, "SendTestEmail")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    sendTransacEmail(sendSmtpEmail) {
        const localVarPath = this.basePath + '/smtp/email';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (sendSmtpEmail === null || sendSmtpEmail === undefined) {
            throw new Error('Required parameter sendSmtpEmail was null or undefined when calling sendTransacEmail.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(sendSmtpEmail, "SendSmtpEmail")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateSmtpEmail");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateSmtpTemplate(templateId, smtpTemplate) {
        const localVarPath = this.basePath + '/smtp/templates/{templateId}'
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling updateSmtpTemplate.');
        }
        if (smtpTemplate === null || smtpTemplate === undefined) {
            throw new Error('Required parameter smtpTemplate was null or undefined when calling updateSmtpTemplate.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(smtpTemplate, "UpdateSmtpTemplate")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.SMTPApi = SMTPApi;
var SendersApiApiKeys;
(function (SendersApiApiKeys) {
    SendersApiApiKeys[SendersApiApiKeys["apiKey"] = 0] = "apiKey";
    SendersApiApiKeys[SendersApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(SendersApiApiKeys = exports.SendersApiApiKeys || (exports.SendersApiApiKeys = {}));
class SendersApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[SendersApiApiKeys[key]].apiKey = value;
    }
    createSender(sender) {
        const localVarPath = this.basePath + '/senders';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(sender, "CreateSender")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateSenderModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteSender(senderId) {
        const localVarPath = this.basePath + '/senders/{senderId}'
            .replace('{' + 'senderId' + '}', encodeURIComponent(String(senderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (senderId === null || senderId === undefined) {
            throw new Error('Required parameter senderId was null or undefined when calling deleteSender.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getIps() {
        const localVarPath = this.basePath + '/senders/ips';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetIps");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getIpsFromSender(senderId) {
        const localVarPath = this.basePath + '/senders/{senderId}/ips'
            .replace('{' + 'senderId' + '}', encodeURIComponent(String(senderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (senderId === null || senderId === undefined) {
            throw new Error('Required parameter senderId was null or undefined when calling getIpsFromSender.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetIpsFromSender");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getSenders(ip, domain) {
        const localVarPath = this.basePath + '/senders';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (ip !== undefined) {
            localVarQueryParameters['ip'] = ObjectSerializer.serialize(ip, "string");
        }
        if (domain !== undefined) {
            localVarQueryParameters['domain'] = ObjectSerializer.serialize(domain, "string");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetSendersList");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateSender(senderId, sender) {
        const localVarPath = this.basePath + '/senders/{senderId}'
            .replace('{' + 'senderId' + '}', encodeURIComponent(String(senderId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (senderId === null || senderId === undefined) {
            throw new Error('Required parameter senderId was null or undefined when calling updateSender.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(sender, "UpdateSender")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.SendersApi = SendersApi;
var TransactionalSMSApiApiKeys;
(function (TransactionalSMSApiApiKeys) {
    TransactionalSMSApiApiKeys[TransactionalSMSApiApiKeys["apiKey"] = 0] = "apiKey";
    TransactionalSMSApiApiKeys[TransactionalSMSApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(TransactionalSMSApiApiKeys = exports.TransactionalSMSApiApiKeys || (exports.TransactionalSMSApiApiKeys = {}));
class TransactionalSMSApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[TransactionalSMSApiApiKeys[key]].apiKey = value;
    }
    getSmsEvents(limit, startDate, endDate, offset, days, phoneNumber, event, tags) {
        const localVarPath = this.basePath + '/transactionalSMS/statistics/events';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (days !== undefined) {
            localVarQueryParameters['days'] = ObjectSerializer.serialize(days, "number");
        }
        if (phoneNumber !== undefined) {
            localVarQueryParameters['phoneNumber'] = ObjectSerializer.serialize(phoneNumber, "string");
        }
        if (event !== undefined) {
            localVarQueryParameters['event'] = ObjectSerializer.serialize(event, "string");
        }
        if (tags !== undefined) {
            localVarQueryParameters['tags'] = ObjectSerializer.serialize(tags, "string");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetSmsEventReport");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getTransacAggregatedSmsReport(startDate, endDate, days, tag) {
        const localVarPath = this.basePath + '/transactionalSMS/statistics/aggregatedReport';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }
        if (days !== undefined) {
            localVarQueryParameters['days'] = ObjectSerializer.serialize(days, "number");
        }
        if (tag !== undefined) {
            localVarQueryParameters['tag'] = ObjectSerializer.serialize(tag, "string");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetTransacAggregatedSmsReport");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getTransacSmsReport(startDate, endDate, days, tag) {
        const localVarPath = this.basePath + '/transactionalSMS/statistics/reports';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }
        if (days !== undefined) {
            localVarQueryParameters['days'] = ObjectSerializer.serialize(days, "number");
        }
        if (tag !== undefined) {
            localVarQueryParameters['tag'] = ObjectSerializer.serialize(tag, "string");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetTransacSmsReport");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    sendTransacSms(sendTransacSms) {
        const localVarPath = this.basePath + '/transactionalSMS/sms';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (sendTransacSms === null || sendTransacSms === undefined) {
            throw new Error('Required parameter sendTransacSms was null or undefined when calling sendTransacSms.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(sendTransacSms, "SendTransacSms")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "SendSms");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.TransactionalSMSApi = TransactionalSMSApi;
var WebhooksApiApiKeys;
(function (WebhooksApiApiKeys) {
    WebhooksApiApiKeys[WebhooksApiApiKeys["apiKey"] = 0] = "apiKey";
    WebhooksApiApiKeys[WebhooksApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(WebhooksApiApiKeys = exports.WebhooksApiApiKeys || (exports.WebhooksApiApiKeys = {}));
class WebhooksApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'api-key'),
            'partnerKey': new ApiKeyAuth('header', 'partner-key'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[WebhooksApiApiKeys[key]].apiKey = value;
    }
    createWebhook(createWebhook) {
        const localVarPath = this.basePath + '/webhooks';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (createWebhook === null || createWebhook === undefined) {
            throw new Error('Required parameter createWebhook was null or undefined when calling createWebhook.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createWebhook, "CreateWebhook")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CreateModel");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    deleteWebhook(webhookId) {
        const localVarPath = this.basePath + '/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling deleteWebhook.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getWebhook(webhookId) {
        const localVarPath = this.basePath + '/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling getWebhook.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetWebhook");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    getWebhooks(type) {
        const localVarPath = this.basePath + '/webhooks';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "string");
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "GetWebhooks");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    updateWebhook(webhookId, updateWebhook) {
        const localVarPath = this.basePath + '/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling updateWebhook.');
        }
        if (updateWebhook === null || updateWebhook === undefined) {
            throw new Error('Required parameter updateWebhook was null or undefined when calling updateWebhook.');
        }
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateWebhook, "UpdateWebhook")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.partnerKey.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
exports.WebhooksApi = WebhooksApi;
//# sourceMappingURL=api.js.map
