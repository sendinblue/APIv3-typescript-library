"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./abTestCampaignResult"));
__export(require("./abTestCampaignResultClickedLinks"));
__export(require("./abTestCampaignResultStatistics"));
__export(require("./abTestVersionStats"));
__export(require("./addChildDomain"));
__export(require("./addContactToList"));
__export(require("./addCredits"));
__export(require("./blockDomain"));
__export(require("./createAttribute"));
__export(require("./createAttributeEnumeration"));
__export(require("./createChild"));
__export(require("./createContact"));
__export(require("./createDoiContact"));
__export(require("./createEmailCampaign"));
__export(require("./createEmailCampaignRecipients"));
__export(require("./createEmailCampaignSender"));
__export(require("./createList"));
__export(require("./createModel"));
__export(require("./createReseller"));
__export(require("./createSender"));
__export(require("./createSenderIps"));
__export(require("./createSenderModel"));
__export(require("./createSmsCampaign"));
__export(require("./createSmsCampaignRecipients"));
__export(require("./createSmtpEmail"));
__export(require("./createSmtpTemplate"));
__export(require("./createSmtpTemplateSender"));
__export(require("./createUpdateContactModel"));
__export(require("./createUpdateFolder"));
__export(require("./createWebhook"));
__export(require("./createdProcessId"));
__export(require("./deleteHardbounces"));
__export(require("./emailExportRecipients"));
__export(require("./errorModel"));
__export(require("./getAccount"));
__export(require("./getAccountAllOf"));
__export(require("./getAccountAllOfMarketingAutomation"));
__export(require("./getAccountAllOfPlan"));
__export(require("./getAccountAllOfRelay"));
__export(require("./getAccountAllOfRelayData"));
__export(require("./getAggregatedReport"));
__export(require("./getAttributes"));
__export(require("./getAttributesAttributes"));
__export(require("./getAttributesEnumeration"));
__export(require("./getBlockedDomains"));
__export(require("./getCampaignOverview"));
__export(require("./getCampaignRecipients"));
__export(require("./getCampaignStats"));
__export(require("./getChildAccountCreationStatus"));
__export(require("./getChildDomain"));
__export(require("./getChildInfo"));
__export(require("./getChildInfoAllOf"));
__export(require("./getChildInfoAllOfApiKeys"));
__export(require("./getChildInfoAllOfApiKeysV2"));
__export(require("./getChildInfoAllOfApiKeysV3"));
__export(require("./getChildInfoAllOfCredits"));
__export(require("./getChildInfoAllOfStatistics"));
__export(require("./getChildrenList"));
__export(require("./getClient"));
__export(require("./getContactCampaignStats"));
__export(require("./getContactCampaignStatsClicked"));
__export(require("./getContactCampaignStatsOpened"));
__export(require("./getContactCampaignStatsTransacAttributes"));
__export(require("./getContactCampaignStatsUnsubscriptions"));
__export(require("./getContactDetails"));
__export(require("./getContacts"));
__export(require("./getDeviceBrowserStats"));
__export(require("./getEmailCampaign"));
__export(require("./getEmailCampaignAllOf"));
__export(require("./getEmailCampaigns"));
__export(require("./getEmailEventReport"));
__export(require("./getEmailEventReportEvents"));
__export(require("./getExtendedCampaignOverview"));
__export(require("./getExtendedCampaignOverviewAllOf"));
__export(require("./getExtendedCampaignOverviewAllOfSender"));
__export(require("./getExtendedCampaignStats"));
__export(require("./getExtendedClient"));
__export(require("./getExtendedClientAllOf"));
__export(require("./getExtendedClientAllOfAddress"));
__export(require("./getExtendedContactDetails"));
__export(require("./getExtendedContactDetailsAllOf"));
__export(require("./getExtendedContactDetailsAllOfStatistics"));
__export(require("./getExtendedContactDetailsAllOfStatisticsClicked"));
__export(require("./getExtendedContactDetailsAllOfStatisticsLinks"));
__export(require("./getExtendedContactDetailsAllOfStatisticsMessagesSent"));
__export(require("./getExtendedContactDetailsAllOfStatisticsOpened"));
__export(require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptions"));
__export(require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription"));
__export(require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription"));
__export(require("./getExtendedList"));
__export(require("./getExtendedListAllOf"));
__export(require("./getExtendedListAllOfCampaignStats"));
__export(require("./getFolder"));
__export(require("./getFolderLists"));
__export(require("./getFolders"));
__export(require("./getIp"));
__export(require("./getIpFromSender"));
__export(require("./getIps"));
__export(require("./getIpsFromSender"));
__export(require("./getList"));
__export(require("./getLists"));
__export(require("./getProcess"));
__export(require("./getProcesses"));
__export(require("./getReports"));
__export(require("./getReportsReports"));
__export(require("./getSendersList"));
__export(require("./getSendersListIps"));
__export(require("./getSendersListSenders"));
__export(require("./getSharedTemplateUrl"));
__export(require("./getSmsCampaign"));
__export(require("./getSmsCampaignAllOf"));
__export(require("./getSmsCampaignOverview"));
__export(require("./getSmsCampaignStats"));
__export(require("./getSmsCampaigns"));
__export(require("./getSmsEventReport"));
__export(require("./getSmsEventReportEvents"));
__export(require("./getSmtpTemplateOverview"));
__export(require("./getSmtpTemplateOverviewSender"));
__export(require("./getSmtpTemplates"));
__export(require("./getSsoToken"));
__export(require("./getStatsByDevice"));
__export(require("./getTransacAggregatedSmsReport"));
__export(require("./getTransacBlockedContacts"));
__export(require("./getTransacBlockedContactsContacts"));
__export(require("./getTransacBlockedContactsReason"));
__export(require("./getTransacEmailContent"));
__export(require("./getTransacEmailContentEvents"));
__export(require("./getTransacEmailsList"));
__export(require("./getTransacEmailsListTransactionalEmails"));
__export(require("./getTransacSmsReport"));
__export(require("./getTransacSmsReportReports"));
__export(require("./getWebhook"));
__export(require("./getWebhooks"));
__export(require("./manageIp"));
__export(require("./postContactInfo"));
__export(require("./postContactInfoContacts"));
__export(require("./postSendFailed"));
__export(require("./postSendSmsTestFailed"));
__export(require("./remainingCreditModel"));
__export(require("./remainingCreditModelChild"));
__export(require("./remainingCreditModelReseller"));
__export(require("./removeContactFromList"));
__export(require("./removeCredits"));
__export(require("./requestContactExport"));
__export(require("./requestContactExportCustomContactFilter"));
__export(require("./requestContactImport"));
__export(require("./requestContactImportNewList"));
__export(require("./requestSmsRecipientExport"));
__export(require("./sendEmail"));
__export(require("./sendEmailAttachment"));
__export(require("./sendReport"));
__export(require("./sendReportEmail"));
__export(require("./sendSms"));
__export(require("./sendSmtpEmail"));
__export(require("./sendSmtpEmailAttachment"));
__export(require("./sendSmtpEmailBcc"));
__export(require("./sendSmtpEmailCc"));
__export(require("./sendSmtpEmailMessageVersions"));
__export(require("./sendSmtpEmailReplyTo"));
__export(require("./sendSmtpEmailReplyTo1"));
__export(require("./sendSmtpEmailSender"));
__export(require("./sendSmtpEmailTo"));
__export(require("./sendSmtpEmailTo1"));
__export(require("./sendTemplateEmail"));
__export(require("./sendTestEmail"));
__export(require("./sendTestSms"));
__export(require("./sendTransacSms"));
__export(require("./updateAttribute"));
__export(require("./updateAttributeEnumeration"));
__export(require("./updateCampaignStatus"));
__export(require("./updateChild"));
__export(require("./updateChildAccountStatus"));
__export(require("./updateChildDomain"));
__export(require("./updateContact"));
__export(require("./updateEmailCampaign"));
__export(require("./updateEmailCampaignRecipients"));
__export(require("./updateEmailCampaignSender"));
__export(require("./updateList"));
__export(require("./updateSender"));
__export(require("./updateSmsCampaign"));
__export(require("./updateSmtpTemplate"));
__export(require("./updateSmtpTemplateSender"));
__export(require("./updateWebhook"));
__export(require("./uploadImageToGallery"));
const abTestCampaignResult_1 = require("./abTestCampaignResult");
const abTestCampaignResultClickedLinks_1 = require("./abTestCampaignResultClickedLinks");
const abTestCampaignResultStatistics_1 = require("./abTestCampaignResultStatistics");
const abTestVersionStats_1 = require("./abTestVersionStats");
const addChildDomain_1 = require("./addChildDomain");
const addContactToList_1 = require("./addContactToList");
const addCredits_1 = require("./addCredits");
const blockDomain_1 = require("./blockDomain");
const createAttribute_1 = require("./createAttribute");
const createAttributeEnumeration_1 = require("./createAttributeEnumeration");
const createChild_1 = require("./createChild");
const createContact_1 = require("./createContact");
const createDoiContact_1 = require("./createDoiContact");
const createEmailCampaign_1 = require("./createEmailCampaign");
const createEmailCampaignRecipients_1 = require("./createEmailCampaignRecipients");
const createEmailCampaignSender_1 = require("./createEmailCampaignSender");
const createList_1 = require("./createList");
const createModel_1 = require("./createModel");
const createReseller_1 = require("./createReseller");
const createSender_1 = require("./createSender");
const createSenderIps_1 = require("./createSenderIps");
const createSenderModel_1 = require("./createSenderModel");
const createSmsCampaign_1 = require("./createSmsCampaign");
const createSmsCampaignRecipients_1 = require("./createSmsCampaignRecipients");
const createSmtpEmail_1 = require("./createSmtpEmail");
const createSmtpTemplate_1 = require("./createSmtpTemplate");
const createSmtpTemplateSender_1 = require("./createSmtpTemplateSender");
const createUpdateContactModel_1 = require("./createUpdateContactModel");
const createUpdateFolder_1 = require("./createUpdateFolder");
const createWebhook_1 = require("./createWebhook");
const createdProcessId_1 = require("./createdProcessId");
const deleteHardbounces_1 = require("./deleteHardbounces");
const emailExportRecipients_1 = require("./emailExportRecipients");
const errorModel_1 = require("./errorModel");
const getAccount_1 = require("./getAccount");
const getAccountAllOf_1 = require("./getAccountAllOf");
const getAccountAllOfMarketingAutomation_1 = require("./getAccountAllOfMarketingAutomation");
const getAccountAllOfPlan_1 = require("./getAccountAllOfPlan");
const getAccountAllOfRelay_1 = require("./getAccountAllOfRelay");
const getAccountAllOfRelayData_1 = require("./getAccountAllOfRelayData");
const getAggregatedReport_1 = require("./getAggregatedReport");
const getAttributes_1 = require("./getAttributes");
const getAttributesAttributes_1 = require("./getAttributesAttributes");
const getAttributesEnumeration_1 = require("./getAttributesEnumeration");
const getBlockedDomains_1 = require("./getBlockedDomains");
const getCampaignOverview_1 = require("./getCampaignOverview");
const getCampaignRecipients_1 = require("./getCampaignRecipients");
const getCampaignStats_1 = require("./getCampaignStats");
const getChildAccountCreationStatus_1 = require("./getChildAccountCreationStatus");
const getChildDomain_1 = require("./getChildDomain");
const getChildInfo_1 = require("./getChildInfo");
const getChildInfoAllOf_1 = require("./getChildInfoAllOf");
const getChildInfoAllOfApiKeys_1 = require("./getChildInfoAllOfApiKeys");
const getChildInfoAllOfApiKeysV2_1 = require("./getChildInfoAllOfApiKeysV2");
const getChildInfoAllOfApiKeysV3_1 = require("./getChildInfoAllOfApiKeysV3");
const getChildInfoAllOfCredits_1 = require("./getChildInfoAllOfCredits");
const getChildInfoAllOfStatistics_1 = require("./getChildInfoAllOfStatistics");
const getChildrenList_1 = require("./getChildrenList");
const getClient_1 = require("./getClient");
const getContactCampaignStats_1 = require("./getContactCampaignStats");
const getContactCampaignStatsClicked_1 = require("./getContactCampaignStatsClicked");
const getContactCampaignStatsOpened_1 = require("./getContactCampaignStatsOpened");
const getContactCampaignStatsTransacAttributes_1 = require("./getContactCampaignStatsTransacAttributes");
const getContactCampaignStatsUnsubscriptions_1 = require("./getContactCampaignStatsUnsubscriptions");
const getContactDetails_1 = require("./getContactDetails");
const getContacts_1 = require("./getContacts");
const getDeviceBrowserStats_1 = require("./getDeviceBrowserStats");
const getEmailCampaign_1 = require("./getEmailCampaign");
const getEmailCampaignAllOf_1 = require("./getEmailCampaignAllOf");
const getEmailCampaigns_1 = require("./getEmailCampaigns");
const getEmailEventReport_1 = require("./getEmailEventReport");
const getEmailEventReportEvents_1 = require("./getEmailEventReportEvents");
const getExtendedCampaignOverview_1 = require("./getExtendedCampaignOverview");
const getExtendedCampaignOverviewAllOf_1 = require("./getExtendedCampaignOverviewAllOf");
const getExtendedCampaignOverviewAllOfSender_1 = require("./getExtendedCampaignOverviewAllOfSender");
const getExtendedCampaignStats_1 = require("./getExtendedCampaignStats");
const getExtendedClient_1 = require("./getExtendedClient");
const getExtendedClientAllOf_1 = require("./getExtendedClientAllOf");
const getExtendedClientAllOfAddress_1 = require("./getExtendedClientAllOfAddress");
const getExtendedContactDetails_1 = require("./getExtendedContactDetails");
const getExtendedContactDetailsAllOf_1 = require("./getExtendedContactDetailsAllOf");
const getExtendedContactDetailsAllOfStatistics_1 = require("./getExtendedContactDetailsAllOfStatistics");
const getExtendedContactDetailsAllOfStatisticsClicked_1 = require("./getExtendedContactDetailsAllOfStatisticsClicked");
const getExtendedContactDetailsAllOfStatisticsLinks_1 = require("./getExtendedContactDetailsAllOfStatisticsLinks");
const getExtendedContactDetailsAllOfStatisticsMessagesSent_1 = require("./getExtendedContactDetailsAllOfStatisticsMessagesSent");
const getExtendedContactDetailsAllOfStatisticsOpened_1 = require("./getExtendedContactDetailsAllOfStatisticsOpened");
const getExtendedContactDetailsAllOfStatisticsUnsubscriptions_1 = require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptions");
const getExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription_1 = require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription");
const getExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription_1 = require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription");
const getExtendedList_1 = require("./getExtendedList");
const getExtendedListAllOf_1 = require("./getExtendedListAllOf");
const getExtendedListAllOfCampaignStats_1 = require("./getExtendedListAllOfCampaignStats");
const getFolder_1 = require("./getFolder");
const getFolderLists_1 = require("./getFolderLists");
const getFolders_1 = require("./getFolders");
const getIp_1 = require("./getIp");
const getIpFromSender_1 = require("./getIpFromSender");
const getIps_1 = require("./getIps");
const getIpsFromSender_1 = require("./getIpsFromSender");
const getList_1 = require("./getList");
const getLists_1 = require("./getLists");
const getProcess_1 = require("./getProcess");
const getProcesses_1 = require("./getProcesses");
const getReports_1 = require("./getReports");
const getReportsReports_1 = require("./getReportsReports");
const getSendersList_1 = require("./getSendersList");
const getSendersListIps_1 = require("./getSendersListIps");
const getSendersListSenders_1 = require("./getSendersListSenders");
const getSharedTemplateUrl_1 = require("./getSharedTemplateUrl");
const getSmsCampaign_1 = require("./getSmsCampaign");
const getSmsCampaignAllOf_1 = require("./getSmsCampaignAllOf");
const getSmsCampaignOverview_1 = require("./getSmsCampaignOverview");
const getSmsCampaignStats_1 = require("./getSmsCampaignStats");
const getSmsCampaigns_1 = require("./getSmsCampaigns");
const getSmsEventReport_1 = require("./getSmsEventReport");
const getSmsEventReportEvents_1 = require("./getSmsEventReportEvents");
const getSmtpTemplateOverview_1 = require("./getSmtpTemplateOverview");
const getSmtpTemplateOverviewSender_1 = require("./getSmtpTemplateOverviewSender");
const getSmtpTemplates_1 = require("./getSmtpTemplates");
const getSsoToken_1 = require("./getSsoToken");
const getStatsByDevice_1 = require("./getStatsByDevice");
const getTransacAggregatedSmsReport_1 = require("./getTransacAggregatedSmsReport");
const getTransacBlockedContacts_1 = require("./getTransacBlockedContacts");
const getTransacBlockedContactsContacts_1 = require("./getTransacBlockedContactsContacts");
const getTransacBlockedContactsReason_1 = require("./getTransacBlockedContactsReason");
const getTransacEmailContent_1 = require("./getTransacEmailContent");
const getTransacEmailContentEvents_1 = require("./getTransacEmailContentEvents");
const getTransacEmailsList_1 = require("./getTransacEmailsList");
const getTransacEmailsListTransactionalEmails_1 = require("./getTransacEmailsListTransactionalEmails");
const getTransacSmsReport_1 = require("./getTransacSmsReport");
const getTransacSmsReportReports_1 = require("./getTransacSmsReportReports");
const getWebhook_1 = require("./getWebhook");
const getWebhooks_1 = require("./getWebhooks");
const manageIp_1 = require("./manageIp");
const postContactInfo_1 = require("./postContactInfo");
const postContactInfoContacts_1 = require("./postContactInfoContacts");
const postSendFailed_1 = require("./postSendFailed");
const postSendSmsTestFailed_1 = require("./postSendSmsTestFailed");
const remainingCreditModel_1 = require("./remainingCreditModel");
const remainingCreditModelChild_1 = require("./remainingCreditModelChild");
const remainingCreditModelReseller_1 = require("./remainingCreditModelReseller");
const removeContactFromList_1 = require("./removeContactFromList");
const removeCredits_1 = require("./removeCredits");
const requestContactExport_1 = require("./requestContactExport");
const requestContactExportCustomContactFilter_1 = require("./requestContactExportCustomContactFilter");
const requestContactImport_1 = require("./requestContactImport");
const requestContactImportNewList_1 = require("./requestContactImportNewList");
const requestSmsRecipientExport_1 = require("./requestSmsRecipientExport");
const sendEmail_1 = require("./sendEmail");
const sendEmailAttachment_1 = require("./sendEmailAttachment");
const sendReport_1 = require("./sendReport");
const sendReportEmail_1 = require("./sendReportEmail");
const sendSms_1 = require("./sendSms");
const sendSmtpEmail_1 = require("./sendSmtpEmail");
const sendSmtpEmailAttachment_1 = require("./sendSmtpEmailAttachment");
const sendSmtpEmailBcc_1 = require("./sendSmtpEmailBcc");
const sendSmtpEmailCc_1 = require("./sendSmtpEmailCc");
const sendSmtpEmailMessageVersions_1 = require("./sendSmtpEmailMessageVersions");
const sendSmtpEmailReplyTo_1 = require("./sendSmtpEmailReplyTo");
const sendSmtpEmailReplyTo1_1 = require("./sendSmtpEmailReplyTo1");
const sendSmtpEmailSender_1 = require("./sendSmtpEmailSender");
const sendSmtpEmailTo_1 = require("./sendSmtpEmailTo");
const sendSmtpEmailTo1_1 = require("./sendSmtpEmailTo1");
const sendTemplateEmail_1 = require("./sendTemplateEmail");
const sendTestEmail_1 = require("./sendTestEmail");
const sendTestSms_1 = require("./sendTestSms");
const sendTransacSms_1 = require("./sendTransacSms");
const updateAttribute_1 = require("./updateAttribute");
const updateAttributeEnumeration_1 = require("./updateAttributeEnumeration");
const updateCampaignStatus_1 = require("./updateCampaignStatus");
const updateChild_1 = require("./updateChild");
const updateChildAccountStatus_1 = require("./updateChildAccountStatus");
const updateChildDomain_1 = require("./updateChildDomain");
const updateContact_1 = require("./updateContact");
const updateEmailCampaign_1 = require("./updateEmailCampaign");
const updateEmailCampaignRecipients_1 = require("./updateEmailCampaignRecipients");
const updateEmailCampaignSender_1 = require("./updateEmailCampaignSender");
const updateList_1 = require("./updateList");
const updateSender_1 = require("./updateSender");
const updateSmsCampaign_1 = require("./updateSmsCampaign");
const updateSmtpTemplate_1 = require("./updateSmtpTemplate");
const updateSmtpTemplateSender_1 = require("./updateSmtpTemplateSender");
const updateWebhook_1 = require("./updateWebhook");
const uploadImageToGallery_1 = require("./uploadImageToGallery");
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
const enumsMap = {
    "AbTestCampaignResult.WinningVersionEnum": abTestCampaignResult_1.AbTestCampaignResult.WinningVersionEnum,
    "AbTestCampaignResult.WinningCriteriaEnum": abTestCampaignResult_1.AbTestCampaignResult.WinningCriteriaEnum,
    "CreateAttribute.TypeEnum": createAttribute_1.CreateAttribute.TypeEnum,
    "CreateChild.LanguageEnum": createChild_1.CreateChild.LanguageEnum,
    "CreateEmailCampaign.WinnerCriteriaEnum": createEmailCampaign_1.CreateEmailCampaign.WinnerCriteriaEnum,
    "CreateWebhook.EventsEnum": createWebhook_1.CreateWebhook.EventsEnum,
    "CreateWebhook.TypeEnum": createWebhook_1.CreateWebhook.TypeEnum,
    "EmailExportRecipients.RecipientsTypeEnum": emailExportRecipients_1.EmailExportRecipients.RecipientsTypeEnum,
    "ErrorModel.CodeEnum": errorModel_1.ErrorModel.CodeEnum,
    "GetAccountAllOfPlan.TypeEnum": getAccountAllOfPlan_1.GetAccountAllOfPlan.TypeEnum,
    "GetAccountAllOfPlan.CreditsTypeEnum": getAccountAllOfPlan_1.GetAccountAllOfPlan.CreditsTypeEnum,
    "GetAttributesAttributes.CategoryEnum": getAttributesAttributes_1.GetAttributesAttributes.CategoryEnum,
    "GetAttributesAttributes.TypeEnum": getAttributesAttributes_1.GetAttributesAttributes.TypeEnum,
    "GetCampaignOverview.TypeEnum": getCampaignOverview_1.GetCampaignOverview.TypeEnum,
    "GetCampaignOverview.StatusEnum": getCampaignOverview_1.GetCampaignOverview.StatusEnum,
    "GetEmailCampaign.TypeEnum": getEmailCampaign_1.GetEmailCampaign.TypeEnum,
    "GetEmailCampaign.StatusEnum": getEmailCampaign_1.GetEmailCampaign.StatusEnum,
    "GetEmailEventReportEvents.EventEnum": getEmailEventReportEvents_1.GetEmailEventReportEvents.EventEnum,
    "GetExtendedCampaignOverview.TypeEnum": getExtendedCampaignOverview_1.GetExtendedCampaignOverview.TypeEnum,
    "GetExtendedCampaignOverview.StatusEnum": getExtendedCampaignOverview_1.GetExtendedCampaignOverview.StatusEnum,
    "GetProcess.StatusEnum": getProcess_1.GetProcess.StatusEnum,
    "GetSmsCampaign.StatusEnum": getSmsCampaign_1.GetSmsCampaign.StatusEnum,
    "GetSmsCampaignOverview.StatusEnum": getSmsCampaignOverview_1.GetSmsCampaignOverview.StatusEnum,
    "GetSmsEventReportEvents.EventEnum": getSmsEventReportEvents_1.GetSmsEventReportEvents.EventEnum,
    "GetTransacBlockedContactsReason.CodeEnum": getTransacBlockedContactsReason_1.GetTransacBlockedContactsReason.CodeEnum,
    "GetWebhook.TypeEnum": getWebhook_1.GetWebhook.TypeEnum,
    "RequestContactExportCustomContactFilter.ActionForContactsEnum": requestContactExportCustomContactFilter_1.RequestContactExportCustomContactFilter.ActionForContactsEnum,
    "RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum": requestContactExportCustomContactFilter_1.RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum,
    "RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum": requestContactExportCustomContactFilter_1.RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum,
    "RequestSmsRecipientExport.RecipientsTypeEnum": requestSmsRecipientExport_1.RequestSmsRecipientExport.RecipientsTypeEnum,
    "SendReport.LanguageEnum": sendReport_1.SendReport.LanguageEnum,
    "SendTransacSms.TypeEnum": sendTransacSms_1.SendTransacSms.TypeEnum,
    "UpdateCampaignStatus.StatusEnum": updateCampaignStatus_1.UpdateCampaignStatus.StatusEnum,
    "UpdateEmailCampaign.WinnerCriteriaEnum": updateEmailCampaign_1.UpdateEmailCampaign.WinnerCriteriaEnum,
    "UpdateWebhook.EventsEnum": updateWebhook_1.UpdateWebhook.EventsEnum,
};
const typeMap = {
    "AbTestCampaignResult": abTestCampaignResult_1.AbTestCampaignResult,
    "AbTestCampaignResultClickedLinks": abTestCampaignResultClickedLinks_1.AbTestCampaignResultClickedLinks,
    "AbTestCampaignResultStatistics": abTestCampaignResultStatistics_1.AbTestCampaignResultStatistics,
    "AbTestVersionStats": abTestVersionStats_1.AbTestVersionStats,
    "AddChildDomain": addChildDomain_1.AddChildDomain,
    "AddContactToList": addContactToList_1.AddContactToList,
    "AddCredits": addCredits_1.AddCredits,
    "BlockDomain": blockDomain_1.BlockDomain,
    "CreateAttribute": createAttribute_1.CreateAttribute,
    "CreateAttributeEnumeration": createAttributeEnumeration_1.CreateAttributeEnumeration,
    "CreateChild": createChild_1.CreateChild,
    "CreateContact": createContact_1.CreateContact,
    "CreateDoiContact": createDoiContact_1.CreateDoiContact,
    "CreateEmailCampaign": createEmailCampaign_1.CreateEmailCampaign,
    "CreateEmailCampaignRecipients": createEmailCampaignRecipients_1.CreateEmailCampaignRecipients,
    "CreateEmailCampaignSender": createEmailCampaignSender_1.CreateEmailCampaignSender,
    "CreateList": createList_1.CreateList,
    "CreateModel": createModel_1.CreateModel,
    "CreateReseller": createReseller_1.CreateReseller,
    "CreateSender": createSender_1.CreateSender,
    "CreateSenderIps": createSenderIps_1.CreateSenderIps,
    "CreateSenderModel": createSenderModel_1.CreateSenderModel,
    "CreateSmsCampaign": createSmsCampaign_1.CreateSmsCampaign,
    "CreateSmsCampaignRecipients": createSmsCampaignRecipients_1.CreateSmsCampaignRecipients,
    "CreateSmtpEmail": createSmtpEmail_1.CreateSmtpEmail,
    "CreateSmtpTemplate": createSmtpTemplate_1.CreateSmtpTemplate,
    "CreateSmtpTemplateSender": createSmtpTemplateSender_1.CreateSmtpTemplateSender,
    "CreateUpdateContactModel": createUpdateContactModel_1.CreateUpdateContactModel,
    "CreateUpdateFolder": createUpdateFolder_1.CreateUpdateFolder,
    "CreateWebhook": createWebhook_1.CreateWebhook,
    "CreatedProcessId": createdProcessId_1.CreatedProcessId,
    "DeleteHardbounces": deleteHardbounces_1.DeleteHardbounces,
    "EmailExportRecipients": emailExportRecipients_1.EmailExportRecipients,
    "ErrorModel": errorModel_1.ErrorModel,
    "GetAccount": getAccount_1.GetAccount,
    "GetAccountAllOf": getAccountAllOf_1.GetAccountAllOf,
    "GetAccountAllOfMarketingAutomation": getAccountAllOfMarketingAutomation_1.GetAccountAllOfMarketingAutomation,
    "GetAccountAllOfPlan": getAccountAllOfPlan_1.GetAccountAllOfPlan,
    "GetAccountAllOfRelay": getAccountAllOfRelay_1.GetAccountAllOfRelay,
    "GetAccountAllOfRelayData": getAccountAllOfRelayData_1.GetAccountAllOfRelayData,
    "GetAggregatedReport": getAggregatedReport_1.GetAggregatedReport,
    "GetAttributes": getAttributes_1.GetAttributes,
    "GetAttributesAttributes": getAttributesAttributes_1.GetAttributesAttributes,
    "GetAttributesEnumeration": getAttributesEnumeration_1.GetAttributesEnumeration,
    "GetBlockedDomains": getBlockedDomains_1.GetBlockedDomains,
    "GetCampaignOverview": getCampaignOverview_1.GetCampaignOverview,
    "GetCampaignRecipients": getCampaignRecipients_1.GetCampaignRecipients,
    "GetCampaignStats": getCampaignStats_1.GetCampaignStats,
    "GetChildAccountCreationStatus": getChildAccountCreationStatus_1.GetChildAccountCreationStatus,
    "GetChildDomain": getChildDomain_1.GetChildDomain,
    "GetChildInfo": getChildInfo_1.GetChildInfo,
    "GetChildInfoAllOf": getChildInfoAllOf_1.GetChildInfoAllOf,
    "GetChildInfoAllOfApiKeys": getChildInfoAllOfApiKeys_1.GetChildInfoAllOfApiKeys,
    "GetChildInfoAllOfApiKeysV2": getChildInfoAllOfApiKeysV2_1.GetChildInfoAllOfApiKeysV2,
    "GetChildInfoAllOfApiKeysV3": getChildInfoAllOfApiKeysV3_1.GetChildInfoAllOfApiKeysV3,
    "GetChildInfoAllOfCredits": getChildInfoAllOfCredits_1.GetChildInfoAllOfCredits,
    "GetChildInfoAllOfStatistics": getChildInfoAllOfStatistics_1.GetChildInfoAllOfStatistics,
    "GetChildrenList": getChildrenList_1.GetChildrenList,
    "GetClient": getClient_1.GetClient,
    "GetContactCampaignStats": getContactCampaignStats_1.GetContactCampaignStats,
    "GetContactCampaignStatsClicked": getContactCampaignStatsClicked_1.GetContactCampaignStatsClicked,
    "GetContactCampaignStatsOpened": getContactCampaignStatsOpened_1.GetContactCampaignStatsOpened,
    "GetContactCampaignStatsTransacAttributes": getContactCampaignStatsTransacAttributes_1.GetContactCampaignStatsTransacAttributes,
    "GetContactCampaignStatsUnsubscriptions": getContactCampaignStatsUnsubscriptions_1.GetContactCampaignStatsUnsubscriptions,
    "GetContactDetails": getContactDetails_1.GetContactDetails,
    "GetContacts": getContacts_1.GetContacts,
    "GetDeviceBrowserStats": getDeviceBrowserStats_1.GetDeviceBrowserStats,
    "GetEmailCampaign": getEmailCampaign_1.GetEmailCampaign,
    "GetEmailCampaignAllOf": getEmailCampaignAllOf_1.GetEmailCampaignAllOf,
    "GetEmailCampaigns": getEmailCampaigns_1.GetEmailCampaigns,
    "GetEmailEventReport": getEmailEventReport_1.GetEmailEventReport,
    "GetEmailEventReportEvents": getEmailEventReportEvents_1.GetEmailEventReportEvents,
    "GetExtendedCampaignOverview": getExtendedCampaignOverview_1.GetExtendedCampaignOverview,
    "GetExtendedCampaignOverviewAllOf": getExtendedCampaignOverviewAllOf_1.GetExtendedCampaignOverviewAllOf,
    "GetExtendedCampaignOverviewAllOfSender": getExtendedCampaignOverviewAllOfSender_1.GetExtendedCampaignOverviewAllOfSender,
    "GetExtendedCampaignStats": getExtendedCampaignStats_1.GetExtendedCampaignStats,
    "GetExtendedClient": getExtendedClient_1.GetExtendedClient,
    "GetExtendedClientAllOf": getExtendedClientAllOf_1.GetExtendedClientAllOf,
    "GetExtendedClientAllOfAddress": getExtendedClientAllOfAddress_1.GetExtendedClientAllOfAddress,
    "GetExtendedContactDetails": getExtendedContactDetails_1.GetExtendedContactDetails,
    "GetExtendedContactDetailsAllOf": getExtendedContactDetailsAllOf_1.GetExtendedContactDetailsAllOf,
    "GetExtendedContactDetailsAllOfStatistics": getExtendedContactDetailsAllOfStatistics_1.GetExtendedContactDetailsAllOfStatistics,
    "GetExtendedContactDetailsAllOfStatisticsClicked": getExtendedContactDetailsAllOfStatisticsClicked_1.GetExtendedContactDetailsAllOfStatisticsClicked,
    "GetExtendedContactDetailsAllOfStatisticsLinks": getExtendedContactDetailsAllOfStatisticsLinks_1.GetExtendedContactDetailsAllOfStatisticsLinks,
    "GetExtendedContactDetailsAllOfStatisticsMessagesSent": getExtendedContactDetailsAllOfStatisticsMessagesSent_1.GetExtendedContactDetailsAllOfStatisticsMessagesSent,
    "GetExtendedContactDetailsAllOfStatisticsOpened": getExtendedContactDetailsAllOfStatisticsOpened_1.GetExtendedContactDetailsAllOfStatisticsOpened,
    "GetExtendedContactDetailsAllOfStatisticsUnsubscriptions": getExtendedContactDetailsAllOfStatisticsUnsubscriptions_1.GetExtendedContactDetailsAllOfStatisticsUnsubscriptions,
    "GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription": getExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription_1.GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription,
    "GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription": getExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription_1.GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription,
    "GetExtendedList": getExtendedList_1.GetExtendedList,
    "GetExtendedListAllOf": getExtendedListAllOf_1.GetExtendedListAllOf,
    "GetExtendedListAllOfCampaignStats": getExtendedListAllOfCampaignStats_1.GetExtendedListAllOfCampaignStats,
    "GetFolder": getFolder_1.GetFolder,
    "GetFolderLists": getFolderLists_1.GetFolderLists,
    "GetFolders": getFolders_1.GetFolders,
    "GetIp": getIp_1.GetIp,
    "GetIpFromSender": getIpFromSender_1.GetIpFromSender,
    "GetIps": getIps_1.GetIps,
    "GetIpsFromSender": getIpsFromSender_1.GetIpsFromSender,
    "GetList": getList_1.GetList,
    "GetLists": getLists_1.GetLists,
    "GetProcess": getProcess_1.GetProcess,
    "GetProcesses": getProcesses_1.GetProcesses,
    "GetReports": getReports_1.GetReports,
    "GetReportsReports": getReportsReports_1.GetReportsReports,
    "GetSendersList": getSendersList_1.GetSendersList,
    "GetSendersListIps": getSendersListIps_1.GetSendersListIps,
    "GetSendersListSenders": getSendersListSenders_1.GetSendersListSenders,
    "GetSharedTemplateUrl": getSharedTemplateUrl_1.GetSharedTemplateUrl,
    "GetSmsCampaign": getSmsCampaign_1.GetSmsCampaign,
    "GetSmsCampaignAllOf": getSmsCampaignAllOf_1.GetSmsCampaignAllOf,
    "GetSmsCampaignOverview": getSmsCampaignOverview_1.GetSmsCampaignOverview,
    "GetSmsCampaignStats": getSmsCampaignStats_1.GetSmsCampaignStats,
    "GetSmsCampaigns": getSmsCampaigns_1.GetSmsCampaigns,
    "GetSmsEventReport": getSmsEventReport_1.GetSmsEventReport,
    "GetSmsEventReportEvents": getSmsEventReportEvents_1.GetSmsEventReportEvents,
    "GetSmtpTemplateOverview": getSmtpTemplateOverview_1.GetSmtpTemplateOverview,
    "GetSmtpTemplateOverviewSender": getSmtpTemplateOverviewSender_1.GetSmtpTemplateOverviewSender,
    "GetSmtpTemplates": getSmtpTemplates_1.GetSmtpTemplates,
    "GetSsoToken": getSsoToken_1.GetSsoToken,
    "GetStatsByDevice": getStatsByDevice_1.GetStatsByDevice,
    "GetTransacAggregatedSmsReport": getTransacAggregatedSmsReport_1.GetTransacAggregatedSmsReport,
    "GetTransacBlockedContacts": getTransacBlockedContacts_1.GetTransacBlockedContacts,
    "GetTransacBlockedContactsContacts": getTransacBlockedContactsContacts_1.GetTransacBlockedContactsContacts,
    "GetTransacBlockedContactsReason": getTransacBlockedContactsReason_1.GetTransacBlockedContactsReason,
    "GetTransacEmailContent": getTransacEmailContent_1.GetTransacEmailContent,
    "GetTransacEmailContentEvents": getTransacEmailContentEvents_1.GetTransacEmailContentEvents,
    "GetTransacEmailsList": getTransacEmailsList_1.GetTransacEmailsList,
    "GetTransacEmailsListTransactionalEmails": getTransacEmailsListTransactionalEmails_1.GetTransacEmailsListTransactionalEmails,
    "GetTransacSmsReport": getTransacSmsReport_1.GetTransacSmsReport,
    "GetTransacSmsReportReports": getTransacSmsReportReports_1.GetTransacSmsReportReports,
    "GetWebhook": getWebhook_1.GetWebhook,
    "GetWebhooks": getWebhooks_1.GetWebhooks,
    "ManageIp": manageIp_1.ManageIp,
    "PostContactInfo": postContactInfo_1.PostContactInfo,
    "PostContactInfoContacts": postContactInfoContacts_1.PostContactInfoContacts,
    "PostSendFailed": postSendFailed_1.PostSendFailed,
    "PostSendSmsTestFailed": postSendSmsTestFailed_1.PostSendSmsTestFailed,
    "RemainingCreditModel": remainingCreditModel_1.RemainingCreditModel,
    "RemainingCreditModelChild": remainingCreditModelChild_1.RemainingCreditModelChild,
    "RemainingCreditModelReseller": remainingCreditModelReseller_1.RemainingCreditModelReseller,
    "RemoveContactFromList": removeContactFromList_1.RemoveContactFromList,
    "RemoveCredits": removeCredits_1.RemoveCredits,
    "RequestContactExport": requestContactExport_1.RequestContactExport,
    "RequestContactExportCustomContactFilter": requestContactExportCustomContactFilter_1.RequestContactExportCustomContactFilter,
    "RequestContactImport": requestContactImport_1.RequestContactImport,
    "RequestContactImportNewList": requestContactImportNewList_1.RequestContactImportNewList,
    "RequestSmsRecipientExport": requestSmsRecipientExport_1.RequestSmsRecipientExport,
    "SendEmail": sendEmail_1.SendEmail,
    "SendEmailAttachment": sendEmailAttachment_1.SendEmailAttachment,
    "SendReport": sendReport_1.SendReport,
    "SendReportEmail": sendReportEmail_1.SendReportEmail,
    "SendSms": sendSms_1.SendSms,
    "SendSmtpEmail": sendSmtpEmail_1.SendSmtpEmail,
    "SendSmtpEmailAttachment": sendSmtpEmailAttachment_1.SendSmtpEmailAttachment,
    "SendSmtpEmailBcc": sendSmtpEmailBcc_1.SendSmtpEmailBcc,
    "SendSmtpEmailCc": sendSmtpEmailCc_1.SendSmtpEmailCc,
    "SendSmtpEmailMessageVersions": sendSmtpEmailMessageVersions_1.SendSmtpEmailMessageVersions,
    "SendSmtpEmailReplyTo": sendSmtpEmailReplyTo_1.SendSmtpEmailReplyTo,
    "SendSmtpEmailReplyTo1": sendSmtpEmailReplyTo1_1.SendSmtpEmailReplyTo1,
    "SendSmtpEmailSender": sendSmtpEmailSender_1.SendSmtpEmailSender,
    "SendSmtpEmailTo": sendSmtpEmailTo_1.SendSmtpEmailTo,
    "SendSmtpEmailTo1": sendSmtpEmailTo1_1.SendSmtpEmailTo1,
    "SendTemplateEmail": sendTemplateEmail_1.SendTemplateEmail,
    "SendTestEmail": sendTestEmail_1.SendTestEmail,
    "SendTestSms": sendTestSms_1.SendTestSms,
    "SendTransacSms": sendTransacSms_1.SendTransacSms,
    "UpdateAttribute": updateAttribute_1.UpdateAttribute,
    "UpdateAttributeEnumeration": updateAttributeEnumeration_1.UpdateAttributeEnumeration,
    "UpdateCampaignStatus": updateCampaignStatus_1.UpdateCampaignStatus,
    "UpdateChild": updateChild_1.UpdateChild,
    "UpdateChildAccountStatus": updateChildAccountStatus_1.UpdateChildAccountStatus,
    "UpdateChildDomain": updateChildDomain_1.UpdateChildDomain,
    "UpdateContact": updateContact_1.UpdateContact,
    "UpdateEmailCampaign": updateEmailCampaign_1.UpdateEmailCampaign,
    "UpdateEmailCampaignRecipients": updateEmailCampaignRecipients_1.UpdateEmailCampaignRecipients,
    "UpdateEmailCampaignSender": updateEmailCampaignSender_1.UpdateEmailCampaignSender,
    "UpdateList": updateList_1.UpdateList,
    "UpdateSender": updateSender_1.UpdateSender,
    "UpdateSmsCampaign": updateSmsCampaign_1.UpdateSmsCampaign,
    "UpdateSmtpTemplate": updateSmtpTemplate_1.UpdateSmtpTemplate,
    "UpdateSmtpTemplateSender": updateSmtpTemplateSender_1.UpdateSmtpTemplateSender,
    "UpdateWebhook": updateWebhook_1.UpdateWebhook,
    "UploadImageToGallery": uploadImageToGallery_1.UploadImageToGallery,
};
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
                    const discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
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
            for (let index = 0; index < data.length; index++) {
                const datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            const instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
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
            for (let index = 0; index < data.length; index++) {
                const datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
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
            for (let index = 0; index < attributeTypes.length; index++) {
                const attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
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
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
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
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
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
//# sourceMappingURL=models.js.map