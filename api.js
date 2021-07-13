"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksApi = exports.WebhooksApiApiKeys = exports.TransactionalSMSApi = exports.TransactionalSMSApiApiKeys = exports.TransactionalEmailsApi = exports.TransactionalEmailsApiApiKeys = exports.SendersApi = exports.SendersApiApiKeys = exports.SMSCampaignsApi = exports.SMSCampaignsApiApiKeys = exports.ResellerApi = exports.ResellerApiApiKeys = exports.ProcessApi = exports.ProcessApiApiKeys = exports.ListsApi = exports.ListsApiApiKeys = exports.FoldersApi = exports.FoldersApiApiKeys = exports.EmailCampaignsApi = exports.EmailCampaignsApiApiKeys = exports.ContactsApi = exports.ContactsApiApiKeys = exports.AttributesApi = exports.AttributesApiApiKeys = exports.AccountApi = exports.AccountApiApiKeys = exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBasicAuth = exports.UploadImageToGallery = exports.UpdateWebhook = exports.UpdateSmtpTemplateSender = exports.UpdateSmtpTemplate = exports.UpdateSmsCampaign = exports.UpdateSender = exports.UpdateList = exports.UpdateEmailCampaignSender = exports.UpdateEmailCampaignRecipients = exports.UpdateEmailCampaign = exports.UpdateContact = exports.UpdateChildDomain = exports.UpdateChildAccountStatus = exports.UpdateChild = exports.UpdateCampaignStatus = exports.UpdateAttributeEnumeration = exports.UpdateAttribute = exports.SendTransacSms = exports.SendTestSms = exports.SendTestEmail = exports.SendSmtpEmailTo1 = exports.SendSmtpEmailTo = exports.SendSmtpEmailSender = exports.SendSmtpEmailReplyTo1 = exports.SendSmtpEmailReplyTo = exports.SendSmtpEmailMessageVersions = exports.SendSmtpEmailCc = exports.SendSmtpEmailBcc = exports.SendSmtpEmailAttachment = exports.SendSmtpEmail = exports.SendSms = exports.SendReportEmail = exports.SendReport = exports.RequestSmsRecipientExport = exports.RequestContactImportNewList = exports.RequestContactImport = exports.RequestContactExportCustomContactFilter = exports.RequestContactExport = exports.RemoveCredits = exports.RemoveContactFromList = exports.RemainingCreditModelReseller = exports.RemainingCreditModelChild = exports.RemainingCreditModel = exports.PostSendSmsTestFailed = exports.PostSendFailed = exports.PostContactInfoContacts = exports.PostContactInfo = exports.ManageIp = exports.GetWebhooks = exports.GetWebhook = exports.GetTransacSmsReportReports = exports.GetTransacSmsReport = exports.GetTransacEmailsListTransactionalEmails = exports.GetTransacEmailsList = exports.GetTransacEmailContentEvents = exports.GetTransacEmailContent = exports.GetTransacBlockedContactsReason = exports.GetTransacBlockedContactsContacts = exports.GetTransacBlockedContacts = exports.GetTransacAggregatedSmsReport = exports.GetStatsByDomain = exports.GetStatsByDevice = exports.GetStatsByBrowser = exports.GetSsoToken = exports.GetSmtpTemplates = exports.GetSmtpTemplateOverviewSender = exports.GetSmtpTemplateOverview = exports.GetSmsEventReportEvents = exports.GetSmsEventReport = exports.GetSmsCampaigns = exports.GetSmsCampaignStats = exports.GetSmsCampaignRecipients = exports.GetSmsCampaign = exports.GetSmsCampaignOverview = exports.GetSharedTemplateUrl = exports.GetSendersListSenders = exports.GetSendersListIps = exports.GetSendersList = exports.GetReportsReports = exports.GetReports = exports.GetProcesses = exports.GetProcess = exports.GetLists = exports.GetExtendedList = exports.GetList = exports.GetIpsFromSender = exports.GetIps = exports.GetIpFromSender = exports.GetIp = exports.GetFolders = exports.GetFolderLists = exports.GetFolder = exports.GetExtendedListCampaignStats = exports.GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription = exports.GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription = exports.GetExtendedContactDetailsStatisticsUnsubscriptions = exports.GetExtendedContactDetailsStatisticsOpened = exports.GetExtendedContactDetailsStatisticsMessagesSent = exports.GetExtendedContactDetailsStatisticsLinks = exports.GetExtendedContactDetailsStatisticsClicked = exports.GetExtendedContactDetailsStatistics = exports.GetExtendedContactDetails = exports.GetExtendedClientAddress = exports.GetAccount = exports.GetExtendedClient = exports.GetExtendedCampaignStatsGlobalStats = exports.GetExtendedCampaignStats = exports.GetExtendedCampaignOverviewSender = exports.GetEmailCampaign = exports.GetExtendedCampaignOverview = exports.GetEmailEventReportEvents = exports.GetEmailEventReport = exports.GetEmailCampaigns = exports.GetDeviceBrowserStats = exports.GetContacts = exports.GetContactDetails = exports.GetContactCampaignStatsUnsubscriptions = exports.GetContactCampaignStatsTransacAttributes = exports.GetContactCampaignStatsOpened = exports.GetContactCampaignStatsClicked = exports.GetContactCampaignStats = exports.GetChildInfo = exports.GetClient = exports.GetChildrenList = exports.GetChildInfoStatistics = exports.GetChildInfoCredits = exports.GetChildInfoApiKeysV3 = exports.GetChildInfoApiKeysV2 = exports.GetChildInfoApiKeys = exports.GetChildDomains = exports.GetChildDomain = exports.GetChildAccountCreationStatus = exports.GetCampaignStats = exports.GetCampaignRecipients = exports.GetCampaignOverview = exports.GetBlockedDomains = exports.GetAttributesEnumeration = exports.GetAttributesAttributes = exports.GetAttributes = exports.GetAggregatedReport = exports.GetAccountRelayData = exports.GetAccountRelay = exports.GetAccountPlan = exports.GetAccountMarketingAutomation = exports.ErrorModel = exports.EmailExportRecipients = exports.DeleteHardbounces = exports.CreatedProcessId = exports.CreateWebhook = exports.CreateUpdateFolder = exports.CreateUpdateContactModel = exports.CreateSmtpTemplateSender = exports.CreateSmtpTemplate = exports.CreateSmtpEmail = exports.CreateSmsCampaignRecipients = exports.CreateSmsCampaign = exports.CreateSenderModel = exports.CreateSenderIps = exports.CreateSender = exports.CreateReseller = exports.CreateModel = exports.CreateList = exports.CreateEmailCampaignSender = exports.CreateEmailCampaignRecipients = exports.CreateEmailCampaign = exports.CreateDoiContact = exports.CreateContact = exports.CreateChild = exports.CreateAttributeEnumeration = exports.CreateAttribute = exports.BlockDomain = exports.AddCredits = exports.AddContactToList = exports.AddChildDomain = exports.AbTestVersionStats = exports.AbTestVersionClicksInner = exports.AbTestVersionClicks = exports.AbTestCampaignResultStatistics = exports.AbTestCampaignResultClickedLinks = exports.AbTestCampaignResult = void 0;
const localVarRequest = require("request");
const defaultBasePath = 'https://api.sendinblue.com/v3';
const primitives = [
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
            const discriminatorProperty = typeMap[expectedType].discriminator;
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
            const transformedData = [];
            for (const index in data) {
                const date = data[index];
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
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            const instance = {};
            for (const index in attributeTypes) {
                const attributeType = attributeTypes[index];
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
            const transformedData = [];
            for (const index in data) {
                const date = data[index];
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
            const instance = new typeMap[type]();
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            for (const index in attributeTypes) {
                const attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
class AbTestCampaignResult {
    static getAttributeTypeMap() {
        return AbTestCampaignResult.attributeTypeMap;
    }
}
exports.AbTestCampaignResult = AbTestCampaignResult;
AbTestCampaignResult.discriminator = undefined;
AbTestCampaignResult.attributeTypeMap = [
    {
        "name": "winningVersion",
        "baseName": "winningVersion",
        "type": "AbTestCampaignResult.WinningVersionEnum"
    },
    {
        "name": "winningCriteria",
        "baseName": "winningCriteria",
        "type": "AbTestCampaignResult.WinningCriteriaEnum"
    },
    {
        "name": "winningSubjectLine",
        "baseName": "winningSubjectLine",
        "type": "string"
    },
    {
        "name": "openRate",
        "baseName": "openRate",
        "type": "string"
    },
    {
        "name": "clickRate",
        "baseName": "clickRate",
        "type": "string"
    },
    {
        "name": "winningVersionRate",
        "baseName": "winningVersionRate",
        "type": "string"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "AbTestCampaignResultStatistics"
    },
    {
        "name": "clickedLinks",
        "baseName": "clickedLinks",
        "type": "AbTestCampaignResultClickedLinks"
    }
];
(function (AbTestCampaignResult) {
    let WinningVersionEnum;
    (function (WinningVersionEnum) {
        WinningVersionEnum[WinningVersionEnum["NotAvailable"] = 'notAvailable'] = "NotAvailable";
        WinningVersionEnum[WinningVersionEnum["Pending"] = 'pending'] = "Pending";
        WinningVersionEnum[WinningVersionEnum["Tie"] = 'tie'] = "Tie";
        WinningVersionEnum[WinningVersionEnum["A"] = 'A'] = "A";
        WinningVersionEnum[WinningVersionEnum["B"] = 'B'] = "B";
    })(WinningVersionEnum = AbTestCampaignResult.WinningVersionEnum || (AbTestCampaignResult.WinningVersionEnum = {}));
    let WinningCriteriaEnum;
    (function (WinningCriteriaEnum) {
        WinningCriteriaEnum[WinningCriteriaEnum["Open"] = 'Open'] = "Open";
        WinningCriteriaEnum[WinningCriteriaEnum["Click"] = 'Click'] = "Click";
    })(WinningCriteriaEnum = AbTestCampaignResult.WinningCriteriaEnum || (AbTestCampaignResult.WinningCriteriaEnum = {}));
})(AbTestCampaignResult = exports.AbTestCampaignResult || (exports.AbTestCampaignResult = {}));
class AbTestCampaignResultClickedLinks {
    static getAttributeTypeMap() {
        return AbTestCampaignResultClickedLinks.attributeTypeMap;
    }
}
exports.AbTestCampaignResultClickedLinks = AbTestCampaignResultClickedLinks;
AbTestCampaignResultClickedLinks.discriminator = undefined;
AbTestCampaignResultClickedLinks.attributeTypeMap = [
    {
        "name": "versionA",
        "baseName": "Version A",
        "type": "AbTestVersionClicks"
    },
    {
        "name": "versionB",
        "baseName": "Version B",
        "type": "AbTestVersionClicks"
    }
];
class AbTestCampaignResultStatistics {
    static getAttributeTypeMap() {
        return AbTestCampaignResultStatistics.attributeTypeMap;
    }
}
exports.AbTestCampaignResultStatistics = AbTestCampaignResultStatistics;
AbTestCampaignResultStatistics.discriminator = undefined;
AbTestCampaignResultStatistics.attributeTypeMap = [
    {
        "name": "openers",
        "baseName": "openers",
        "type": "AbTestVersionStats"
    },
    {
        "name": "clicks",
        "baseName": "clicks",
        "type": "AbTestVersionStats"
    },
    {
        "name": "unsubscribed",
        "baseName": "unsubscribed",
        "type": "AbTestVersionStats"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "AbTestVersionStats"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "AbTestVersionStats"
    },
    {
        "name": "complaints",
        "baseName": "complaints",
        "type": "AbTestVersionStats"
    }
];
class AbTestVersionClicks extends Array {
}
exports.AbTestVersionClicks = AbTestVersionClicks;
AbTestVersionClicks.discriminator = undefined;
class AbTestVersionClicksInner {
    static getAttributeTypeMap() {
        return AbTestVersionClicksInner.attributeTypeMap;
    }
}
exports.AbTestVersionClicksInner = AbTestVersionClicksInner;
AbTestVersionClicksInner.discriminator = undefined;
AbTestVersionClicksInner.attributeTypeMap = [
    {
        "name": "link",
        "baseName": "link",
        "type": "string"
    },
    {
        "name": "clicksCount",
        "baseName": "clicksCount",
        "type": "number"
    },
    {
        "name": "clickRate",
        "baseName": "clickRate",
        "type": "string"
    }
];
class AbTestVersionStats {
    static getAttributeTypeMap() {
        return AbTestVersionStats.attributeTypeMap;
    }
}
exports.AbTestVersionStats = AbTestVersionStats;
AbTestVersionStats.discriminator = undefined;
AbTestVersionStats.attributeTypeMap = [
    {
        "name": "versionA",
        "baseName": "Version A",
        "type": "string"
    },
    {
        "name": "versionB",
        "baseName": "Version B",
        "type": "string"
    }
];
class AddChildDomain {
    static getAttributeTypeMap() {
        return AddChildDomain.attributeTypeMap;
    }
}
exports.AddChildDomain = AddChildDomain;
AddChildDomain.discriminator = undefined;
AddChildDomain.attributeTypeMap = [
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    }
];
class AddContactToList {
    static getAttributeTypeMap() {
        return AddContactToList.attributeTypeMap;
    }
}
exports.AddContactToList = AddContactToList;
AddContactToList.discriminator = undefined;
AddContactToList.attributeTypeMap = [
    {
        "name": "emails",
        "baseName": "emails",
        "type": "Array<string>"
    },
    {
        "name": "ids",
        "baseName": "ids",
        "type": "Array<number>"
    }
];
class AddCredits {
    static getAttributeTypeMap() {
        return AddCredits.attributeTypeMap;
    }
}
exports.AddCredits = AddCredits;
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
class BlockDomain {
    static getAttributeTypeMap() {
        return BlockDomain.attributeTypeMap;
    }
}
exports.BlockDomain = BlockDomain;
BlockDomain.discriminator = undefined;
BlockDomain.attributeTypeMap = [
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    }
];
class CreateAttribute {
    static getAttributeTypeMap() {
        return CreateAttribute.attributeTypeMap;
    }
}
exports.CreateAttribute = CreateAttribute;
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
exports.CreateAttributeEnumeration = CreateAttributeEnumeration;
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
class CreateChild {
    static getAttributeTypeMap() {
        return CreateChild.attributeTypeMap;
    }
}
exports.CreateChild = CreateChild;
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
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "CreateChild.LanguageEnum"
    }
];
(function (CreateChild) {
    let LanguageEnum;
    (function (LanguageEnum) {
        LanguageEnum[LanguageEnum["Fr"] = 'fr'] = "Fr";
        LanguageEnum[LanguageEnum["Es"] = 'es'] = "Es";
        LanguageEnum[LanguageEnum["Pt"] = 'pt'] = "Pt";
        LanguageEnum[LanguageEnum["It"] = 'it'] = "It";
        LanguageEnum[LanguageEnum["De"] = 'de'] = "De";
        LanguageEnum[LanguageEnum["En"] = 'en'] = "En";
    })(LanguageEnum = CreateChild.LanguageEnum || (CreateChild.LanguageEnum = {}));
})(CreateChild = exports.CreateChild || (exports.CreateChild = {}));
class CreateContact {
    static getAttributeTypeMap() {
        return CreateContact.attributeTypeMap;
    }
}
exports.CreateContact = CreateContact;
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
class CreateDoiContact {
    static getAttributeTypeMap() {
        return CreateDoiContact.attributeTypeMap;
    }
}
exports.CreateDoiContact = CreateDoiContact;
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
        "type": "any"
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
class CreateEmailCampaign {
    static getAttributeTypeMap() {
        return CreateEmailCampaign.attributeTypeMap;
    }
}
exports.CreateEmailCampaign = CreateEmailCampaign;
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
    },
    {
        "name": "ipWarmupEnable",
        "baseName": "ipWarmupEnable",
        "type": "boolean"
    },
    {
        "name": "initialQuota",
        "baseName": "initialQuota",
        "type": "number"
    },
    {
        "name": "increaseRate",
        "baseName": "increaseRate",
        "type": "number"
    }
];
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
exports.CreateEmailCampaignRecipients = CreateEmailCampaignRecipients;
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
class CreateEmailCampaignSender {
    static getAttributeTypeMap() {
        return CreateEmailCampaignSender.attributeTypeMap;
    }
}
exports.CreateEmailCampaignSender = CreateEmailCampaignSender;
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
class CreateList {
    static getAttributeTypeMap() {
        return CreateList.attributeTypeMap;
    }
}
exports.CreateList = CreateList;
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
class CreateModel {
    static getAttributeTypeMap() {
        return CreateModel.attributeTypeMap;
    }
}
exports.CreateModel = CreateModel;
CreateModel.discriminator = undefined;
CreateModel.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
class CreateReseller {
    static getAttributeTypeMap() {
        return CreateReseller.attributeTypeMap;
    }
}
exports.CreateReseller = CreateReseller;
CreateReseller.discriminator = undefined;
CreateReseller.attributeTypeMap = [
    {
        "name": "authKey",
        "baseName": "authKey",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
class CreateSender {
    static getAttributeTypeMap() {
        return CreateSender.attributeTypeMap;
    }
}
exports.CreateSender = CreateSender;
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
class CreateSenderIps {
    static getAttributeTypeMap() {
        return CreateSenderIps.attributeTypeMap;
    }
}
exports.CreateSenderIps = CreateSenderIps;
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
class CreateSenderModel {
    static getAttributeTypeMap() {
        return CreateSenderModel.attributeTypeMap;
    }
}
exports.CreateSenderModel = CreateSenderModel;
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
class CreateSmsCampaign {
    static getAttributeTypeMap() {
        return CreateSmsCampaign.attributeTypeMap;
    }
}
exports.CreateSmsCampaign = CreateSmsCampaign;
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
        "type": "string"
    }
];
class CreateSmsCampaignRecipients {
    static getAttributeTypeMap() {
        return CreateSmsCampaignRecipients.attributeTypeMap;
    }
}
exports.CreateSmsCampaignRecipients = CreateSmsCampaignRecipients;
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
class CreateSmtpEmail {
    static getAttributeTypeMap() {
        return CreateSmtpEmail.attributeTypeMap;
    }
}
exports.CreateSmtpEmail = CreateSmtpEmail;
CreateSmtpEmail.discriminator = undefined;
CreateSmtpEmail.attributeTypeMap = [
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "messageIds",
        "baseName": "messageIds",
        "type": "Array<string>"
    }
];
class CreateSmtpTemplate {
    static getAttributeTypeMap() {
        return CreateSmtpTemplate.attributeTypeMap;
    }
}
exports.CreateSmtpTemplate = CreateSmtpTemplate;
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
class CreateSmtpTemplateSender {
    static getAttributeTypeMap() {
        return CreateSmtpTemplateSender.attributeTypeMap;
    }
}
exports.CreateSmtpTemplateSender = CreateSmtpTemplateSender;
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
class CreateUpdateContactModel {
    static getAttributeTypeMap() {
        return CreateUpdateContactModel.attributeTypeMap;
    }
}
exports.CreateUpdateContactModel = CreateUpdateContactModel;
CreateUpdateContactModel.discriminator = undefined;
CreateUpdateContactModel.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
class CreateUpdateFolder {
    static getAttributeTypeMap() {
        return CreateUpdateFolder.attributeTypeMap;
    }
}
exports.CreateUpdateFolder = CreateUpdateFolder;
CreateUpdateFolder.discriminator = undefined;
CreateUpdateFolder.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
class CreateWebhook {
    static getAttributeTypeMap() {
        return CreateWebhook.attributeTypeMap;
    }
}
exports.CreateWebhook = CreateWebhook;
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
    },
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    }
];
(function (CreateWebhook) {
    let EventsEnum;
    (function (EventsEnum) {
        EventsEnum[EventsEnum["Sent"] = 'sent'] = "Sent";
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
        EventsEnum[EventsEnum["InboundEmailProcessed"] = 'inbound_email_processed'] = "InboundEmailProcessed";
    })(EventsEnum = CreateWebhook.EventsEnum || (CreateWebhook.EventsEnum = {}));
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Transactional"] = 'transactional'] = "Transactional";
        TypeEnum[TypeEnum["Marketing"] = 'marketing'] = "Marketing";
        TypeEnum[TypeEnum["Inbound"] = 'inbound'] = "Inbound";
    })(TypeEnum = CreateWebhook.TypeEnum || (CreateWebhook.TypeEnum = {}));
})(CreateWebhook = exports.CreateWebhook || (exports.CreateWebhook = {}));
class CreatedProcessId {
    static getAttributeTypeMap() {
        return CreatedProcessId.attributeTypeMap;
    }
}
exports.CreatedProcessId = CreatedProcessId;
CreatedProcessId.discriminator = undefined;
CreatedProcessId.attributeTypeMap = [
    {
        "name": "processId",
        "baseName": "processId",
        "type": "number"
    }
];
class DeleteHardbounces {
    static getAttributeTypeMap() {
        return DeleteHardbounces.attributeTypeMap;
    }
}
exports.DeleteHardbounces = DeleteHardbounces;
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
class EmailExportRecipients {
    static getAttributeTypeMap() {
        return EmailExportRecipients.attributeTypeMap;
    }
}
exports.EmailExportRecipients = EmailExportRecipients;
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
exports.ErrorModel = ErrorModel;
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
exports.GetAccountMarketingAutomation = GetAccountMarketingAutomation;
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
class GetAccountPlan {
    static getAttributeTypeMap() {
        return GetAccountPlan.attributeTypeMap;
    }
}
exports.GetAccountPlan = GetAccountPlan;
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
exports.GetAccountRelay = GetAccountRelay;
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
class GetAccountRelayData {
    static getAttributeTypeMap() {
        return GetAccountRelayData.attributeTypeMap;
    }
}
exports.GetAccountRelayData = GetAccountRelayData;
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
class GetAggregatedReport {
    static getAttributeTypeMap() {
        return GetAggregatedReport.attributeTypeMap;
    }
}
exports.GetAggregatedReport = GetAggregatedReport;
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
class GetAttributes {
    static getAttributeTypeMap() {
        return GetAttributes.attributeTypeMap;
    }
}
exports.GetAttributes = GetAttributes;
GetAttributes.discriminator = undefined;
GetAttributes.attributeTypeMap = [
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "Array<GetAttributesAttributes>"
    }
];
class GetAttributesAttributes {
    static getAttributeTypeMap() {
        return GetAttributesAttributes.attributeTypeMap;
    }
}
exports.GetAttributesAttributes = GetAttributesAttributes;
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
exports.GetAttributesEnumeration = GetAttributesEnumeration;
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
class GetBlockedDomains {
    static getAttributeTypeMap() {
        return GetBlockedDomains.attributeTypeMap;
    }
}
exports.GetBlockedDomains = GetBlockedDomains;
GetBlockedDomains.discriminator = undefined;
GetBlockedDomains.attributeTypeMap = [
    {
        "name": "domains",
        "baseName": "domains",
        "type": "Array<string>"
    }
];
class GetCampaignOverview {
    static getAttributeTypeMap() {
        return GetCampaignOverview.attributeTypeMap;
    }
}
exports.GetCampaignOverview = GetCampaignOverview;
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
        "type": "string"
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
exports.GetCampaignRecipients = GetCampaignRecipients;
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
class GetCampaignStats {
    static getAttributeTypeMap() {
        return GetCampaignStats.attributeTypeMap;
    }
}
exports.GetCampaignStats = GetCampaignStats;
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
    },
    {
        "name": "returnBounce",
        "baseName": "returnBounce",
        "type": "number"
    }
];
class GetChildAccountCreationStatus {
    static getAttributeTypeMap() {
        return GetChildAccountCreationStatus.attributeTypeMap;
    }
}
exports.GetChildAccountCreationStatus = GetChildAccountCreationStatus;
GetChildAccountCreationStatus.discriminator = undefined;
GetChildAccountCreationStatus.attributeTypeMap = [
    {
        "name": "childAccountCreated",
        "baseName": "childAccountCreated",
        "type": "boolean"
    }
];
class GetChildDomain {
    static getAttributeTypeMap() {
        return GetChildDomain.attributeTypeMap;
    }
}
exports.GetChildDomain = GetChildDomain;
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
class GetChildDomains extends Array {
}
exports.GetChildDomains = GetChildDomains;
GetChildDomains.discriminator = undefined;
class GetChildInfoApiKeys {
    static getAttributeTypeMap() {
        return GetChildInfoApiKeys.attributeTypeMap;
    }
}
exports.GetChildInfoApiKeys = GetChildInfoApiKeys;
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
class GetChildInfoApiKeysV2 {
    static getAttributeTypeMap() {
        return GetChildInfoApiKeysV2.attributeTypeMap;
    }
}
exports.GetChildInfoApiKeysV2 = GetChildInfoApiKeysV2;
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
class GetChildInfoApiKeysV3 {
    static getAttributeTypeMap() {
        return GetChildInfoApiKeysV3.attributeTypeMap;
    }
}
exports.GetChildInfoApiKeysV3 = GetChildInfoApiKeysV3;
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
class GetChildInfoCredits {
    static getAttributeTypeMap() {
        return GetChildInfoCredits.attributeTypeMap;
    }
}
exports.GetChildInfoCredits = GetChildInfoCredits;
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
class GetChildInfoStatistics {
    static getAttributeTypeMap() {
        return GetChildInfoStatistics.attributeTypeMap;
    }
}
exports.GetChildInfoStatistics = GetChildInfoStatistics;
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
class GetChildrenList {
    static getAttributeTypeMap() {
        return GetChildrenList.attributeTypeMap;
    }
}
exports.GetChildrenList = GetChildrenList;
GetChildrenList.discriminator = undefined;
GetChildrenList.attributeTypeMap = [
    {
        "name": "children",
        "baseName": "children",
        "type": "Array<any>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
class GetClient {
    static getAttributeTypeMap() {
        return GetClient.attributeTypeMap;
    }
}
exports.GetClient = GetClient;
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
class GetChildInfo extends GetClient {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetChildInfo.attributeTypeMap);
    }
}
exports.GetChildInfo = GetChildInfo;
GetChildInfo.discriminator = undefined;
GetChildInfo.attributeTypeMap = [
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
class GetContactCampaignStats {
    static getAttributeTypeMap() {
        return GetContactCampaignStats.attributeTypeMap;
    }
}
exports.GetContactCampaignStats = GetContactCampaignStats;
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
class GetContactCampaignStatsClicked {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsClicked.attributeTypeMap;
    }
}
exports.GetContactCampaignStatsClicked = GetContactCampaignStatsClicked;
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
class GetContactCampaignStatsOpened {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsOpened.attributeTypeMap;
    }
}
exports.GetContactCampaignStatsOpened = GetContactCampaignStatsOpened;
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
        "type": "string"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
