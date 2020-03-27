import localVarRequest = require('request');
import http = require('http');
export declare class AbTestCampaignResult {
    'winningVersion': AbTestCampaignResult.WinningVersionEnum;
    'winningCriteria': AbTestCampaignResult.WinningCriteriaEnum;
    'winningSubjectLine': string;
    'openRate': string;
    'clickRate': string;
    'winningVersionRate': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace AbTestCampaignResult {
    enum WinningVersionEnum {
        NotAvailable,
        Pending,
        Tie,
        A,
        B
    }
    enum WinningCriteriaEnum {
        Open,
        Click
    }
}
export declare class AddChildDomain {
    'domain': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AddContactToList {
    'emails': Array<string>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AddCredits {
    'sms': number;
    'email': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateAttribute {
    'value': string;
    'enumeration': Array<CreateAttributeEnumeration>;
    'type': CreateAttribute.TypeEnum;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace CreateAttribute {
    enum TypeEnum {
        Text,
        Date,
        Float,
        Boolean,
        Id,
        Category
    }
}
export declare class CreateAttributeEnumeration {
    'value': number;
    'label': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateChild {
    'email': string;
    'firstName': string;
    'lastName': string;
    'companyName': string;
    'password': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateContact {
    'email': string;
    'attributes': any;
    'emailBlacklisted': boolean;
    'smsBlacklisted': boolean;
    'listIds': Array<number>;
    'updateEnabled': boolean;
    'smtpBlacklistSender': Array<string>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateEmailCampaign {
    'tag': string;
    'sender': CreateEmailCampaignSender;
    'name': string;
    'htmlContent': string;
    'htmlUrl': string;
    'templateId': number;
    'scheduledAt': Date;
    'subject': string;
    'replyTo': string;
    'toField': string;
    'recipients': CreateEmailCampaignRecipients;
    'attachmentUrl': string;
    'inlineImageActivation': boolean;
    'mirrorActive': boolean;
    'footer': string;
    'header': string;
    'utmCampaign': string;
    'params': any;
    'sendAtBestTime': boolean;
    'abTesting': boolean;
    'subjectA': string;
    'subjectB': string;
    'splitRule': number;
    'winnerCriteria': CreateEmailCampaign.WinnerCriteriaEnum;
    'winnerDelay': number;
    'ipWarmupEnable': boolean;
    'initialQuota': number;
    'increaseRate': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace CreateEmailCampaign {
    enum WinnerCriteriaEnum {
        Open,
        Click
    }
}
export declare class CreateEmailCampaignRecipients {
    'exclusionListIds': Array<number>;
    'listIds': Array<number>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateEmailCampaignSender {
    'name': string;
    'email': string;
    'id': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateList {
    'name': string;
    'folderId': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateModel {
    'id': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateReseller {
    'authKey': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateSender {
    'name': string;
    'email': string;
    'ips': Array<CreateSenderIps>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateSenderIps {
    'ip': string;
    'domain': string;
    'weight': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateSenderModel {
    'id': number;
    'spfError': boolean;
    'dkimError': boolean;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateSmsCampaign {
    'name': string;
    'sender': string;
    'content': string;
    'recipients': CreateSmsCampaignRecipients;
    'scheduledAt': Date;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateSmsCampaignRecipients {
    'listIds': Array<number>;
    'exclusionListIds': Array<number>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateSmtpEmail {
    'messageId': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateSmtpTemplate {
    'tag': string;
    'sender': CreateSmtpTemplateSender;
    'templateName': string;
    'htmlContent': string;
    'htmlUrl': string;
    'subject': string;
    'replyTo': string;
    'toField': string;
    'attachmentUrl': string;
    'isActive': boolean;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateSmtpTemplateSender {
    'name': string;
    'email': string;
    'id': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateUpdateContactModel {
    'id': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateUpdateFolder {
    'name': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateWebhook {
    'url': string;
    'description': string;
    'events': Array<CreateWebhook.EventsEnum>;
    'type': CreateWebhook.TypeEnum;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace CreateWebhook {
    enum EventsEnum {
        HardBounce,
        SoftBounce,
        Blocked,
        Spam,
        Delivered,
        Request,
        Click,
        Invalid,
        Deferred,
        Opened,
        UniqueOpened,
        Unsubscribed,
        ListAddition,
        ContactUpdated,
        ContactDeleted
    }
    enum TypeEnum {
        Transactional,
        Marketing
    }
}
export declare class CreatedProcessId {
    'processId': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class DeleteHardbounces {
    'startDate': string;
    'endDate': string;
    'contactEmail': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailExportRecipients {
    'notifyURL': string;
    'recipientsType': EmailExportRecipients.RecipientsTypeEnum;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace EmailExportRecipients {
    enum RecipientsTypeEnum {
        All,
        NonClickers,
        NonOpeners,
        Clickers,
        Openers,
        SoftBounces,
        HardBounces,
        Unsubscribed
    }
}
export declare class ErrorModel {
    'code': ErrorModel.CodeEnum;
    'message': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ErrorModel {
    enum CodeEnum {
        InvalidParameter,
        MissingParameter,
        OutOfRange,
        CampaignProcessing,
        CampaignSent,
        DocumentNotFound,
        ResellerPermissionDenied,
        NotEnoughCredits,
        PermissionDenied,
        DuplicateParameter,
        DuplicateRequest,
        MethodNotAllowed,
        Unauthorized,
        AccountUnderValidation,
        NotAcceptable
    }
}
export declare class GetAccountMarketingAutomation {
    'key': string;
    'enabled': boolean;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetAccountPlan {
    'type': GetAccountPlan.TypeEnum;
    'creditsType': GetAccountPlan.CreditsTypeEnum;
    'credits': number;
    'startDate': string;
    'endDate': string;
    'userLimit': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetAccountPlan {
    enum TypeEnum {
        PayAsYouGo,
        Free,
        Subscription,
        Sms,
        Reseller
    }
    enum CreditsTypeEnum {
        SendLimit
    }
}
export declare class GetAccountRelay {
    'enabled': boolean;
    'data': GetAccountRelayData;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetAccountRelayData {
    'userName': string;
    'relay': string;
    'port': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetAggregatedReport {
    'range': string;
    'requests': number;
    'delivered': number;
    'hardBounces': number;
    'softBounces': number;
    'clicks': number;
    'uniqueClicks': number;
    'opens': number;
    'uniqueOpens': number;
    'spamReports': number;
    'blocked': number;
    'invalid': number;
    'unsubscribed': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetAttributes {
    'attributes': Array<GetAttributesAttributes>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetAttributesAttributes {
    'name': string;
    'category': GetAttributesAttributes.CategoryEnum;
    'type': GetAttributesAttributes.TypeEnum;
    'enumeration': Array<GetAttributesEnumeration>;
    'calculatedValue': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetAttributesAttributes {
    enum CategoryEnum {
        Normal,
        Transactional,
        Category,
        Calculated,
        Global
    }
    enum TypeEnum {
        Text,
        Date,
        Float,
        Id,
        Boolean
    }
}
export declare class GetAttributesEnumeration {
    'value': number;
    'label': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetCampaignOverview {
    'id': number;
    'name': string;
    'subject': string;
    'type': GetCampaignOverview.TypeEnum;
    'status': GetCampaignOverview.StatusEnum;
    'scheduledAt': Date;
    'abTesting': boolean;
    'subjectA': string;
    'subjectB': string;
    'splitRule': number;
    'winnerCriteria': string;
    'winnerDelay': number;
    'sendAtBestTime': boolean;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetCampaignOverview {
    enum TypeEnum {
        Classic,
        Trigger
    }
    enum StatusEnum {
        Draft,
        Sent,
        Archive,
        Queued,
        Suspended,
        InProcess
    }
}
export declare class GetCampaignRecipients {
    'lists': Array<number>;
    'exclusionLists': Array<number>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetCampaignStats {
    'listId': number;
    'uniqueClicks': number;
    'clickers': number;
    'complaints': number;
    'delivered': number;
    'sent': number;
    'softBounces': number;
    'hardBounces': number;
    'uniqueViews': number;
    'unsubscriptions': number;
    'viewed': number;
    'deferred': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetChildAccountCreationStatus {
    'childAccountCreated': boolean;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetChildDomain {
    'domain': string;
    'active': boolean;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetChildDomains extends Array<any> {
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare class GetChildInfoApiKeys {
    'v2': Array<GetChildInfoApiKeysV2>;
    'v3': Array<GetChildInfoApiKeysV3>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetChildInfoApiKeysV2 {
    'name': string;
    'key': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetChildInfoApiKeysV3 {
    'name': string;
    'key': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetChildInfoCredits {
    'emailCredits': number;
    'smsCredits': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetChildInfoStatistics {
    'previousMonthTotalSent': number;
    'currentMonthTotalSent': number;
    'totalSent': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetChildrenList {
    'children': Array<any>;
    'count': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetClient {
    'email': string;
    'firstName': string;
    'lastName': string;
    'companyName': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetContactCampaignStats {
    'messagesSent': Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'hardBounces': Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'softBounces': Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'complaints': Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'unsubscriptions': GetContactCampaignStatsUnsubscriptions;
    'opened': Array<GetContactCampaignStatsOpened>;
    'clicked': Array<GetContactCampaignStatsClicked>;
    'transacAttributes': Array<GetContactCampaignStatsTransacAttributes>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetContactCampaignStatsClicked {
    'campaignId': number;
    'links': Array<GetExtendedContactDetailsStatisticsLinks>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetContactCampaignStatsOpened {
    'campaignId': number;
    'count': number;
    'eventTime': Date;
    'ip': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetContactCampaignStatsTransacAttributes {
    'orderDate': string;
    'orderPrice': number;
    'orderId': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetContactCampaignStatsUnsubscriptions {
    'userUnsubscription': Array<GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription>;
    'adminUnsubscription': Array<GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetContactDetails {
    'email': string;
    'id': number;
    'emailBlacklisted': boolean;
    'smsBlacklisted': boolean;
    'createdAt': Date;
    'modifiedAt': Date;
    'listIds': Array<number>;
    'listUnsubscribed': Array<number>;
    'attributes': any;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetContacts {
    'contacts': Array<any>;
    'count': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetDeviceBrowserStats {
    'clickers': number;
    'uniqueClicks': number;
    'viewed': number;
    'uniqueViews': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetEmailCampaigns {
    'campaigns': Array<any>;
    'count': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetEmailEventReport {
    'events': Array<GetEmailEventReportEvents>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetEmailEventReportEvents {
    'email': string;
    'date': Date;
    'subject': string;
    'messageId': string;
    'event': GetEmailEventReportEvents.EventEnum;
    'reason': string;
    'tag': string;
    'ip': string;
    'link': string;
    'from': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetEmailEventReportEvents {
    enum EventEnum {
        Bounces,
        HardBounces,
        SoftBounces,
        Delivered,
        Spam,
        Requests,
        Opened,
        Clicks,
        Invalid,
        Deferred,
        Blocked,
        Unsubscribed
    }
}
export declare class GetExtendedCampaignOverviewSender {
    'name': string;
    'email': string;
    'id': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedCampaignStats {
    'globalStats': any;
    'campaignStats': Array<any>;
    'mirrorClick': number;
    'remaining': number;
    'linksStats': any;
    'statsByDomain': GetStatsByDomain;
    'statsByDevice': GetStatsByDevice;
    'statsByBrowser': GetStatsByBrowser;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedClientAddress {
    'street': string;
    'city': string;
    'zipCode': string;
    'country': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedContactDetailsStatistics {
    'messagesSent': Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'hardBounces': Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'softBounces': Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'complaints': Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'unsubscriptions': GetExtendedContactDetailsStatisticsUnsubscriptions;
    'opened': Array<GetExtendedContactDetailsStatisticsOpened>;
    'clicked': Array<GetExtendedContactDetailsStatisticsClicked>;
    'transacAttributes': Array<any>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedContactDetailsStatisticsClicked {
    'campaignId': number;
    'links': Array<GetExtendedContactDetailsStatisticsLinks>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedContactDetailsStatisticsLinks {
    'count': number;
    'eventTime': Date;
    'ip': string;
    'url': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedContactDetailsStatisticsMessagesSent {
    'campaignId': number;
    'eventTime': Date;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedContactDetailsStatisticsOpened {
    'campaignId': number;
    'count': number;
    'eventTime': Date;
    'ip': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedContactDetailsStatisticsUnsubscriptions {
    'userUnsubscription': Array<GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription>;
    'adminUnsubscription': Array<GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription {
    'eventTime': Date;
    'ip': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription {
    'campaignId': number;
    'eventTime': Date;
    'ip': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedListCampaignStats {
    'campaignId': number;
    'stats': GetCampaignStats;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetFolder {
    'id': number;
    'name': string;
    'totalBlacklisted': number;
    'totalSubscribers': number;
    'uniqueSubscribers': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetFolderLists {
    'lists': Array<any>;
    'count': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetFolders {
    'folders': Array<any>;
    'count': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetIp {
    'id': number;
    'ip': string;
    'active': boolean;
    'domain': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetIpFromSender {
    'id': number;
    'ip': string;
    'domain': string;
    'weight': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetIps {
    'ips': Array<GetIp>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetIpsFromSender {
    'ips': Array<GetIpFromSender>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetList {
    'id': number;
    'name': string;
    'totalBlacklisted': number;
    'totalSubscribers': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetLists {
    'lists': Array<any>;
    'count': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetProcess {
    'id': number;
    'status': GetProcess.StatusEnum;
    'name': string;
    'exportUrl': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetProcess {
    enum StatusEnum {
        Queued,
        InProcess,
        Completed
    }
}
export declare class GetProcesses {
    'processes': Array<GetProcess>;
    'count': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetReports {
    'reports': Array<GetReportsReports>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetReportsReports {
    'date': string;
    'requests': number;
    'delivered': number;
    'hardBounces': number;
    'softBounces': number;
    'clicks': number;
    'uniqueClicks': number;
    'opens': number;
    'uniqueOpens': number;
    'spamReports': number;
    'blocked': number;
    'invalid': number;
    'unsubscribed': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSendersList {
    'senders': Array<GetSendersListSenders>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSendersListIps {
    'ip': string;
    'domain': string;
    'weight': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSendersListSenders {
    'id': number;
    'name': string;
    'email': string;
    'active': boolean;
    'ips': Array<GetSendersListIps>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSharedTemplateUrl {
    'sharedUrl': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSmsCampaignOverview {
    'id': number;
    'name': string;
    'status': GetSmsCampaignOverview.StatusEnum;
    'content': string;
    'scheduledAt': Date;
    'sender': string;
    'createdAt': Date;
    'modifiedAt': Date;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetSmsCampaignOverview {
    enum StatusEnum {
        Draft,
        Sent,
        Archive,
        Queued,
        Suspended,
        InProcess
    }
}
export declare class GetSmsCampaignStats {
    'delivered': number;
    'sent': number;
    'processing': number;
    'softBounces': number;
    'hardBounces': number;
    'unsubscriptions': number;
    'answered': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSmsCampaigns {
    'campaigns': Array<any>;
    'count': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSmsEventReport {
    'events': Array<GetSmsEventReportEvents>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSmsEventReportEvents {
    'phoneNumber': string;
    'date': Date;
    'messageId': string;
    'event': GetSmsEventReportEvents.EventEnum;
    'reason': string;
    'reply': string;
    'tag': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetSmsEventReportEvents {
    enum EventEnum {
        Bounces,
        HardBounces,
        SoftBounces,
        Delivered,
        Sent,
        Accepted,
        Unsubscription,
        Replies,
        Blocked
    }
}
export declare class GetSmtpTemplateOverview {
    'id': number;
    'name': string;
    'subject': string;
    'isActive': boolean;
    'testSent': boolean;
    'sender': GetSmtpTemplateOverviewSender;
    'replyTo': string;
    'toField': string;
    'tag': string;
    'htmlContent': string;
    'createdAt': Date;
    'modifiedAt': Date;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSmtpTemplateOverviewSender {
    'name': string;
    'email': string;
    'id': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSmtpTemplates {
    'count': number;
    'templates': Array<GetSmtpTemplateOverview>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSsoToken {
    'token': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetStatsByBrowser extends null<String, GetDeviceBrowserStats> {
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare class GetStatsByDevice {
    'desktop': {
        [key: string]: GetDeviceBrowserStats;
    };
    'mobile': {
        [key: string]: GetDeviceBrowserStats;
    };
    'tablet': {
        [key: string]: GetDeviceBrowserStats;
    };
    'unknown': {
        [key: string]: GetDeviceBrowserStats;
    };
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetStatsByDomain extends null<String, GetCampaignStats> {
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare class GetTransacAggregatedSmsReport {
    'range': string;
    'requests': number;
    'delivered': number;
    'hardBounces': number;
    'softBounces': number;
    'blocked': number;
    'unsubscribed': number;
    'replied': number;
    'accepted': number;
    'rejected': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetTransacBlockedContacts {
    'count': number;
    'contacts': Array<GetTransacBlockedContactsContacts>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetTransacBlockedContactsContacts {
    'email': string;
    'senderEmail': string;
    'reason': GetTransacBlockedContactsReason;
    'blockedAt': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetTransacBlockedContactsReason {
    'code': GetTransacBlockedContactsReason.CodeEnum;
    'message': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetTransacBlockedContactsReason {
    enum CodeEnum {
        UnsubscribedViaMA,
        UnsubscribedViaEmail,
        AdminBlocked,
        UnsubscribedViaApi,
        HardBounce,
        ContactFlaggedAsSpam
    }
}
export declare class GetTransacEmailContent {
    'email': string;
    'subject': string;
    'templateId': number;
    'date': Date;
    'events': Array<GetTransacEmailContentEvents>;
    'body': string;
    'attachmentCount': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetTransacEmailContentEvents {
    'name': string;
    'time': Date;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetTransacEmailsList {
    'transactionalEmails': Array<GetTransacEmailsListTransactionalEmails>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetTransacEmailsListTransactionalEmails {
    'email': string;
    'subject': string;
    'templateId': number;
    'messageId': string;
    'uuid': string;
    'date': Date;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetTransacSmsReport {
    'reports': Array<GetTransacSmsReportReports>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetTransacSmsReportReports {
    'date': string;
    'requests': number;
    'delivered': number;
    'hardBounces': number;
    'softBounces': number;
    'blocked': number;
    'unsubscribed': number;
    'replied': number;
    'accepted': number;
    'rejected': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetWebhook {
    'url': string;
    'id': number;
    'description': string;
    'events': Array<string>;
    'type': GetWebhook.TypeEnum;
    'createdAt': Date;
    'modifiedAt': Date;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetWebhook {
    enum TypeEnum {
        Marketing,
        Transac
    }
}
export declare class GetWebhooks {
    'webhooks': Array<any>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ManageIp {
    'ip': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PostContactInfo {
    'contacts': PostContactInfoContacts;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PostContactInfoContacts {
    'success': Array<string>;
    'failure': Array<string>;
    'total': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PostSendFailed {
    'code': number;
    'message': string;
    'unexistingEmails': Array<string>;
    'withoutListEmails': Array<string>;
    'blackListedEmails': Array<string>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PostSendSmsTestFailed {
    'code': number;
    'message': string;
    'unexistingSms': Array<string>;
    'withoutListSms': Array<string>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RemainingCreditModel {
    'child': RemainingCreditModelChild;
    'reseller': RemainingCreditModelReseller;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RemainingCreditModelChild {
    'sms': number;
    'email': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RemainingCreditModelReseller {
    'sms': number;
    'email': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RemoveContactFromList {
    'emails': Array<string>;
    'all': boolean;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RemoveCredits {
    'sms': number;
    'email': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RequestContactExport {
    'exportAttributes': Array<string>;
    'contactFilter': any;
    'customContactFilter': RequestContactExportCustomContactFilter;
    'notifyUrl': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RequestContactExportCustomContactFilter {
    'actionForContacts': RequestContactExportCustomContactFilter.ActionForContactsEnum;
    'actionForEmailCampaigns': RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum;
    'actionForSmsCampaigns': RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum;
    'listId': number;
    'emailCampaignId': number;
    'smsCampaignId': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace RequestContactExportCustomContactFilter {
    enum ActionForContactsEnum {
        AllContacts,
        Subscribed,
        Unsubscribed,
        UnsubscribedPerList
    }
    enum ActionForEmailCampaignsEnum {
        Openers,
        NonOpeners,
        Clickers,
        NonClickers,
        Unsubscribed,
        HardBounces,
        SoftBounces
    }
    enum ActionForSmsCampaignsEnum {
        HardBounces,
        SoftBounces,
        Unsubscribed
    }
}
export declare class RequestContactImport {
    'fileUrl': string;
    'fileBody': string;
    'listIds': Array<number>;
    'notifyUrl': string;
    'newList': RequestContactImportNewList;
    'emailBlacklist': boolean;
    'smsBlacklist': boolean;
    'updateExistingContacts': boolean;
    'emptyContactsAttributes': boolean;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RequestContactImportNewList {
    'listName': string;
    'folderId': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RequestSmsRecipientExport {
    'notifyURL': string;
    'recipientsType': RequestSmsRecipientExport.RecipientsTypeEnum;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace RequestSmsRecipientExport {
    enum RecipientsTypeEnum {
        All,
        Delivered,
        Answered,
        SoftBounces,
        HardBounces,
        Unsubscribed
    }
}
export declare class SendEmail {
    'emailTo': Array<string>;
    'emailBcc': Array<string>;
    'emailCc': Array<string>;
    'replyTo': string;
    'attachmentUrl': string;
    'attachment': Array<SendEmailAttachment>;
    'headers': any;
    'attributes': any;
    'tags': Array<string>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendEmailAttachment {
    'content': string;
    'name': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendReport {
    'language': SendReport.LanguageEnum;
    'email': SendReportEmail;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace SendReport {
    enum LanguageEnum {
        Fr,
        Es,
        Pt,
        It,
        De,
        En
    }
}
export declare class SendReportEmail {
    'subject': string;
    'to': Array<string>;
    'contentType': SendReportEmail.ContentTypeEnum;
    'bcc': Array<string>;
    'cc': Array<string>;
    'body': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace SendReportEmail {
    enum ContentTypeEnum {
        Text,
        Html
    }
}
export declare class SendSms {
    'reference': string;
    'messageId': number;
    'smsCount': number;
    'usedCredits': number;
    'remainingCredits': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendSmtpEmail {
    'sender': SendSmtpEmailSender;
    'to': Array<SendSmtpEmailTo>;
    'bcc': Array<SendSmtpEmailBcc>;
    'cc': Array<SendSmtpEmailCc>;
    'htmlContent': string;
    'textContent': string;
    'subject': string;
    'replyTo': SendSmtpEmailReplyTo;
    'attachment': Array<SendSmtpEmailAttachment>;
    'headers': any;
    'templateId': number;
    'params': any;
    'tags': Array<string>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendSmtpEmailAttachment {
    'url': string;
    'content': string;
    'name': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendSmtpEmailBcc {
    'email': string;
    'name': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendSmtpEmailCc {
    'email': string;
    'name': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendSmtpEmailReplyTo {
    'email': string;
    'name': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendSmtpEmailSender {
    'name': string;
    'email': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendSmtpEmailTo {
    'email': string;
    'name': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendTemplateEmail {
    'messageId': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendTestEmail {
    'emailTo': Array<string>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendTestSms {
    'phoneNumber': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SendTransacSms {
    'sender': string;
    'recipient': string;
    'content': string;
    'type': SendTransacSms.TypeEnum;
    'tag': string;
    'webUrl': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace SendTransacSms {
    enum TypeEnum {
        Transactional,
        Marketing
    }
}
export declare class UpdateAttribute {
    'value': string;
    'enumeration': Array<UpdateAttributeEnumeration>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateAttributeEnumeration {
    'value': number;
    'label': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateCampaignStatus {
    'status': UpdateCampaignStatus.StatusEnum;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace UpdateCampaignStatus {
    enum StatusEnum {
        Suspended,
        Archive,
        Darchive,
        Sent,
        Queued,
        Replicate,
        ReplicateTemplate,
        Draft
    }
}
export declare class UpdateChild {
    'email': string;
    'firstName': string;
    'lastName': string;
    'companyName': string;
    'password': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateChildAccountStatus {
    'transactionalEmail': boolean;
    'transactionalSms': boolean;
    'marketingAutomation': boolean;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateChildDomain {
    'domain': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateContact {
    'attributes': any;
    'emailBlacklisted': boolean;
    'smsBlacklisted': boolean;
    'listIds': Array<number>;
    'unlinkListIds': Array<number>;
    'smtpBlacklistSender': Array<string>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateEmailCampaign {
    'tag': string;
    'sender': UpdateEmailCampaignSender;
    'name': string;
    'htmlContent': string;
    'htmlUrl': string;
    'scheduledAt': Date;
    'subject': string;
    'replyTo': string;
    'toField': string;
    'recipients': UpdateEmailCampaignRecipients;
    'attachmentUrl': string;
    'inlineImageActivation': boolean;
    'mirrorActive': boolean;
    'recurring': boolean;
    'footer': string;
    'header': string;
    'utmCampaign': string;
    'params': any;
    'sendAtBestTime': boolean;
    'abTesting': boolean;
    'subjectA': string;
    'subjectB': string;
    'splitRule': number;
    'winnerCriteria': UpdateEmailCampaign.WinnerCriteriaEnum;
    'winnerDelay': number;
    'ipWarmupEnable': boolean;
    'initialQuota': number;
    'increaseRate': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace UpdateEmailCampaign {
    enum WinnerCriteriaEnum {
        Open,
        Click
    }
}
export declare class UpdateEmailCampaignRecipients {
    'exclusionListIds': Array<number>;
    'listIds': Array<number>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateEmailCampaignSender {
    'name': string;
    'email': string;
    'id': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateList {
    'name': string;
    'folderId': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateSender {
    'name': string;
    'email': string;
    'ips': Array<CreateSenderIps>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateSmsCampaign {
    'name': string;
    'sender': string;
    'content': string;
    'recipients': CreateSmsCampaignRecipients;
    'scheduledAt': Date;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateSmtpTemplate {
    'tag': string;
    'sender': UpdateSmtpTemplateSender;
    'templateName': string;
    'htmlContent': string;
    'htmlUrl': string;
    'subject': string;
    'replyTo': string;
    'toField': string;
    'attachmentUrl': string;
    'isActive': boolean;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateSmtpTemplateSender {
    'name': string;
    'email': string;
    'id': number;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateWebhook {
    'url': string;
    'description': string;
    'events': Array<UpdateWebhook.EventsEnum>;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace UpdateWebhook {
    enum EventsEnum {
        HardBounce,
        SoftBounce,
        Blocked,
        Spam,
        Delivered,
        Request,
        Click,
        Invalid,
        Deferred,
        Opened,
        UniqueOpened,
        Unsubscribed,
        ListAddition,
        ContactUpdated,
        ContactDeleted
    }
}
export declare class UploadImageToGallery {
    'imageUrl': string;
    'name': string;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetChildInfo {
    'email': string;
    'firstName': string;
    'lastName': string;
    'companyName': string;
    'credits': GetChildInfoCredits;
    'statistics': GetChildInfoStatistics;
    'password': string;
    'ips': Array<string>;
    'apiKeys': GetChildInfoApiKeys;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedCampaignOverview {
    'id': number;
    'name': string;
    'subject': string;
    'type': GetExtendedCampaignOverview.TypeEnum;
    'status': GetExtendedCampaignOverview.StatusEnum;
    'scheduledAt': Date;
    'abTesting': boolean;
    'subjectA': string;
    'subjectB': string;
    'splitRule': number;
    'winnerCriteria': string;
    'winnerDelay': number;
    'sendAtBestTime': boolean;
    'testSent': boolean;
    'header': string;
    'footer': string;
    'sender': GetExtendedCampaignOverviewSender;
    'replyTo': string;
    'toField': string;
    'htmlContent': string;
    'shareLink': string;
    'tag': string;
    'createdAt': Date;
    'modifiedAt': Date;
    'inlineImageActivation': boolean;
    'mirrorActive': boolean;
    'recurring': boolean;
    'sentDate': Date;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetExtendedCampaignOverview {
    enum TypeEnum {
        Classic,
        Trigger
    }
    enum StatusEnum {
        Draft,
        Sent,
        Archive,
        Queued,
        Suspended,
        InProcess
    }
}
export declare class GetExtendedClient {
    'email': string;
    'firstName': string;
    'lastName': string;
    'companyName': string;
    'address': GetExtendedClientAddress;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedContactDetails {
    'email': string;
    'id': number;
    'emailBlacklisted': boolean;
    'smsBlacklisted': boolean;
    'createdAt': Date;
    'modifiedAt': Date;
    'listIds': Array<number>;
    'listUnsubscribed': Array<number>;
    'attributes': any;
    'statistics': GetExtendedContactDetailsStatistics;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetExtendedList {
    'id': number;
    'name': string;
    'totalBlacklisted': number;
    'totalSubscribers': number;
    'folderId': number;
    'createdAt': Date;
    'campaignStats': Array<GetExtendedListCampaignStats>;
    'dynamicList': boolean;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetSmsCampaign {
    'id': number;
    'name': string;
    'status': GetSmsCampaign.StatusEnum;
    'content': string;
    'scheduledAt': Date;
    'sender': string;
    'createdAt': Date;
    'modifiedAt': Date;
    'recipients': any;
    'statistics': any;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetSmsCampaign {
    enum StatusEnum {
        Draft,
        Sent,
        Archive,
        Queued,
        Suspended,
        InProcess
    }
}
export declare class GetAccount {
    'email': string;
    'firstName': string;
    'lastName': string;
    'companyName': string;
    'address': GetExtendedClientAddress;
    'plan': Array<GetAccountPlan>;
    'relay': GetAccountRelay;
    'marketingAutomation': GetAccountMarketingAutomation;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GetEmailCampaign {
    'id': number;
    'name': string;
    'subject': string;
    'type': GetEmailCampaign.TypeEnum;
    'status': GetEmailCampaign.StatusEnum;
    'scheduledAt': Date;
    'abTesting': boolean;
    'subjectA': string;
    'subjectB': string;
    'splitRule': number;
    'winnerCriteria': string;
    'winnerDelay': number;
    'sendAtBestTime': boolean;
    'testSent': boolean;
    'header': string;
    'footer': string;
    'sender': GetExtendedCampaignOverviewSender;
    'replyTo': string;
    'toField': string;
    'htmlContent': string;
    'shareLink': string;
    'tag': string;
    'createdAt': Date;
    'modifiedAt': Date;
    'inlineImageActivation': boolean;
    'mirrorActive': boolean;
    'recurring': boolean;
    'sentDate': Date;
    'recipients': any;
    'statistics': any;
    static discriminator: undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetEmailCampaign {
    enum TypeEnum {
        Classic,
        Trigger
    }
    enum StatusEnum {
        Draft,
        Sent,
        Archive,
        Queued,
        Suspended,
        InProcess
    }
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export declare enum AccountApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class AccountApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AccountApiApiKeys, value: string): void;
    getAccount(): Promise<{
        response: http.IncomingMessage;
        body: GetAccount;
    }>;
}
export declare enum AttributesApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class AttributesApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AttributesApiApiKeys, value: string): void;
    createAttribute(attributeCategory: string, attributeName: string, createAttribute: CreateAttribute): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteAttribute(attributeCategory: string, attributeName: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getAttributes(): Promise<{
        response: http.IncomingMessage;
        body: GetAttributes;
    }>;
    updateAttribute(attributeCategory: string, attributeName: string, updateAttribute: UpdateAttribute): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum ContactsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class ContactsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ContactsApiApiKeys, value: string): void;
    addContactToList(listId: number, contactEmails: AddContactToList): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    createAttribute(attributeCategory: string, attributeName: string, createAttribute: CreateAttribute): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createContact(createContact: CreateContact): Promise<{
        response: http.IncomingMessage;
        body: CreateUpdateContactModel;
    }>;
    createFolder(createFolder: CreateUpdateFolder): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    createList(createList: CreateList): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteAttribute(attributeCategory: string, attributeName: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteContact(email: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteFolder(folderId: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteList(listId: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getAttributes(): Promise<{
        response: http.IncomingMessage;
        body: GetAttributes;
    }>;
    getContactInfo(email: string): Promise<{
        response: http.IncomingMessage;
        body: GetExtendedContactDetails;
    }>;
    getContactStats(email: string): Promise<{
        response: http.IncomingMessage;
        body: GetContactCampaignStats;
    }>;
    getContacts(limit?: number, offset?: number, modifiedSince?: Date): Promise<{
        response: http.IncomingMessage;
        body: GetContacts;
    }>;
    getContactsFromList(listId: number, modifiedSince?: Date, limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetContacts;
    }>;
    getFolder(folderId: number): Promise<{
        response: http.IncomingMessage;
        body: GetFolder;
    }>;
    getFolderLists(folderId: number, limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetFolderLists;
    }>;
    getFolders(limit: number, offset: number): Promise<{
        response: http.IncomingMessage;
        body: GetFolders;
    }>;
    getList(listId: number): Promise<{
        response: http.IncomingMessage;
        body: GetExtendedList;
    }>;
    getLists(limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetLists;
    }>;
    importContacts(requestContactImport: RequestContactImport): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    removeContactFromList(listId: number, contactEmails: RemoveContactFromList): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    requestContactExport(requestContactExport: RequestContactExport): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    updateAttribute(attributeCategory: string, attributeName: string, updateAttribute: UpdateAttribute): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateContact(email: string, updateContact: UpdateContact): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateFolder(folderId: number, updateFolder: CreateUpdateFolder): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateList(listId: number, updateList: UpdateList): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum EmailCampaignsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class EmailCampaignsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmailCampaignsApiApiKeys, value: string): void;
    createEmailCampaign(emailCampaigns: CreateEmailCampaign): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteEmailCampaign(campaignId: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    emailExportRecipients(campaignId: number, recipientExport?: EmailExportRecipients): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    getAbTestCampaignResult(campaignId: number): Promise<{
        response: http.IncomingMessage;
        body: AbTestCampaignResult;
    }>;
    getEmailCampaign(campaignId: number): Promise<{
        response: http.IncomingMessage;
        body: GetEmailCampaign;
    }>;
    getEmailCampaigns(type?: string, status?: string, startDate?: Date, endDate?: Date, limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetEmailCampaigns;
    }>;
    getSharedTemplateUrl(campaignId: number): Promise<{
        response: http.IncomingMessage;
        body: GetSharedTemplateUrl;
    }>;
    sendEmailCampaignNow(campaignId: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendReport(campaignId: number, sendReport: SendReport): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendTestEmail(campaignId: number, emailTo: SendTestEmail): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateCampaignStatus(campaignId: number, status: UpdateCampaignStatus): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateEmailCampaign(campaignId: number, emailCampaign: UpdateEmailCampaign): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    uploadImageToGallery(uploadImage: UploadImageToGallery): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum FoldersApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class FoldersApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: FoldersApiApiKeys, value: string): void;
    createFolder(createFolder: CreateUpdateFolder): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteFolder(folderId: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getFolder(folderId: number): Promise<{
        response: http.IncomingMessage;
        body: GetFolder;
    }>;
    getFolderLists(folderId: number, limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetFolderLists;
    }>;
    getFolders(limit: number, offset: number): Promise<{
        response: http.IncomingMessage;
        body: GetFolders;
    }>;
    updateFolder(folderId: number, updateFolder: CreateUpdateFolder): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum ListsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class ListsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ListsApiApiKeys, value: string): void;
    addContactToList(listId: number, contactEmails: AddContactToList): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    createList(createList: CreateList): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteList(listId: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getContactsFromList(listId: number, modifiedSince?: Date, limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetContacts;
    }>;
    getFolderLists(folderId: number, limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetFolderLists;
    }>;
    getList(listId: number): Promise<{
        response: http.IncomingMessage;
        body: GetExtendedList;
    }>;
    getLists(limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetLists;
    }>;
    removeContactFromList(listId: number, contactEmails: RemoveContactFromList): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    updateList(listId: number, updateList: UpdateList): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum ProcessApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class ProcessApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ProcessApiApiKeys, value: string): void;
    getProcess(processId: number): Promise<{
        response: http.IncomingMessage;
        body: GetProcess;
    }>;
    getProcesses(limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetProcesses;
    }>;
}
export declare enum ResellerApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class ResellerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ResellerApiApiKeys, value: string): void;
    addCredits(childAuthKey: string, addCredits: AddCredits): Promise<{
        response: http.IncomingMessage;
        body: RemainingCreditModel;
    }>;
    associateIpToChild(childAuthKey: string, ip: ManageIp): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createChildDomain(childAuthKey: string, addChildDomain: AddChildDomain): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createResellerChild(resellerChild?: CreateChild): Promise<{
        response: http.IncomingMessage;
        body: CreateReseller;
    }>;
    deleteChildDomain(childAuthKey: string, domainName: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteResellerChild(childAuthKey: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    dissociateIpFromChild(childAuthKey: string, ip: ManageIp): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getChildAccountCreationStatus(childAuthKey: string): Promise<{
        response: http.IncomingMessage;
        body: GetChildAccountCreationStatus;
    }>;
    getChildDomains(childAuthKey: string): Promise<{
        response: http.IncomingMessage;
        body: GetChildDomains;
    }>;
    getChildInfo(childAuthKey: string): Promise<{
        response: http.IncomingMessage;
        body: GetChildInfo;
    }>;
    getResellerChilds(limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetChildrenList;
    }>;
    getSsoToken(childAuthKey: string): Promise<{
        response: http.IncomingMessage;
        body: GetSsoToken;
    }>;
    removeCredits(childAuthKey: string, removeCredits: RemoveCredits): Promise<{
        response: http.IncomingMessage;
        body: RemainingCreditModel;
    }>;
    updateChildAccountStatus(childAuthKey: string, updateChildAccountStatus: UpdateChildAccountStatus): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateChildDomain(childAuthKey: string, domainName: string, updateChildDomain: UpdateChildDomain): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateResellerChild(childAuthKey: string, resellerChild: UpdateChild): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum SMSCampaignsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class SMSCampaignsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SMSCampaignsApiApiKeys, value: string): void;
    createSmsCampaign(createSmsCampaign: CreateSmsCampaign): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteSmsCampaign(campaignId: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getSmsCampaign(campaignId: number): Promise<{
        response: http.IncomingMessage;
        body: GetSmsCampaign;
    }>;
    getSmsCampaigns(status?: string, startDate?: Date, endDate?: Date, limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetSmsCampaigns;
    }>;
    requestSmsRecipientExport(campaignId: number, recipientExport?: RequestSmsRecipientExport): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    sendSmsCampaignNow(campaignId: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendSmsReport(campaignId: number, sendReport: SendReport): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendTestSms(campaignId: number, phoneNumber: SendTestSms): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateSmsCampaign(campaignId: number, updateSmsCampaign: UpdateSmsCampaign): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateSmsCampaignStatus(campaignId: number, status: UpdateCampaignStatus): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum SMTPApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class SMTPApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SMTPApiApiKeys, value: string): void;
    createSmtpTemplate(smtpTemplate: CreateSmtpTemplate): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteHardbounces(deleteHardbounces?: DeleteHardbounces): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteSmtpTemplate(templateId: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getAggregatedSmtpReport(startDate?: string, endDate?: string, days?: number, tag?: string): Promise<{
        response: http.IncomingMessage;
        body: GetAggregatedReport;
    }>;
    getEmailEventReport(limit?: number, offset?: number, startDate?: string, endDate?: string, days?: number, email?: string, event?: string, tags?: string, messageId?: string, templateId?: number): Promise<{
        response: http.IncomingMessage;
        body: GetEmailEventReport;
    }>;
    getSmtpReport(limit?: number, offset?: number, startDate?: string, endDate?: string, days?: number, tag?: string): Promise<{
        response: http.IncomingMessage;
        body: GetReports;
    }>;
    getSmtpTemplate(templateId: number): Promise<{
        response: http.IncomingMessage;
        body: GetSmtpTemplateOverview;
    }>;
    getSmtpTemplates(templateStatus?: boolean, limit?: number, offset?: number): Promise<{
        response: http.IncomingMessage;
        body: GetSmtpTemplates;
    }>;
    getTransacBlockedContacts(startDate?: string, endDate?: string, limit?: number, offset?: number, senders?: Array<string>): Promise<{
        response: http.IncomingMessage;
        body: GetTransacBlockedContacts;
    }>;
    getTransacEmailContent(uuid: string): Promise<{
        response: http.IncomingMessage;
        body: GetTransacEmailContent;
    }>;
    getTransacEmailsList(email?: string, templateId?: number, messageId?: string, startDate?: string, endDate?: string): Promise<{
        response: http.IncomingMessage;
        body: GetTransacEmailsList;
    }>;
    sendTemplate(templateId: number, sendEmail: SendEmail): Promise<{
        response: http.IncomingMessage;
        body: SendTemplateEmail;
    }>;
    sendTestTemplate(templateId: number, sendTestEmail: SendTestEmail): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendTransacEmail(sendSmtpEmail: SendSmtpEmail): Promise<{
        response: http.IncomingMessage;
        body: CreateSmtpEmail;
    }>;
    smtpBlockedContactsEmailDelete(email: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    smtpLogMessageIdDelete(messageId: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateSmtpTemplate(templateId: number, smtpTemplate: UpdateSmtpTemplate): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum SendersApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class SendersApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SendersApiApiKeys, value: string): void;
    createSender(sender?: CreateSender): Promise<{
        response: http.IncomingMessage;
        body: CreateSenderModel;
    }>;
    deleteSender(senderId: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getIps(): Promise<{
        response: http.IncomingMessage;
        body: GetIps;
    }>;
    getIpsFromSender(senderId: number): Promise<{
        response: http.IncomingMessage;
        body: GetIpsFromSender;
    }>;
    getSenders(ip?: string, domain?: string): Promise<{
        response: http.IncomingMessage;
        body: GetSendersList;
    }>;
    updateSender(senderId: number, sender?: UpdateSender): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum TransactionalSMSApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class TransactionalSMSApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TransactionalSMSApiApiKeys, value: string): void;
    getSmsEvents(limit?: number, startDate?: string, endDate?: string, offset?: number, days?: number, phoneNumber?: string, event?: string, tags?: string): Promise<{
        response: http.IncomingMessage;
        body: GetSmsEventReport;
    }>;
    getTransacAggregatedSmsReport(startDate?: string, endDate?: string, days?: number, tag?: string): Promise<{
        response: http.IncomingMessage;
        body: GetTransacAggregatedSmsReport;
    }>;
    getTransacSmsReport(startDate?: string, endDate?: string, days?: number, tag?: string): Promise<{
        response: http.IncomingMessage;
        body: GetTransacSmsReport;
    }>;
    sendTransacSms(sendTransacSms: SendTransacSms): Promise<{
        response: http.IncomingMessage;
        body: SendSms;
    }>;
}
export declare enum WebhooksApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class WebhooksApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: WebhooksApiApiKeys, value: string): void;
    createWebhook(createWebhook: CreateWebhook): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteWebhook(webhookId: number): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getWebhook(webhookId: number): Promise<{
        response: http.IncomingMessage;
        body: GetWebhook;
    }>;
    getWebhooks(type?: string): Promise<{
        response: http.IncomingMessage;
        body: GetWebhooks;
    }>;
    updateWebhook(webhookId: number, updateWebhook: UpdateWebhook): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