class GetContactCampaignStatsTransacAttributes {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsTransacAttributes.attributeTypeMap;
    }
}
exports.GetContactCampaignStatsTransacAttributes = GetContactCampaignStatsTransacAttributes;
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
class GetContactCampaignStatsUnsubscriptions {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsUnsubscriptions.attributeTypeMap;
    }
}
exports.GetContactCampaignStatsUnsubscriptions = GetContactCampaignStatsUnsubscriptions;
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
class GetContactDetails {
    static getAttributeTypeMap() {
        return GetContactDetails.attributeTypeMap;
    }
}
exports.GetContactDetails = GetContactDetails;
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
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "string"
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
class GetContacts {
    static getAttributeTypeMap() {
        return GetContacts.attributeTypeMap;
    }
}
exports.GetContacts = GetContacts;
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
class GetDeviceBrowserStats {
    static getAttributeTypeMap() {
        return GetDeviceBrowserStats.attributeTypeMap;
    }
}
exports.GetDeviceBrowserStats = GetDeviceBrowserStats;
GetDeviceBrowserStats.discriminator = undefined;
GetDeviceBrowserStats.attributeTypeMap = [
    {
        "name": "clickers",
        "baseName": "clickers",
        "type": "number"
    },
    {
        "name": "uniqueClicks",
        "baseName": "uniqueClicks",
        "type": "number"
    },
    {
        "name": "viewed",
        "baseName": "viewed",
        "type": "number"
    },
    {
        "name": "uniqueViews",
        "baseName": "uniqueViews",
        "type": "number"
    }
];
class GetEmailCampaigns {
    static getAttributeTypeMap() {
        return GetEmailCampaigns.attributeTypeMap;
    }
}
exports.GetEmailCampaigns = GetEmailCampaigns;
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
class GetEmailEventReport {
    static getAttributeTypeMap() {
        return GetEmailEventReport.attributeTypeMap;
    }
}
exports.GetEmailEventReport = GetEmailEventReport;
GetEmailEventReport.discriminator = undefined;
GetEmailEventReport.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetEmailEventReportEvents>"
    }
];
class GetEmailEventReportEvents {
    static getAttributeTypeMap() {
        return GetEmailEventReportEvents.attributeTypeMap;
    }
}
exports.GetEmailEventReportEvents = GetEmailEventReportEvents;
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
        "type": "string"
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
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    }
];
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
        EventEnum[EventEnum["Error"] = 'error'] = "Error";
    })(EventEnum = GetEmailEventReportEvents.EventEnum || (GetEmailEventReportEvents.EventEnum = {}));
})(GetEmailEventReportEvents = exports.GetEmailEventReportEvents || (exports.GetEmailEventReportEvents = {}));
class GetExtendedCampaignOverview extends GetCampaignOverview {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetExtendedCampaignOverview.attributeTypeMap);
    }
}
exports.GetExtendedCampaignOverview = GetExtendedCampaignOverview;
GetExtendedCampaignOverview.discriminator = undefined;
GetExtendedCampaignOverview.attributeTypeMap = [
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
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
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
        "name": "sentDate",
        "baseName": "sentDate",
        "type": "string"
    },
    {
        "name": "returnBounce",
        "baseName": "returnBounce",
        "type": "number"
    }
];
class GetEmailCampaign extends GetExtendedCampaignOverview {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetEmailCampaign.attributeTypeMap);
    }
}
exports.GetEmailCampaign = GetEmailCampaign;
GetEmailCampaign.discriminator = undefined;
GetEmailCampaign.attributeTypeMap = [
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "GetSmsCampaignRecipients"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetSmsCampaignRecipients"
    }
];
class GetExtendedCampaignOverviewSender {
    static getAttributeTypeMap() {
        return GetExtendedCampaignOverviewSender.attributeTypeMap;
    }
}
exports.GetExtendedCampaignOverviewSender = GetExtendedCampaignOverviewSender;
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    }
];
class GetExtendedCampaignStats {
    static getAttributeTypeMap() {
        return GetExtendedCampaignStats.attributeTypeMap;
    }
}
exports.GetExtendedCampaignStats = GetExtendedCampaignStats;
GetExtendedCampaignStats.discriminator = undefined;
GetExtendedCampaignStats.attributeTypeMap = [
    {
        "name": "globalStats",
        "baseName": "globalStats",
        "type": "GetExtendedCampaignStatsGlobalStats"
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
    },
    {
        "name": "statsByDevice",
        "baseName": "statsByDevice",
        "type": "GetStatsByDevice"
    },
    {
        "name": "statsByBrowser",
        "baseName": "statsByBrowser",
        "type": "GetStatsByBrowser"
    }
];
class GetExtendedCampaignStatsGlobalStats {
    static getAttributeTypeMap() {
        return GetExtendedCampaignStatsGlobalStats.attributeTypeMap;
    }
}
exports.GetExtendedCampaignStatsGlobalStats = GetExtendedCampaignStatsGlobalStats;
GetExtendedCampaignStatsGlobalStats.discriminator = undefined;
GetExtendedCampaignStatsGlobalStats.attributeTypeMap = [];
class GetExtendedClient extends GetClient {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetExtendedClient.attributeTypeMap);
    }
}
exports.GetExtendedClient = GetExtendedClient;
GetExtendedClient.discriminator = undefined;
GetExtendedClient.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "GetExtendedClientAddress"
    }
];
class GetAccount extends GetExtendedClient {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetAccount.attributeTypeMap);
    }
}
exports.GetAccount = GetAccount;
GetAccount.discriminator = undefined;
GetAccount.attributeTypeMap = [
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
class GetExtendedClientAddress {
    static getAttributeTypeMap() {
        return GetExtendedClientAddress.attributeTypeMap;
    }
}
exports.GetExtendedClientAddress = GetExtendedClientAddress;
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
class GetExtendedContactDetails extends GetContactDetails {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetExtendedContactDetails.attributeTypeMap);
    }
}
exports.GetExtendedContactDetails = GetExtendedContactDetails;
GetExtendedContactDetails.discriminator = undefined;
GetExtendedContactDetails.attributeTypeMap = [
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetExtendedContactDetailsStatistics"
    }
];
class GetExtendedContactDetailsStatistics {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatistics.attributeTypeMap;
    }
}
exports.GetExtendedContactDetailsStatistics = GetExtendedContactDetailsStatistics;
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
class GetExtendedContactDetailsStatisticsClicked {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsClicked.attributeTypeMap;
    }
}
exports.GetExtendedContactDetailsStatisticsClicked = GetExtendedContactDetailsStatisticsClicked;
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
class GetExtendedContactDetailsStatisticsLinks {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsLinks.attributeTypeMap;
    }
}
exports.GetExtendedContactDetailsStatisticsLinks = GetExtendedContactDetailsStatisticsLinks;
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
        "type": "string"
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
class GetExtendedContactDetailsStatisticsMessagesSent {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsMessagesSent.attributeTypeMap;
    }
}
exports.GetExtendedContactDetailsStatisticsMessagesSent = GetExtendedContactDetailsStatisticsMessagesSent;
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
        "type": "string"
    }
];
class GetExtendedContactDetailsStatisticsOpened {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsOpened.attributeTypeMap;
    }
}
exports.GetExtendedContactDetailsStatisticsOpened = GetExtendedContactDetailsStatisticsOpened;
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
        "type": "string"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
class GetExtendedContactDetailsStatisticsUnsubscriptions {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsUnsubscriptions.attributeTypeMap;
    }
}
exports.GetExtendedContactDetailsStatisticsUnsubscriptions = GetExtendedContactDetailsStatisticsUnsubscriptions;
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
class GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription.attributeTypeMap;
    }
}
exports.GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription = GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription;
GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription.discriminator = undefined;
GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription.attributeTypeMap = [
    {
        "name": "eventTime",
        "baseName": "eventTime",
        "type": "string"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
class GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription.attributeTypeMap;
    }
}
exports.GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription = GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription;
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
        "type": "string"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
class GetExtendedListCampaignStats {
    static getAttributeTypeMap() {
        return GetExtendedListCampaignStats.attributeTypeMap;
    }
}
exports.GetExtendedListCampaignStats = GetExtendedListCampaignStats;
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
class GetFolder {
    static getAttributeTypeMap() {
        return GetFolder.attributeTypeMap;
    }
}
exports.GetFolder = GetFolder;
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
class GetFolderLists {
    static getAttributeTypeMap() {
        return GetFolderLists.attributeTypeMap;
    }
}
exports.GetFolderLists = GetFolderLists;
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
class GetFolders {
    static getAttributeTypeMap() {
        return GetFolders.attributeTypeMap;
    }
}
exports.GetFolders = GetFolders;
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
class GetIp {
    static getAttributeTypeMap() {
        return GetIp.attributeTypeMap;
    }
}
exports.GetIp = GetIp;
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
class GetIpFromSender {
    static getAttributeTypeMap() {
        return GetIpFromSender.attributeTypeMap;
    }
}
exports.GetIpFromSender = GetIpFromSender;
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
class GetIps {
    static getAttributeTypeMap() {
        return GetIps.attributeTypeMap;
    }
}
exports.GetIps = GetIps;
GetIps.discriminator = undefined;
GetIps.attributeTypeMap = [
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<GetIp>"
    }
];
class GetIpsFromSender {
    static getAttributeTypeMap() {
        return GetIpsFromSender.attributeTypeMap;
    }
}
exports.GetIpsFromSender = GetIpsFromSender;
GetIpsFromSender.discriminator = undefined;
GetIpsFromSender.attributeTypeMap = [
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<GetIpFromSender>"
    }
];
class GetList {
    static getAttributeTypeMap() {
        return GetList.attributeTypeMap;
    }
}
exports.GetList = GetList;
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
    },
    {
        "name": "uniqueSubscribers",
        "baseName": "uniqueSubscribers",
        "type": "number"
    }
];
class GetExtendedList extends GetList {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetExtendedList.attributeTypeMap);
    }
}
exports.GetExtendedList = GetExtendedList;
GetExtendedList.discriminator = undefined;
GetExtendedList.attributeTypeMap = [
    {
        "name": "folderId",
        "baseName": "folderId",
        "type": "number"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
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
class GetLists {
    static getAttributeTypeMap() {
        return GetLists.attributeTypeMap;
    }
}
exports.GetLists = GetLists;
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
class GetProcess {
    static getAttributeTypeMap() {
        return GetProcess.attributeTypeMap;
    }
}
exports.GetProcess = GetProcess;
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
exports.GetProcesses = GetProcesses;
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
class GetReports {
    static getAttributeTypeMap() {
        return GetReports.attributeTypeMap;
    }
}
exports.GetReports = GetReports;
GetReports.discriminator = undefined;
GetReports.attributeTypeMap = [
    {
        "name": "reports",
        "baseName": "reports",
        "type": "Array<GetReportsReports>"
    }
];
class GetReportsReports {
    static getAttributeTypeMap() {
        return GetReportsReports.attributeTypeMap;
    }
}
exports.GetReportsReports = GetReportsReports;
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
class GetSendersList {
    static getAttributeTypeMap() {
        return GetSendersList.attributeTypeMap;
    }
}
exports.GetSendersList = GetSendersList;
GetSendersList.discriminator = undefined;
GetSendersList.attributeTypeMap = [
    {
        "name": "senders",
        "baseName": "senders",
        "type": "Array<GetSendersListSenders>"
    }
];
class GetSendersListIps {
    static getAttributeTypeMap() {
        return GetSendersListIps.attributeTypeMap;
    }
}
exports.GetSendersListIps = GetSendersListIps;
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
class GetSendersListSenders {
    static getAttributeTypeMap() {
        return GetSendersListSenders.attributeTypeMap;
    }
}
exports.GetSendersListSenders = GetSendersListSenders;
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
class GetSharedTemplateUrl {
    static getAttributeTypeMap() {
        return GetSharedTemplateUrl.attributeTypeMap;
    }
}
exports.GetSharedTemplateUrl = GetSharedTemplateUrl;
GetSharedTemplateUrl.discriminator = undefined;
GetSharedTemplateUrl.attributeTypeMap = [
    {
        "name": "sharedUrl",
        "baseName": "sharedUrl",
        "type": "string"
    }
];
class GetSmsCampaignOverview {
    static getAttributeTypeMap() {
        return GetSmsCampaignOverview.attributeTypeMap;
    }
}
exports.GetSmsCampaignOverview = GetSmsCampaignOverview;
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
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "string"
    }
];
class GetSmsCampaign extends GetSmsCampaignOverview {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetSmsCampaign.attributeTypeMap);
    }
}
exports.GetSmsCampaign = GetSmsCampaign;
GetSmsCampaign.discriminator = undefined;
GetSmsCampaign.attributeTypeMap = [
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "GetSmsCampaignRecipients"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetSmsCampaignRecipients"
    }
];
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
class GetSmsCampaignRecipients {
    static getAttributeTypeMap() {
        return GetSmsCampaignRecipients.attributeTypeMap;
    }
}
exports.GetSmsCampaignRecipients = GetSmsCampaignRecipients;
GetSmsCampaignRecipients.discriminator = undefined;
GetSmsCampaignRecipients.attributeTypeMap = [];
class GetSmsCampaignStats {
    static getAttributeTypeMap() {
        return GetSmsCampaignStats.attributeTypeMap;
    }
}
exports.GetSmsCampaignStats = GetSmsCampaignStats;
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
class GetSmsCampaigns {
    static getAttributeTypeMap() {
        return GetSmsCampaigns.attributeTypeMap;
    }
}
exports.GetSmsCampaigns = GetSmsCampaigns;
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
class GetSmsEventReport {
    static getAttributeTypeMap() {
        return GetSmsEventReport.attributeTypeMap;
    }
}
exports.GetSmsEventReport = GetSmsEventReport;
GetSmsEventReport.discriminator = undefined;
GetSmsEventReport.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetSmsEventReportEvents>"
    }
];
class GetSmsEventReportEvents {
    static getAttributeTypeMap() {
        return GetSmsEventReportEvents.attributeTypeMap;
    }
}
exports.GetSmsEventReportEvents = GetSmsEventReportEvents;
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
exports.GetSmtpTemplateOverview = GetSmtpTemplateOverview;
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
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "string"
    },
    {
        "name": "doiTemplate",
        "baseName": "doiTemplate",
        "type": "boolean"
    }
];
class GetSmtpTemplateOverviewSender {
    static getAttributeTypeMap() {
        return GetSmtpTemplateOverviewSender.attributeTypeMap;
    }
}
exports.GetSmtpTemplateOverviewSender = GetSmtpTemplateOverviewSender;
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    }
];
class GetSmtpTemplates {
    static getAttributeTypeMap() {
        return GetSmtpTemplates.attributeTypeMap;
    }
}
exports.GetSmtpTemplates = GetSmtpTemplates;
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
class GetSsoToken {
    static getAttributeTypeMap() {
        return GetSsoToken.attributeTypeMap;
    }
}
exports.GetSsoToken = GetSsoToken;
GetSsoToken.discriminator = undefined;
GetSsoToken.attributeTypeMap = [
    {
        "name": "token",
        "baseName": "token",
        "type": "string"
    }
];
class GetStatsByBrowser extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetStatsByBrowser.attributeTypeMap);
    }
}
exports.GetStatsByBrowser = GetStatsByBrowser;
GetStatsByBrowser.discriminator = undefined;
GetStatsByBrowser.attributeTypeMap = [];
class GetStatsByDevice {
    static getAttributeTypeMap() {
        return GetStatsByDevice.attributeTypeMap;
    }
}
exports.GetStatsByDevice = GetStatsByDevice;
GetStatsByDevice.discriminator = undefined;
GetStatsByDevice.attributeTypeMap = [
    {
        "name": "desktop",
        "baseName": "desktop",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    },
    {
        "name": "mobile",
        "baseName": "mobile",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    },
    {
        "name": "tablet",
        "baseName": "tablet",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    },
    {
        "name": "unknown",
        "baseName": "unknown",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    }
];
class GetStatsByDomain extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetStatsByDomain.attributeTypeMap);
    }
}
exports.GetStatsByDomain = GetStatsByDomain;
GetStatsByDomain.discriminator = undefined;
GetStatsByDomain.attributeTypeMap = [];
class GetTransacAggregatedSmsReport {
    static getAttributeTypeMap() {
        return GetTransacAggregatedSmsReport.attributeTypeMap;
    }
}
exports.GetTransacAggregatedSmsReport = GetTransacAggregatedSmsReport;
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
class GetTransacBlockedContacts {
    static getAttributeTypeMap() {
        return GetTransacBlockedContacts.attributeTypeMap;
    }
}
exports.GetTransacBlockedContacts = GetTransacBlockedContacts;
GetTransacBlockedContacts.discriminator = undefined;
GetTransacBlockedContacts.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "Array<GetTransacBlockedContactsContacts>"
    }
];
class GetTransacBlockedContactsContacts {
    static getAttributeTypeMap() {
        return GetTransacBlockedContactsContacts.attributeTypeMap;
    }
}
exports.GetTransacBlockedContactsContacts = GetTransacBlockedContactsContacts;
GetTransacBlockedContactsContacts.discriminator = undefined;
GetTransacBlockedContactsContacts.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "senderEmail",
        "baseName": "senderEmail",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "GetTransacBlockedContactsReason"
    },
    {
        "name": "blockedAt",
        "baseName": "blockedAt",
        "type": "string"
    }
];
class GetTransacBlockedContactsReason {
    static getAttributeTypeMap() {
        return GetTransacBlockedContactsReason.attributeTypeMap;
    }
}
exports.GetTransacBlockedContactsReason = GetTransacBlockedContactsReason;
GetTransacBlockedContactsReason.discriminator = undefined;
GetTransacBlockedContactsReason.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "GetTransacBlockedContactsReason.CodeEnum"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
(function (GetTransacBlockedContactsReason) {
    let CodeEnum;
    (function (CodeEnum) {
        CodeEnum[CodeEnum["UnsubscribedViaMA"] = 'unsubscribedViaMA'] = "UnsubscribedViaMA";
        CodeEnum[CodeEnum["UnsubscribedViaEmail"] = 'unsubscribedViaEmail'] = "UnsubscribedViaEmail";
        CodeEnum[CodeEnum["AdminBlocked"] = 'adminBlocked'] = "AdminBlocked";
        CodeEnum[CodeEnum["UnsubscribedViaApi"] = 'unsubscribedViaApi'] = "UnsubscribedViaApi";
        CodeEnum[CodeEnum["HardBounce"] = 'hardBounce'] = "HardBounce";
        CodeEnum[CodeEnum["ContactFlaggedAsSpam"] = 'contactFlaggedAsSpam'] = "ContactFlaggedAsSpam";
    })(CodeEnum = GetTransacBlockedContactsReason.CodeEnum || (GetTransacBlockedContactsReason.CodeEnum = {}));
})(GetTransacBlockedContactsReason = exports.GetTransacBlockedContactsReason || (exports.GetTransacBlockedContactsReason = {}));
class GetTransacEmailContent {
    static getAttributeTypeMap() {
        return GetTransacEmailContent.attributeTypeMap;
    }
}
exports.GetTransacEmailContent = GetTransacEmailContent;
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
        "type": "string"
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
class GetTransacEmailContentEvents {
    static getAttributeTypeMap() {
        return GetTransacEmailContentEvents.attributeTypeMap;
    }
}
exports.GetTransacEmailContentEvents = GetTransacEmailContentEvents;
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
        "type": "string"
    }
];
class GetTransacEmailsList {
    static getAttributeTypeMap() {
        return GetTransacEmailsList.attributeTypeMap;
    }
}
exports.GetTransacEmailsList = GetTransacEmailsList;
GetTransacEmailsList.discriminator = undefined;
GetTransacEmailsList.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "transactionalEmails",
        "baseName": "transactionalEmails",
        "type": "Array<GetTransacEmailsListTransactionalEmails>"
    }
];
class GetTransacEmailsListTransactionalEmails {
    static getAttributeTypeMap() {
        return GetTransacEmailsListTransactionalEmails.attributeTypeMap;
    }
}
exports.GetTransacEmailsListTransactionalEmails = GetTransacEmailsListTransactionalEmails;
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
        "type": "string"
    },
    {
        "name": "from",
        "baseName": "from",
        "type": "string"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>"
    }
];
class GetTransacSmsReport {
    static getAttributeTypeMap() {
        return GetTransacSmsReport.attributeTypeMap;
    }
}
exports.GetTransacSmsReport = GetTransacSmsReport;
GetTransacSmsReport.discriminator = undefined;
GetTransacSmsReport.attributeTypeMap = [
    {
        "name": "reports",
        "baseName": "reports",
        "type": "Array<GetTransacSmsReportReports>"
    }
];
class GetTransacSmsReportReports {
    static getAttributeTypeMap() {
        return GetTransacSmsReportReports.attributeTypeMap;
    }
}
exports.GetTransacSmsReportReports = GetTransacSmsReportReports;
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
class GetWebhook {
    static getAttributeTypeMap() {
        return GetWebhook.attributeTypeMap;
    }
}
exports.GetWebhook = GetWebhook;
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
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "string"
    }
];
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
exports.GetWebhooks = GetWebhooks;
GetWebhooks.discriminator = undefined;
GetWebhooks.attributeTypeMap = [
    {
        "name": "webhooks",
        "baseName": "webhooks",
        "type": "Array<any>"
    }
];
class ManageIp {
    static getAttributeTypeMap() {
        return ManageIp.attributeTypeMap;
    }
}
exports.ManageIp = ManageIp;
ManageIp.discriminator = undefined;
ManageIp.attributeTypeMap = [
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
class PostContactInfo {
    static getAttributeTypeMap() {
        return PostContactInfo.attributeTypeMap;
    }
}
exports.PostContactInfo = PostContactInfo;
PostContactInfo.discriminator = undefined;
PostContactInfo.attributeTypeMap = [
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "PostContactInfoContacts"
    }
];
class PostContactInfoContacts {
    static getAttributeTypeMap() {
        return PostContactInfoContacts.attributeTypeMap;
    }
}
exports.PostContactInfoContacts = PostContactInfoContacts;
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
class PostSendFailed {
    static getAttributeTypeMap() {
        return PostSendFailed.attributeTypeMap;
    }
}
exports.PostSendFailed = PostSendFailed;
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
class PostSendSmsTestFailed {
    static getAttributeTypeMap() {
        return PostSendSmsTestFailed.attributeTypeMap;
    }
}
exports.PostSendSmsTestFailed = PostSendSmsTestFailed;
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
class RemainingCreditModel {
    static getAttributeTypeMap() {
        return RemainingCreditModel.attributeTypeMap;
    }
}
exports.RemainingCreditModel = RemainingCreditModel;
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
class RemainingCreditModelChild {
    static getAttributeTypeMap() {
        return RemainingCreditModelChild.attributeTypeMap;
    }
}
exports.RemainingCreditModelChild = RemainingCreditModelChild;
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
class RemainingCreditModelReseller {
    static getAttributeTypeMap() {
        return RemainingCreditModelReseller.attributeTypeMap;
    }
}
exports.RemainingCreditModelReseller = RemainingCreditModelReseller;
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
class RemoveContactFromList {
    static getAttributeTypeMap() {
        return RemoveContactFromList.attributeTypeMap;
    }
}
exports.RemoveContactFromList = RemoveContactFromList;
RemoveContactFromList.discriminator = undefined;
RemoveContactFromList.attributeTypeMap = [
    {
        "name": "emails",
        "baseName": "emails",
        "type": "Array<string>"
    },
    {
        "name": "ids",
        "baseName": "ids",
        "type": "Array<number>"
    },
    {
        "name": "all",
        "baseName": "all",
        "type": "boolean"
    }
];
class RemoveCredits {
    static getAttributeTypeMap() {
        return RemoveCredits.attributeTypeMap;
    }
}
exports.RemoveCredits = RemoveCredits;
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
class RequestContactExport {
    static getAttributeTypeMap() {
        return RequestContactExport.attributeTypeMap;
    }
}
exports.RequestContactExport = RequestContactExport;
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
class RequestContactExportCustomContactFilter {
    static getAttributeTypeMap() {
        return RequestContactExportCustomContactFilter.attributeTypeMap;
    }
}
exports.RequestContactExportCustomContactFilter = RequestContactExportCustomContactFilter;
RequestContactExportCustomContactFilter.discriminator = undefined;
RequestContactExportCustomContactFilter.attributeTypeMap = [
    {
        "name": "actionForContacts",
        "baseName": "actionForContacts",
        "type": "RequestContactExportCustomContactFilter.ActionForContactsEnum"
    },
    {
        "name": "actionForEmailCampaigns",
        "baseName": "actionForEmailCampaigns",
        "type": "RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum"
    },
    {
        "name": "actionForSmsCampaigns",
        "baseName": "actionForSmsCampaigns",
        "type": "RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum"
    },
    {
        "name": "listId",
        "baseName": "listId",
        "type": "number"
    },
    {
        "name": "emailCampaignId",
        "baseName": "emailCampaignId",
        "type": "number"
    },
    {
        "name": "smsCampaignId",
        "baseName": "smsCampaignId",
        "type": "number"
    }
];
(function (RequestContactExportCustomContactFilter) {
    let ActionForContactsEnum;
    (function (ActionForContactsEnum) {
        ActionForContactsEnum[ActionForContactsEnum["AllContacts"] = 'allContacts'] = "AllContacts";
        ActionForContactsEnum[ActionForContactsEnum["Subscribed"] = 'subscribed'] = "Subscribed";
        ActionForContactsEnum[ActionForContactsEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
        ActionForContactsEnum[ActionForContactsEnum["UnsubscribedPerList"] = 'unsubscribedPerList'] = "UnsubscribedPerList";
    })(ActionForContactsEnum = RequestContactExportCustomContactFilter.ActionForContactsEnum || (RequestContactExportCustomContactFilter.ActionForContactsEnum = {}));
    let ActionForEmailCampaignsEnum;
    (function (ActionForEmailCampaignsEnum) {
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["Openers"] = 'openers'] = "Openers";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["NonOpeners"] = 'nonOpeners'] = "NonOpeners";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["Clickers"] = 'clickers'] = "Clickers";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["NonClickers"] = 'nonClickers'] = "NonClickers";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        ActionForEmailCampaignsEnum[ActionForEmailCampaignsEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
    })(ActionForEmailCampaignsEnum = RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum || (RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum = {}));
    let ActionForSmsCampaignsEnum;
    (function (ActionForSmsCampaignsEnum) {
        ActionForSmsCampaignsEnum[ActionForSmsCampaignsEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        ActionForSmsCampaignsEnum[ActionForSmsCampaignsEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
        ActionForSmsCampaignsEnum[ActionForSmsCampaignsEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
    })(ActionForSmsCampaignsEnum = RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum || (RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum = {}));
})(RequestContactExportCustomContactFilter = exports.RequestContactExportCustomContactFilter || (exports.RequestContactExportCustomContactFilter = {}));
class RequestContactImport {
    static getAttributeTypeMap() {
        return RequestContactImport.attributeTypeMap;
    }
}
exports.RequestContactImport = RequestContactImport;
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
class RequestContactImportNewList {
    static getAttributeTypeMap() {
        return RequestContactImportNewList.attributeTypeMap;
    }
}
exports.RequestContactImportNewList = RequestContactImportNewList;
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
class RequestSmsRecipientExport {
    static getAttributeTypeMap() {
        return RequestSmsRecipientExport.attributeTypeMap;
    }
}
exports.RequestSmsRecipientExport = RequestSmsRecipientExport;
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
class SendReport {
    static getAttributeTypeMap() {
        return SendReport.attributeTypeMap;
    }
}
exports.SendReport = SendReport;
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
exports.SendReportEmail = SendReportEmail;
SendReportEmail.discriminator = undefined;
SendReportEmail.attributeTypeMap = [
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<string>"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    }
];
class SendSms {
    static getAttributeTypeMap() {
        return SendSms.attributeTypeMap;
    }
}
exports.SendSms = SendSms;
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
class SendSmtpEmail {
    static getAttributeTypeMap() {
        return SendSmtpEmail.attributeTypeMap;
    }
}
exports.SendSmtpEmail = SendSmtpEmail;
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
        "name": "messageVersions",
        "baseName": "messageVersions",
        "type": "Array<SendSmtpEmailMessageVersions>"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>"
    }
];
class SendSmtpEmailAttachment {
    static getAttributeTypeMap() {
        return SendSmtpEmailAttachment.attributeTypeMap;
    }
}
exports.SendSmtpEmailAttachment = SendSmtpEmailAttachment;
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
class SendSmtpEmailBcc {
    static getAttributeTypeMap() {
        return SendSmtpEmailBcc.attributeTypeMap;
    }
}
exports.SendSmtpEmailBcc = SendSmtpEmailBcc;
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
class SendSmtpEmailCc {
    static getAttributeTypeMap() {
        return SendSmtpEmailCc.attributeTypeMap;
    }
}
exports.SendSmtpEmailCc = SendSmtpEmailCc;
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
class SendSmtpEmailMessageVersions {
    static getAttributeTypeMap() {
        return SendSmtpEmailMessageVersions.attributeTypeMap;
    }
}
exports.SendSmtpEmailMessageVersions = SendSmtpEmailMessageVersions;
SendSmtpEmailMessageVersions.discriminator = undefined;
SendSmtpEmailMessageVersions.attributeTypeMap = [
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<SendSmtpEmailTo1>"
    },
    {
        "name": "params",
        "baseName": "params",
        "type": "{ [key: string]: any; }"
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
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "SendSmtpEmailReplyTo1"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    }
];
class SendSmtpEmailReplyTo {
    static getAttributeTypeMap() {
        return SendSmtpEmailReplyTo.attributeTypeMap;
    }
}
exports.SendSmtpEmailReplyTo = SendSmtpEmailReplyTo;
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
class SendSmtpEmailReplyTo1 {
    static getAttributeTypeMap() {
        return SendSmtpEmailReplyTo1.attributeTypeMap;
    }
}
exports.SendSmtpEmailReplyTo1 = SendSmtpEmailReplyTo1;
SendSmtpEmailReplyTo1.discriminator = undefined;
SendSmtpEmailReplyTo1.attributeTypeMap = [
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
class SendSmtpEmailSender {
    static getAttributeTypeMap() {
        return SendSmtpEmailSender.attributeTypeMap;
    }
}
exports.SendSmtpEmailSender = SendSmtpEmailSender;
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
class SendSmtpEmailTo {
    static getAttributeTypeMap() {
        return SendSmtpEmailTo.attributeTypeMap;
    }
}
exports.SendSmtpEmailTo = SendSmtpEmailTo;
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
class SendSmtpEmailTo1 {
    static getAttributeTypeMap() {
        return SendSmtpEmailTo1.attributeTypeMap;
    }
}
exports.SendSmtpEmailTo1 = SendSmtpEmailTo1;
SendSmtpEmailTo1.discriminator = undefined;
SendSmtpEmailTo1.attributeTypeMap = [
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
class SendTestEmail {
    static getAttributeTypeMap() {
        return SendTestEmail.attributeTypeMap;
    }
}
exports.SendTestEmail = SendTestEmail;
SendTestEmail.discriminator = undefined;
SendTestEmail.attributeTypeMap = [
    {
        "name": "emailTo",
        "baseName": "emailTo",
        "type": "Array<string>"
    }
];
class SendTestSms {
    static getAttributeTypeMap() {
        return SendTestSms.attributeTypeMap;
    }
}
exports.SendTestSms = SendTestSms;
SendTestSms.discriminator = undefined;
SendTestSms.attributeTypeMap = [
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    }
];
class SendTransacSms {
    static getAttributeTypeMap() {
        return SendTransacSms.attributeTypeMap;
    }
}
exports.SendTransacSms = SendTransacSms;
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
exports.UpdateAttribute = UpdateAttribute;
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
class UpdateAttributeEnumeration {
    static getAttributeTypeMap() {
        return UpdateAttributeEnumeration.attributeTypeMap;
    }
}
exports.UpdateAttributeEnumeration = UpdateAttributeEnumeration;
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
class UpdateCampaignStatus {
    static getAttributeTypeMap() {
        return UpdateCampaignStatus.attributeTypeMap;
    }
}
exports.UpdateCampaignStatus = UpdateCampaignStatus;
UpdateCampaignStatus.discriminator = undefined;
UpdateCampaignStatus.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "UpdateCampaignStatus.StatusEnum"
    }
];
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
exports.UpdateChild = UpdateChild;
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
class UpdateChildAccountStatus {
    static getAttributeTypeMap() {
        return UpdateChildAccountStatus.attributeTypeMap;
    }
}
exports.UpdateChildAccountStatus = UpdateChildAccountStatus;
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
    },
    {
        "name": "smsCampaign",
        "baseName": "smsCampaign",
        "type": "boolean"
    }
];
class UpdateChildDomain {
    static getAttributeTypeMap() {
        return UpdateChildDomain.attributeTypeMap;
    }
}
exports.UpdateChildDomain = UpdateChildDomain;
UpdateChildDomain.discriminator = undefined;
UpdateChildDomain.attributeTypeMap = [
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    }
];
class UpdateContact {
    static getAttributeTypeMap() {
        return UpdateContact.attributeTypeMap;
    }
}
exports.UpdateContact = UpdateContact;
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
class UpdateEmailCampaign {
    static getAttributeTypeMap() {
        return UpdateEmailCampaign.attributeTypeMap;
    }
}
exports.UpdateEmailCampaign = UpdateEmailCampaign;
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
    },
    {
        "name": "ipWarmupEnable",
        "baseName": "ipWarmupEnable",
        "type": "boolean"
    },
    {
        "name": "initialQuota",
        "baseName": "initialQuota",
        "type": "number"
    },
    {
        "name": "increaseRate",
        "baseName": "increaseRate",
        "type": "number"
    }
];
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
exports.UpdateEmailCampaignRecipients = UpdateEmailCampaignRecipients;
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
class UpdateEmailCampaignSender {
    static getAttributeTypeMap() {
        return UpdateEmailCampaignSender.attributeTypeMap;
    }
}
exports.UpdateEmailCampaignSender = UpdateEmailCampaignSender;
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
class UpdateList {
    static getAttributeTypeMap() {
        return UpdateList.attributeTypeMap;
    }
}
exports.UpdateList = UpdateList;
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
class UpdateSender {
    static getAttributeTypeMap() {
        return UpdateSender.attributeTypeMap;
    }
}
exports.UpdateSender = UpdateSender;
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
class UpdateSmsCampaign {
    static getAttributeTypeMap() {
        return UpdateSmsCampaign.attributeTypeMap;
    }
}
exports.UpdateSmsCampaign = UpdateSmsCampaign;
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
        "type": "string"
    }
];
class UpdateSmtpTemplate {
    static getAttributeTypeMap() {
        return UpdateSmtpTemplate.attributeTypeMap;
    }
}
exports.UpdateSmtpTemplate = UpdateSmtpTemplate;
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
class UpdateSmtpTemplateSender {
    static getAttributeTypeMap() {
        return UpdateSmtpTemplateSender.attributeTypeMap;
    }
}
exports.UpdateSmtpTemplateSender = UpdateSmtpTemplateSender;
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
class UpdateWebhook {
    static getAttributeTypeMap() {
        return UpdateWebhook.attributeTypeMap;
    }
}
exports.UpdateWebhook = UpdateWebhook;
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
class UploadImageToGallery {
    static getAttributeTypeMap() {
        return UploadImageToGallery.attributeTypeMap;
    }
}
exports.UploadImageToGallery = UploadImageToGallery;
UploadImageToGallery.discriminator = undefined;
UploadImageToGallery.attributeTypeMap = [
    {
        "name": "imageUrl",
        "baseName": "imageUrl",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
const enumsMap = {
    "AbTestCampaignResult.WinningVersionEnum": AbTestCampaignResult.WinningVersionEnum,
    "AbTestCampaignResult.WinningCriteriaEnum": AbTestCampaignResult.WinningCriteriaEnum,
    "CreateAttribute.TypeEnum": CreateAttribute.TypeEnum,
    "CreateChild.LanguageEnum": CreateChild.LanguageEnum,
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
    "GetTransacBlockedContactsReason.CodeEnum": GetTransacBlockedContactsReason.CodeEnum,
    "GetWebhook.TypeEnum": GetWebhook.TypeEnum,
    "RequestContactExportCustomContactFilter.ActionForContactsEnum": RequestContactExportCustomContactFilter.ActionForContactsEnum,
    "RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum": RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum,
    "RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum": RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum,
    "RequestSmsRecipientExport.RecipientsTypeEnum": RequestSmsRecipientExport.RecipientsTypeEnum,
    "SendReport.LanguageEnum": SendReport.LanguageEnum,
    "SendTransacSms.TypeEnum": SendTransacSms.TypeEnum,
    "UpdateCampaignStatus.StatusEnum": UpdateCampaignStatus.StatusEnum,
    "UpdateEmailCampaign.WinnerCriteriaEnum": UpdateEmailCampaign.WinnerCriteriaEnum,
    "UpdateWebhook.EventsEnum": UpdateWebhook.EventsEnum,
};
const typeMap = {
    "AbTestCampaignResult": AbTestCampaignResult,
    "AbTestCampaignResultClickedLinks": AbTestCampaignResultClickedLinks,
    "AbTestCampaignResultStatistics": AbTestCampaignResultStatistics,
    "AbTestVersionClicks": AbTestVersionClicks,
    "AbTestVersionClicksInner": AbTestVersionClicksInner,
    "AbTestVersionStats": AbTestVersionStats,
    "AddChildDomain": AddChildDomain,
    "AddContactToList": AddContactToList,
    "AddCredits": AddCredits,
    "BlockDomain": BlockDomain,
    "CreateAttribute": CreateAttribute,
    "CreateAttributeEnumeration": CreateAttributeEnumeration,
    "CreateChild": CreateChild,
    "CreateContact": CreateContact,
    "CreateDoiContact": CreateDoiContact,
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
    "GetAccount": GetAccount,
    "GetAccountMarketingAutomation": GetAccountMarketingAutomation,
    "GetAccountPlan": GetAccountPlan,
    "GetAccountRelay": GetAccountRelay,
    "GetAccountRelayData": GetAccountRelayData,
    "GetAggregatedReport": GetAggregatedReport,
    "GetAttributes": GetAttributes,
    "GetAttributesAttributes": GetAttributesAttributes,
    "GetAttributesEnumeration": GetAttributesEnumeration,
    "GetBlockedDomains": GetBlockedDomains,
    "GetCampaignOverview": GetCampaignOverview,
    "GetCampaignRecipients": GetCampaignRecipients,
    "GetCampaignStats": GetCampaignStats,
    "GetChildAccountCreationStatus": GetChildAccountCreationStatus,
    "GetChildDomain": GetChildDomain,
    "GetChildDomains": GetChildDomains,
    "GetChildInfo": GetChildInfo,
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
    "GetDeviceBrowserStats": GetDeviceBrowserStats,
    "GetEmailCampaign": GetEmailCampaign,
    "GetEmailCampaigns": GetEmailCampaigns,
    "GetEmailEventReport": GetEmailEventReport,
    "GetEmailEventReportEvents": GetEmailEventReportEvents,
    "GetExtendedCampaignOverview": GetExtendedCampaignOverview,
    "GetExtendedCampaignOverviewSender": GetExtendedCampaignOverviewSender,
    "GetExtendedCampaignStats": GetExtendedCampaignStats,
    "GetExtendedCampaignStatsGlobalStats": GetExtendedCampaignStatsGlobalStats,
    "GetExtendedClient": GetExtendedClient,
    "GetExtendedClientAddress": GetExtendedClientAddress,
    "GetExtendedContactDetails": GetExtendedContactDetails,
    "GetExtendedContactDetailsStatistics": GetExtendedContactDetailsStatistics,
    "GetExtendedContactDetailsStatisticsClicked": GetExtendedContactDetailsStatisticsClicked,
    "GetExtendedContactDetailsStatisticsLinks": GetExtendedContactDetailsStatisticsLinks,
    "GetExtendedContactDetailsStatisticsMessagesSent": GetExtendedContactDetailsStatisticsMessagesSent,
    "GetExtendedContactDetailsStatisticsOpened": GetExtendedContactDetailsStatisticsOpened,
    "GetExtendedContactDetailsStatisticsUnsubscriptions": GetExtendedContactDetailsStatisticsUnsubscriptions,
    "GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription": GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription,
    "GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription": GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription,
    "GetExtendedList": GetExtendedList,
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
    "GetSharedTemplateUrl": GetSharedTemplateUrl,
    "GetSmsCampaign": GetSmsCampaign,
    "GetSmsCampaignOverview": GetSmsCampaignOverview,
    "GetSmsCampaignRecipients": GetSmsCampaignRecipients,
    "GetSmsCampaignStats": GetSmsCampaignStats,
    "GetSmsCampaigns": GetSmsCampaigns,
    "GetSmsEventReport": GetSmsEventReport,
    "GetSmsEventReportEvents": GetSmsEventReportEvents,
    "GetSmtpTemplateOverview": GetSmtpTemplateOverview,
    "GetSmtpTemplateOverviewSender": GetSmtpTemplateOverviewSender,
    "GetSmtpTemplates": GetSmtpTemplates,
    "GetSsoToken": GetSsoToken,
    "GetStatsByBrowser": GetStatsByBrowser,
    "GetStatsByDevice": GetStatsByDevice,
    "GetStatsByDomain": GetStatsByDomain,
    "GetTransacAggregatedSmsReport": GetTransacAggregatedSmsReport,
    "GetTransacBlockedContacts": GetTransacBlockedContacts,
    "GetTransacBlockedContactsContacts": GetTransacBlockedContactsContacts,
    "GetTransacBlockedContactsReason": GetTransacBlockedContactsReason,
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
    "RequestContactExportCustomContactFilter": RequestContactExportCustomContactFilter,
    "RequestContactImport": RequestContactImport,
    "RequestContactImportNewList": RequestContactImportNewList,
    "RequestSmsRecipientExport": RequestSmsRecipientExport,
    "SendReport": SendReport,
    "SendReportEmail": SendReportEmail,
    "SendSms": SendSms,
    "SendSmtpEmail": SendSmtpEmail,
    "SendSmtpEmailAttachment": SendSmtpEmailAttachment,
    "SendSmtpEmailBcc": SendSmtpEmailBcc,
    "SendSmtpEmailCc": SendSmtpEmailCc,
    "SendSmtpEmailMessageVersions": SendSmtpEmailMessageVersions,
    "SendSmtpEmailReplyTo": SendSmtpEmailReplyTo,
    "SendSmtpEmailReplyTo1": SendSmtpEmailReplyTo1,
    "SendSmtpEmailSender": SendSmtpEmailSender,
    "SendSmtpEmailTo": SendSmtpEmailTo,
    "SendSmtpEmailTo1": SendSmtpEmailTo1,
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
    "UploadImageToGallery": UploadImageToGallery,
};
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
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
        this.apiKey = '';
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
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
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
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    getAccount(options = {}) {
        const localVarPath = this.basePath + '/account';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    createAttribute(attributeCategory, attributeName, createAttribute, options = {}) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling createAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling createAttribute.');
        }
        if (createAttribute === null || createAttribute === undefined) {
            throw new Error('Required parameter createAttribute was null or undefined when calling createAttribute.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteAttribute(attributeCategory, attributeName, options = {}) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling deleteAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling deleteAttribute.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getAttributes(options = {}) {
        const localVarPath = this.basePath + '/contacts/attributes';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateAttribute(attributeCategory, attributeName, updateAttribute, options = {}) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling updateAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling updateAttribute.');
        }
        if (updateAttribute === null || updateAttribute === undefined) {
            throw new Error('Required parameter updateAttribute was null or undefined when calling updateAttribute.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    addContactToList(listId, contactEmails, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/add'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling addContactToList.');
        }
        if (contactEmails === null || contactEmails === undefined) {
            throw new Error('Required parameter contactEmails was null or undefined when calling addContactToList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    createAttribute(attributeCategory, attributeName, createAttribute, options = {}) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling createAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling createAttribute.');
        }
        if (createAttribute === null || createAttribute === undefined) {
            throw new Error('Required parameter createAttribute was null or undefined when calling createAttribute.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    createContact(createContact, options = {}) {
        const localVarPath = this.basePath + '/contacts';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (createContact === null || createContact === undefined) {
            throw new Error('Required parameter createContact was null or undefined when calling createContact.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    createDoiContact(createDoiContact, options = {}) {
        const localVarPath = this.basePath + '/contacts/doubleOptinConfirmation';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (createDoiContact === null || createDoiContact === undefined) {
            throw new Error('Required parameter createDoiContact was null or undefined when calling createDoiContact.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createDoiContact, "CreateDoiContact")
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
    createFolder(createFolder, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (createFolder === null || createFolder === undefined) {
            throw new Error('Required parameter createFolder was null or undefined when calling createFolder.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    createList(createList, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (createList === null || createList === undefined) {
            throw new Error('Required parameter createList was null or undefined when calling createList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteAttribute(attributeCategory, attributeName, options = {}) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling deleteAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling deleteAttribute.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteContact(identifier, options = {}) {
        const localVarPath = this.basePath + '/contacts/{identifier}'
            .replace('{' + 'identifier' + '}', encodeURIComponent(String(identifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling deleteContact.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteFolder(folderId, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling deleteFolder.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteList(listId, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling deleteList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getAttributes(options = {}) {
        const localVarPath = this.basePath + '/contacts/attributes';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getContactInfo(identifier, options = {}) {
        const localVarPath = this.basePath + '/contacts/{identifier}'
            .replace('{' + 'identifier' + '}', encodeURIComponent(String(identifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling getContactInfo.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getContactStats(identifier, startDate, endDate, options = {}) {
        const localVarPath = this.basePath + '/contacts/{identifier}/campaignStats'
            .replace('{' + 'identifier' + '}', encodeURIComponent(String(identifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling getContactStats.');
        }
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getContacts(limit, offset, modifiedSince, sort, options = {}) {
        const localVarPath = this.basePath + '/contacts';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (modifiedSince !== undefined) {
            localVarQueryParameters['modifiedSince'] = ObjectSerializer.serialize(modifiedSince, "string");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getContactsFromList(listId, modifiedSince, limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling getContactsFromList.');
        }
        if (modifiedSince !== undefined) {
            localVarQueryParameters['modifiedSince'] = ObjectSerializer.serialize(modifiedSince, "string");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getFolder(folderId, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getFolder.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getFolderLists(folderId, limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}/lists'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getFolderLists.');
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getFolders(limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
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
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getList(listId, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling getList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getLists(limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    importContacts(requestContactImport, options = {}) {
        const localVarPath = this.basePath + '/contacts/import';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (requestContactImport === null || requestContactImport === undefined) {
            throw new Error('Required parameter requestContactImport was null or undefined when calling importContacts.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    removeContactFromList(listId, contactEmails, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/remove'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling removeContactFromList.');
        }
        if (contactEmails === null || contactEmails === undefined) {
            throw new Error('Required parameter contactEmails was null or undefined when calling removeContactFromList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    requestContactExport(requestContactExport, options = {}) {
        const localVarPath = this.basePath + '/contacts/export';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (requestContactExport === null || requestContactExport === undefined) {
            throw new Error('Required parameter requestContactExport was null or undefined when calling requestContactExport.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateAttribute(attributeCategory, attributeName, updateAttribute, options = {}) {
        const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
            .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
            .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling updateAttribute.');
        }
        if (attributeName === null || attributeName === undefined) {
            throw new Error('Required parameter attributeName was null or undefined when calling updateAttribute.');
        }
        if (updateAttribute === null || updateAttribute === undefined) {
            throw new Error('Required parameter updateAttribute was null or undefined when calling updateAttribute.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateContact(identifier, updateContact, options = {}) {
        const localVarPath = this.basePath + '/contacts/{identifier}'
            .replace('{' + 'identifier' + '}', encodeURIComponent(String(identifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling updateContact.');
        }
        if (updateContact === null || updateContact === undefined) {
            throw new Error('Required parameter updateContact was null or undefined when calling updateContact.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateFolder(folderId, updateFolder, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling updateFolder.');
        }
        if (updateFolder === null || updateFolder === undefined) {
            throw new Error('Required parameter updateFolder was null or undefined when calling updateFolder.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateList(listId, updateList, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling updateList.');
        }
        if (updateList === null || updateList === undefined) {
            throw new Error('Required parameter updateList was null or undefined when calling updateList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    createEmailCampaign(emailCampaigns, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (emailCampaigns === null || emailCampaigns === undefined) {
            throw new Error('Required parameter emailCampaigns was null or undefined when calling createEmailCampaign.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteEmailCampaign(campaignId, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling deleteEmailCampaign.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    emailExportRecipients(campaignId, recipientExport, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/exportRecipients'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling emailExportRecipients.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getAbTestCampaignResult(campaignId, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/abTestCampaignResult'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling getAbTestCampaignResult.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
                    body = ObjectSerializer.deserialize(body, "AbTestCampaignResult");
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
    getEmailCampaign(campaignId, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling getEmailCampaign.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getEmailCampaigns(type, status, startDate, endDate, limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "'classic' | 'trigger'");
        }
        if (status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "'suspended' | 'archive' | 'sent' | 'queued' | 'draft' | 'inProcess'");
        }
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getSharedTemplateUrl(campaignId, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/sharedUrl'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling getSharedTemplateUrl.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
                    body = ObjectSerializer.deserialize(body, "GetSharedTemplateUrl");
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
    sendEmailCampaignNow(campaignId, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/sendNow'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendEmailCampaignNow.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    sendReport(campaignId, sendReport, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/sendReport'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendReport.');
        }
        if (sendReport === null || sendReport === undefined) {
            throw new Error('Required parameter sendReport was null or undefined when calling sendReport.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    sendTestEmail(campaignId, emailTo, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/sendTest'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendTestEmail.');
        }
        if (emailTo === null || emailTo === undefined) {
            throw new Error('Required parameter emailTo was null or undefined when calling sendTestEmail.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateCampaignStatus(campaignId, status, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}/status'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateCampaignStatus.');
        }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling updateCampaignStatus.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateEmailCampaign(campaignId, emailCampaign, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateEmailCampaign.');
        }
        if (emailCampaign === null || emailCampaign === undefined) {
            throw new Error('Required parameter emailCampaign was null or undefined when calling updateEmailCampaign.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    uploadImageToGallery(uploadImage, options = {}) {
        const localVarPath = this.basePath + '/emailCampaigns/images';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (uploadImage === null || uploadImage === undefined) {
            throw new Error('Required parameter uploadImage was null or undefined when calling uploadImageToGallery.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(uploadImage, "UploadImageToGallery")
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
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    createFolder(createFolder, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (createFolder === null || createFolder === undefined) {
            throw new Error('Required parameter createFolder was null or undefined when calling createFolder.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteFolder(folderId, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling deleteFolder.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getFolder(folderId, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getFolder.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getFolderLists(folderId, limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}/lists'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getFolderLists.');
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getFolders(limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
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
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateFolder(folderId, updateFolder, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling updateFolder.');
        }
        if (updateFolder === null || updateFolder === undefined) {
            throw new Error('Required parameter updateFolder was null or undefined when calling updateFolder.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    addContactToList(listId, contactEmails, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/add'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling addContactToList.');
        }
        if (contactEmails === null || contactEmails === undefined) {
            throw new Error('Required parameter contactEmails was null or undefined when calling addContactToList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    createList(createList, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (createList === null || createList === undefined) {
            throw new Error('Required parameter createList was null or undefined when calling createList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteList(listId, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling deleteList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getContactsFromList(listId, modifiedSince, limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling getContactsFromList.');
        }
        if (modifiedSince !== undefined) {
            localVarQueryParameters['modifiedSince'] = ObjectSerializer.serialize(modifiedSince, "string");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getFolderLists(folderId, limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}/lists'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getFolderLists.');
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getList(listId, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling getList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getLists(limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    removeContactFromList(listId, contactEmails, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/remove'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling removeContactFromList.');
        }
        if (contactEmails === null || contactEmails === undefined) {
            throw new Error('Required parameter contactEmails was null or undefined when calling removeContactFromList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateList(listId, updateList, options = {}) {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling updateList.');
        }
        if (updateList === null || updateList === undefined) {
            throw new Error('Required parameter updateList was null or undefined when calling updateList.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    getProcess(processId, options = {}) {
        const localVarPath = this.basePath + '/processes/{processId}'
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (processId === null || processId === undefined) {
            throw new Error('Required parameter processId was null or undefined when calling getProcess.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getProcesses(limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/processes';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    addCredits(childIdentifier, addCredits, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}/credits/add'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling addCredits.');
        }
        if (addCredits === null || addCredits === undefined) {
            throw new Error('Required parameter addCredits was null or undefined when calling addCredits.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    associateIpToChild(childIdentifier, ip, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}/ips/associate'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling associateIpToChild.');
        }
        if (ip === null || ip === undefined) {
            throw new Error('Required parameter ip was null or undefined when calling associateIpToChild.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    createChildDomain(childIdentifier, addChildDomain, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}/domains'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling createChildDomain.');
        }
        if (addChildDomain === null || addChildDomain === undefined) {
            throw new Error('Required parameter addChildDomain was null or undefined when calling createChildDomain.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    createResellerChild(resellerChild, options = {}) {
        const localVarPath = this.basePath + '/reseller/children';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteChildDomain(childIdentifier, domainName, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}/domains/{domainName}'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)))
            .replace('{' + 'domainName' + '}', encodeURIComponent(String(domainName)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling deleteChildDomain.');
        }
        if (domainName === null || domainName === undefined) {
            throw new Error('Required parameter domainName was null or undefined when calling deleteChildDomain.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteResellerChild(childIdentifier, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling deleteResellerChild.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    dissociateIpFromChild(childIdentifier, ip, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}/ips/dissociate'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling dissociateIpFromChild.');
        }
        if (ip === null || ip === undefined) {
            throw new Error('Required parameter ip was null or undefined when calling dissociateIpFromChild.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getChildAccountCreationStatus(childIdentifier, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}/accountCreationStatus'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling getChildAccountCreationStatus.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
                    body = ObjectSerializer.deserialize(body, "GetChildAccountCreationStatus");
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
    getChildDomains(childIdentifier, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}/domains'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling getChildDomains.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getChildInfo(childIdentifier, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling getChildInfo.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getResellerChilds(limit, offset, options = {}) {
        const localVarPath = this.basePath + '/reseller/children';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getSsoToken(childIdentifier, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}/auth'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling getSsoToken.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    removeCredits(childIdentifier, removeCredits, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}/credits/remove'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling removeCredits.');
        }
        if (removeCredits === null || removeCredits === undefined) {
            throw new Error('Required parameter removeCredits was null or undefined when calling removeCredits.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateChildAccountStatus(childIdentifier, updateChildAccountStatus, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}/accountStatus'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling updateChildAccountStatus.');
        }
        if (updateChildAccountStatus === null || updateChildAccountStatus === undefined) {
            throw new Error('Required parameter updateChildAccountStatus was null or undefined when calling updateChildAccountStatus.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateChildDomain(childIdentifier, domainName, updateChildDomain, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}/domains/{domainName}'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)))
            .replace('{' + 'domainName' + '}', encodeURIComponent(String(domainName)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling updateChildDomain.');
        }
        if (domainName === null || domainName === undefined) {
            throw new Error('Required parameter domainName was null or undefined when calling updateChildDomain.');
        }
        if (updateChildDomain === null || updateChildDomain === undefined) {
            throw new Error('Required parameter updateChildDomain was null or undefined when calling updateChildDomain.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateResellerChild(childIdentifier, resellerChild, options = {}) {
        const localVarPath = this.basePath + '/reseller/children/{childIdentifier}'
            .replace('{' + 'childIdentifier' + '}', encodeURIComponent(String(childIdentifier)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (childIdentifier === null || childIdentifier === undefined) {
            throw new Error('Required parameter childIdentifier was null or undefined when calling updateResellerChild.');
        }
        if (resellerChild === null || resellerChild === undefined) {
            throw new Error('Required parameter resellerChild was null or undefined when calling updateResellerChild.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    createSmsCampaign(createSmsCampaign, options = {}) {
        const localVarPath = this.basePath + '/smsCampaigns';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (createSmsCampaign === null || createSmsCampaign === undefined) {
            throw new Error('Required parameter createSmsCampaign was null or undefined when calling createSmsCampaign.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteSmsCampaign(campaignId, options = {}) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling deleteSmsCampaign.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getSmsCampaign(campaignId, options = {}) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling getSmsCampaign.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getSmsCampaigns(status, startDate, endDate, limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/smsCampaigns';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "'suspended' | 'archive' | 'sent' | 'queued' | 'draft' | 'inProcess'");
        }
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    requestSmsRecipientExport(campaignId, recipientExport, options = {}) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}/exportRecipients'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling requestSmsRecipientExport.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    sendSmsCampaignNow(campaignId, options = {}) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}/sendNow'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendSmsCampaignNow.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    sendSmsReport(campaignId, sendReport, options = {}) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}/sendReport'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendSmsReport.');
        }
        if (sendReport === null || sendReport === undefined) {
            throw new Error('Required parameter sendReport was null or undefined when calling sendSmsReport.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    sendTestSms(campaignId, phoneNumber, options = {}) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}/sendTest'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling sendTestSms.');
        }
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new Error('Required parameter phoneNumber was null or undefined when calling sendTestSms.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateSmsCampaign(campaignId, updateSmsCampaign, options = {}) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateSmsCampaign.');
        }
        if (updateSmsCampaign === null || updateSmsCampaign === undefined) {
            throw new Error('Required parameter updateSmsCampaign was null or undefined when calling updateSmsCampaign.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateSmsCampaignStatus(campaignId, status, options = {}) {
        const localVarPath = this.basePath + '/smsCampaigns/{campaignId}/status'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateSmsCampaignStatus.');
        }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling updateSmsCampaignStatus.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
var SendersApiApiKeys;
(function (SendersApiApiKeys) {
    SendersApiApiKeys[SendersApiApiKeys["apiKey"] = 0] = "apiKey";
    SendersApiApiKeys[SendersApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(SendersApiApiKeys = exports.SendersApiApiKeys || (exports.SendersApiApiKeys = {}));
class SendersApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    createSender(sender, options = {}) {
        const localVarPath = this.basePath + '/senders';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteSender(senderId, options = {}) {
        const localVarPath = this.basePath + '/senders/{senderId}'
            .replace('{' + 'senderId' + '}', encodeURIComponent(String(senderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (senderId === null || senderId === undefined) {
            throw new Error('Required parameter senderId was null or undefined when calling deleteSender.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getIps(options = {}) {
        const localVarPath = this.basePath + '/senders/ips';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getIpsFromSender(senderId, options = {}) {
        const localVarPath = this.basePath + '/senders/{senderId}/ips'
            .replace('{' + 'senderId' + '}', encodeURIComponent(String(senderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (senderId === null || senderId === undefined) {
            throw new Error('Required parameter senderId was null or undefined when calling getIpsFromSender.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getSenders(ip, domain, options = {}) {
        const localVarPath = this.basePath + '/senders';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (ip !== undefined) {
            localVarQueryParameters['ip'] = ObjectSerializer.serialize(ip, "string");
        }
        if (domain !== undefined) {
            localVarQueryParameters['domain'] = ObjectSerializer.serialize(domain, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateSender(senderId, sender, options = {}) {
        const localVarPath = this.basePath + '/senders/{senderId}'
            .replace('{' + 'senderId' + '}', encodeURIComponent(String(senderId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (senderId === null || senderId === undefined) {
            throw new Error('Required parameter senderId was null or undefined when calling updateSender.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
var TransactionalEmailsApiApiKeys;
(function (TransactionalEmailsApiApiKeys) {
    TransactionalEmailsApiApiKeys[TransactionalEmailsApiApiKeys["apiKey"] = 0] = "apiKey";
    TransactionalEmailsApiApiKeys[TransactionalEmailsApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(TransactionalEmailsApiApiKeys = exports.TransactionalEmailsApiApiKeys || (exports.TransactionalEmailsApiApiKeys = {}));
class TransactionalEmailsApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
        this.authentications[TransactionalEmailsApiApiKeys[key]].apiKey = value;
    }
    blockNewDomain(blockDomain, options = {}) {
        const localVarPath = this.basePath + '/smtp/blockedDomains';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (blockDomain === null || blockDomain === undefined) {
            throw new Error('Required parameter blockDomain was null or undefined when calling blockNewDomain.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(blockDomain, "BlockDomain")
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
    createSmtpTemplate(smtpTemplate, options = {}) {
        const localVarPath = this.basePath + '/smtp/templates';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (smtpTemplate === null || smtpTemplate === undefined) {
            throw new Error('Required parameter smtpTemplate was null or undefined when calling createSmtpTemplate.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteBlockedDomain(domain, options = {}) {
        const localVarPath = this.basePath + '/smtp/blockedDomains/{domain}'
            .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling deleteBlockedDomain.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteHardbounces(deleteHardbounces, options = {}) {
        const localVarPath = this.basePath + '/smtp/deleteHardbounces';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteSmtpTemplate(templateId, options = {}) {
        const localVarPath = this.basePath + '/smtp/templates/{templateId}'
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling deleteSmtpTemplate.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getAggregatedSmtpReport(startDate, endDate, days, tag, options = {}) {
        const localVarPath = this.basePath + '/smtp/statistics/aggregatedReport';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
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
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getBlockedDomains(options = {}) {
        const localVarPath = this.basePath + '/smtp/blockedDomains';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
                    body = ObjectSerializer.deserialize(body, "GetBlockedDomains");
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
    getEmailEventReport(limit, offset, startDate, endDate, days, email, event, tags, messageId, templateId, sort, options = {}) {
        const localVarPath = this.basePath + '/smtp/statistics/events';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
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
            localVarQueryParameters['event'] = ObjectSerializer.serialize(event, "'bounces' | 'hardBounces' | 'softBounces' | 'delivered' | 'spam' | 'requests' | 'opened' | 'clicks' | 'invalid' | 'deferred' | 'blocked' | 'unsubscribed' | 'error'");
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
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getSmtpReport(limit, offset, startDate, endDate, days, tag, sort, options = {}) {
        const localVarPath = this.basePath + '/smtp/statistics/reports';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
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
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getSmtpTemplate(templateId, options = {}) {
        const localVarPath = this.basePath + '/smtp/templates/{templateId}'
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling getSmtpTemplate.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getSmtpTemplates(templateStatus, limit, offset, sort, options = {}) {
        const localVarPath = this.basePath + '/smtp/templates';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (templateStatus !== undefined) {
            localVarQueryParameters['templateStatus'] = ObjectSerializer.serialize(templateStatus, "boolean");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getTransacBlockedContacts(startDate, endDate, limit, offset, senders, sort, options = {}) {
        const localVarPath = this.basePath + '/smtp/blockedContacts';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }
        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (senders !== undefined) {
            localVarQueryParameters['senders'] = ObjectSerializer.serialize(senders, "Array<string>");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
                    body = ObjectSerializer.deserialize(body, "GetTransacBlockedContacts");
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
    getTransacEmailContent(uuid, options = {}) {
        const localVarPath = this.basePath + '/smtp/emails/{uuid}'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getTransacEmailContent.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getTransacEmailsList(email, templateId, messageId, startDate, endDate, sort, limit, offset, options = {}) {
        const localVarPath = this.basePath + '/smtp/emails';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
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
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    sendTestTemplate(templateId, sendTestEmail, options = {}) {
        const localVarPath = this.basePath + '/smtp/templates/{templateId}/sendTest'
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling sendTestTemplate.');
        }
        if (sendTestEmail === null || sendTestEmail === undefined) {
            throw new Error('Required parameter sendTestEmail was null or undefined when calling sendTestTemplate.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    sendTransacEmail(sendSmtpEmail, options = {}) {
        const localVarPath = this.basePath + '/smtp/email';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (sendSmtpEmail === null || sendSmtpEmail === undefined) {
            throw new Error('Required parameter sendSmtpEmail was null or undefined when calling sendTransacEmail.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    smtpBlockedContactsEmailDelete(email, options = {}) {
        const localVarPath = this.basePath + '/smtp/blockedContacts/{email}'
            .replace('{' + 'email' + '}', encodeURIComponent(String(email)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling smtpBlockedContactsEmailDelete.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    smtpLogMessageIdDelete(messageId, options = {}) {
        const localVarPath = this.basePath + '/smtp/log/{messageId}'
            .replace('{' + 'messageId' + '}', encodeURIComponent(String(messageId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (messageId === null || messageId === undefined) {
            throw new Error('Required parameter messageId was null or undefined when calling smtpLogMessageIdDelete.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateSmtpTemplate(templateId, smtpTemplate, options = {}) {
        const localVarPath = this.basePath + '/smtp/templates/{templateId}'
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling updateSmtpTemplate.');
        }
        if (smtpTemplate === null || smtpTemplate === undefined) {
            throw new Error('Required parameter smtpTemplate was null or undefined when calling updateSmtpTemplate.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
exports.TransactionalEmailsApi = TransactionalEmailsApi;
var TransactionalSMSApiApiKeys;
(function (TransactionalSMSApiApiKeys) {
    TransactionalSMSApiApiKeys[TransactionalSMSApiApiKeys["apiKey"] = 0] = "apiKey";
    TransactionalSMSApiApiKeys[TransactionalSMSApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(TransactionalSMSApiApiKeys = exports.TransactionalSMSApiApiKeys || (exports.TransactionalSMSApiApiKeys = {}));
class TransactionalSMSApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    getSmsEvents(limit, startDate, endDate, offset, days, phoneNumber, event, tags, sort, options = {}) {
        const localVarPath = this.basePath + '/transactionalSMS/statistics/events';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
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
            localVarQueryParameters['event'] = ObjectSerializer.serialize(event, "'bounces' | 'hardBounces' | 'softBounces' | 'delivered' | 'sent' | 'accepted' | 'unsubscription' | 'replies' | 'blocked'");
        }
        if (tags !== undefined) {
            localVarQueryParameters['tags'] = ObjectSerializer.serialize(tags, "string");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getTransacAggregatedSmsReport(startDate, endDate, days, tag, options = {}) {
        const localVarPath = this.basePath + '/transactionalSMS/statistics/aggregatedReport';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
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
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getTransacSmsReport(startDate, endDate, days, tag, sort, options = {}) {
        const localVarPath = this.basePath + '/transactionalSMS/statistics/reports';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
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
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    sendTransacSms(sendTransacSms, options = {}) {
        const localVarPath = this.basePath + '/transactionalSMS/sms';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (sendTransacSms === null || sendTransacSms === undefined) {
            throw new Error('Required parameter sendTransacSms was null or undefined when calling sendTransacSms.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
        this.defaultHeaders = { 'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node' };
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
    createWebhook(createWebhook, options = {}) {
        const localVarPath = this.basePath + '/webhooks';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (createWebhook === null || createWebhook === undefined) {
            throw new Error('Required parameter createWebhook was null or undefined when calling createWebhook.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    deleteWebhook(webhookId, options = {}) {
        const localVarPath = this.basePath + '/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling deleteWebhook.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getWebhook(webhookId, options = {}) {
        const localVarPath = this.basePath + '/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling getWebhook.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    getWebhooks(type, sort, options = {}) {
        const localVarPath = this.basePath + '/webhooks';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "'marketing' | 'transactional'");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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
    updateWebhook(webhookId, updateWebhook, options = {}) {
        const localVarPath = this.basePath + '/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        const localVarFormParams = {};
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling updateWebhook.');
        }
        if (updateWebhook === null || updateWebhook === undefined) {
            throw new Error('Required parameter updateWebhook was null or undefined when calling updateWebhook.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        const localVarUseFormData = false;
        const localVarRequestOptions = {
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