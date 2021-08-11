/// <reference types="node" />
import * as localVarRequest from 'request';
import * as http from 'http';
export declare class AbTestCampaignResult {
    'winningVersion'?: AbTestCampaignResult.WinningVersionEnum;
    'winningCriteria'?: AbTestCampaignResult.WinningCriteriaEnum;
    'winningSubjectLine'?: string;
    'openRate'?: string;
    'clickRate'?: string;
    'winningVersionRate'?: string;
    'statistics'?: AbTestCampaignResultStatistics;
    'clickedLinks'?: AbTestCampaignResultClickedLinks;
    static discriminator: string | undefined;
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
export declare class AbTestCampaignResultClickedLinks {
    'versionA': AbTestVersionClicks;
    'versionB': AbTestVersionClicks;
    static discriminator: string | undefined;
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
export declare class AbTestCampaignResultStatistics {
    'openers': AbTestVersionStats;
    'clicks': AbTestVersionStats;
    'unsubscribed': AbTestVersionStats;
    'hardBounces': AbTestVersionStats;
    'softBounces': AbTestVersionStats;
    'complaints': AbTestVersionStats;
    static discriminator: string | undefined;
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
export declare class AbTestVersionClicks extends Array<AbTestVersionClicksInner> {
    static discriminator: string | undefined;
}
export declare class AbTestVersionClicksInner {
    'link': string;
    'clicksCount': number;
    'clickRate': string;
    static discriminator: string | undefined;
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
export declare class AbTestVersionStats {
    'versionA': string;
    'versionB': string;
    static discriminator: string | undefined;
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
export declare class AddChildDomain {
    'domain'?: string;
    static discriminator: string | undefined;
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
    'emails'?: Array<string>;
    'ids'?: Array<number>;
    static discriminator: string | undefined;
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
    'sms'?: number;
    'email'?: number;
    static discriminator: string | undefined;
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
export declare class BlockDomain {
    'domain': string;
    static discriminator: string | undefined;
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
    'value'?: string;
    'enumeration'?: Array<CreateAttributeEnumeration>;
    'type'?: CreateAttribute.TypeEnum;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'language'?: CreateChild.LanguageEnum;
    static discriminator: string | undefined;
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
export declare namespace CreateChild {
    enum LanguageEnum {
        Fr,
        Es,
        Pt,
        It,
        De,
        En
    }
}
export declare class CreateContact {
    'email'?: string;
    'attributes'?: any;
    'emailBlacklisted'?: boolean;
    'smsBlacklisted'?: boolean;
    'listIds'?: Array<number>;
    'updateEnabled'?: boolean;
    'smtpBlacklistSender'?: Array<string>;
    static discriminator: string | undefined;
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
export declare class CreateDoiContact {
    'email': string;
    'attributes'?: any;
    'includeListIds': Array<number>;
    'excludeListIds'?: Array<number>;
    'templateId': number;
    'redirectionUrl': string;
    static discriminator: string | undefined;
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
    'tag'?: string;
    'sender': CreateEmailCampaignSender;
    'name': string;
    'htmlContent'?: string;
    'htmlUrl'?: string;
    'templateId'?: number;
    'scheduledAt'?: string;
    'subject'?: string;
    'replyTo'?: string;
    'toField'?: string;
    'recipients'?: CreateEmailCampaignRecipients;
    'attachmentUrl'?: string;
    'inlineImageActivation'?: boolean;
    'mirrorActive'?: boolean;
    'footer'?: string;
    'header'?: string;
    'utmCampaign'?: string;
    'params'?: any;
    'sendAtBestTime'?: boolean;
    'abTesting'?: boolean;
    'subjectA'?: string;
    'subjectB'?: string;
    'splitRule'?: number;
    'winnerCriteria'?: CreateEmailCampaign.WinnerCriteriaEnum;
    'winnerDelay'?: number;
    'ipWarmupEnable'?: boolean;
    'initialQuota'?: number;
    'increaseRate'?: number;
    static discriminator: string | undefined;
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
    'exclusionListIds'?: Array<number>;
    'listIds'?: Array<number>;
    static discriminator: string | undefined;
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
    'name'?: string;
    'email': string;
    'id'?: number;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'id'?: number;
    static discriminator: string | undefined;
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
    'ips'?: Array<CreateSenderIps>;
    static discriminator: string | undefined;
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
    'weight'?: number;
    static discriminator: string | undefined;
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
    'spfError'?: boolean;
    'dkimError'?: boolean;
    static discriminator: string | undefined;
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
    'recipients'?: CreateSmsCampaignRecipients;
    'scheduledAt'?: string;
    static discriminator: string | undefined;
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
    'exclusionListIds'?: Array<number>;
    static discriminator: string | undefined;
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
    'messageId'?: string;
    'messageIds'?: Array<string>;
    static discriminator: string | undefined;
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
    'tag'?: string;
    'sender': CreateSmtpTemplateSender;
    'templateName': string;
    'htmlContent'?: string;
    'htmlUrl'?: string;
    'subject': string;
    'replyTo'?: string;
    'toField'?: string;
    'attachmentUrl'?: string;
    'isActive'?: boolean;
    static discriminator: string | undefined;
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
    'name'?: string;
    'email'?: string;
    'id'?: number;
    static discriminator: string | undefined;
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
    'id'?: number;
    static discriminator: string | undefined;
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
    'name'?: string;
    static discriminator: string | undefined;
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
    'description'?: string;
    'events': Array<CreateWebhook.EventsEnum>;
    'type'?: CreateWebhook.TypeEnum;
    static discriminator: string | undefined;
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
        Sent,
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
    static discriminator: string | undefined;
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
    'startDate'?: string;
    'endDate'?: string;
    'contactEmail'?: string;
    static discriminator: string | undefined;
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
    'notifyURL'?: string;
    'recipientsType': EmailExportRecipients.RecipientsTypeEnum;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'key'?: string;
    'enabled': boolean;
    static discriminator: string | undefined;
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
    'startDate'?: string;
    'endDate'?: string;
    'userLimit'?: number;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'range'?: string;
    'requests'?: number;
    'delivered'?: number;
    'hardBounces'?: number;
    'softBounces'?: number;
    'clicks'?: number;
    'uniqueClicks'?: number;
    'opens'?: number;
    'uniqueOpens'?: number;
    'spamReports'?: number;
    'blocked'?: number;
    'invalid'?: number;
    'unsubscribed'?: number;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'type'?: GetAttributesAttributes.TypeEnum;
    'enumeration'?: Array<GetAttributesEnumeration>;
    'calculatedValue'?: string;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
export declare class GetBlockedDomains {
    'domains': Array<string>;
    static discriminator: string | undefined;
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
    'subject'?: string;
    'type': GetCampaignOverview.TypeEnum;
    'status': GetCampaignOverview.StatusEnum;
    'scheduledAt'?: string;
    'abTesting'?: boolean;
    'subjectA'?: string;
    'subjectB'?: string;
    'splitRule'?: number;
    'winnerCriteria'?: string;
    'winnerDelay'?: number;
    'sendAtBestTime'?: boolean;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'listId'?: number;
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
    'deferred'?: number;
    'returnBounce'?: number;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'domain'?: string;
    'active'?: boolean;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
}
export declare class GetChildInfoApiKeys {
    'v2': Array<GetChildInfoApiKeysV2>;
    'v3'?: Array<GetChildInfoApiKeysV3>;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'emailCredits'?: number;
    'smsCredits'?: number;
    static discriminator: string | undefined;
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
    'previousMonthTotalSent'?: number;
    'currentMonthTotalSent'?: number;
    'totalSent'?: number;
    static discriminator: string | undefined;
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
    'children'?: Array<any>;
    'count'?: number;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
export declare class GetChildInfo extends GetClient {
    'credits'?: GetChildInfoCredits;
    'statistics'?: GetChildInfoStatistics;
    'password': string;
    'ips'?: Array<string>;
    'apiKeys'?: GetChildInfoApiKeys;
    static discriminator: string | undefined;
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
    'messagesSent'?: Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'hardBounces'?: Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'softBounces'?: Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'complaints'?: Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'unsubscriptions'?: GetContactCampaignStatsUnsubscriptions;
    'opened'?: Array<GetContactCampaignStatsOpened>;
    'clicked'?: Array<GetContactCampaignStatsClicked>;
    'transacAttributes'?: Array<GetContactCampaignStatsTransacAttributes>;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'eventTime': string;
    'ip': string;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'createdAt': string;
    'modifiedAt': string;
    'listIds': Array<number>;
    'listUnsubscribed'?: Array<number>;
    'attributes': any;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
}
export declare class GetEmailCampaigns {
    'campaigns'?: Array<any>;
    'count'?: number;
    static discriminator: string | undefined;
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
    'events'?: Array<GetEmailEventReportEvents>;
    static discriminator: string | undefined;
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
    'date': string;
    'subject'?: string;
    'messageId': string;
    'event': GetEmailEventReportEvents.EventEnum;
    'reason'?: string;
    'tag'?: string;
    'ip'?: string;
    'link'?: string;
    'from'?: string;
    'templateId'?: number;
    static discriminator: string | undefined;
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
        Unsubscribed,
        Error
    }
}
export declare class GetExtendedCampaignOverview extends GetCampaignOverview {
    'testSent': boolean;
    'header': string;
    'footer': string;
    'sender': GetExtendedCampaignOverviewSender;
    'replyTo': string;
    'toField'?: string;
    'htmlContent': string;
    'shareLink'?: string;
    'tag'?: string;
    'createdAt': string;
    'modifiedAt': string;
    'inlineImageActivation'?: boolean;
    'mirrorActive'?: boolean;
    'recurring'?: boolean;
    'sentDate'?: string;
    'returnBounce'?: number;
    static discriminator: string | undefined;
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
export declare class GetEmailCampaign extends GetExtendedCampaignOverview {
    'recipients': GetSmsCampaignRecipients;
    'statistics': GetSmsCampaignRecipients;
    static discriminator: string | undefined;
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
}
export declare class GetExtendedCampaignOverviewSender {
    'name'?: string;
    'email'?: string;
    'id'?: string;
    static discriminator: string | undefined;
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
    'globalStats': GetExtendedCampaignStatsGlobalStats;
    'campaignStats': Array<any>;
    'mirrorClick': number;
    'remaining': number;
    'linksStats': any;
    'statsByDomain': GetStatsByDomain;
    'statsByDevice': GetStatsByDevice;
    'statsByBrowser': GetStatsByBrowser;
    static discriminator: string | undefined;
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
export declare class GetExtendedCampaignStatsGlobalStats {
    static discriminator: string | undefined;
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
export declare class GetExtendedClient extends GetClient {
    'address': GetExtendedClientAddress;
    static discriminator: string | undefined;
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
export declare class GetAccount extends GetExtendedClient {
    'plan': Array<GetAccountPlan>;
    'relay': GetAccountRelay;
    'marketingAutomation'?: GetAccountMarketingAutomation;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
export declare class GetExtendedContactDetails extends GetContactDetails {
    'statistics': GetExtendedContactDetailsStatistics;
    static discriminator: string | undefined;
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
    'messagesSent'?: Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'hardBounces'?: Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'softBounces'?: Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'complaints'?: Array<GetExtendedContactDetailsStatisticsMessagesSent>;
    'unsubscriptions'?: GetExtendedContactDetailsStatisticsUnsubscriptions;
    'opened'?: Array<GetExtendedContactDetailsStatisticsOpened>;
    'clicked'?: Array<GetExtendedContactDetailsStatisticsClicked>;
    'transacAttributes'?: Array<any>;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'eventTime': string;
    'ip': string;
    'url': string;
    static discriminator: string | undefined;
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
    'eventTime': string;
    static discriminator: string | undefined;
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
    'eventTime': string;
    'ip': string;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'eventTime': string;
    'ip'?: string;
    static discriminator: string | undefined;
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
    'eventTime': string;
    'ip'?: string;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'lists'?: Array<any>;
    'count'?: number;
    static discriminator: string | undefined;
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
    'folders'?: Array<any>;
    'count'?: number;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'uniqueSubscribers': number;
    static discriminator: string | undefined;
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
export declare class GetExtendedList extends GetList {
    'folderId': number;
    'createdAt': string;
    'campaignStats'?: Array<GetExtendedListCampaignStats>;
    'dynamicList'?: boolean;
    static discriminator: string | undefined;
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
    'lists'?: Array<any>;
    'count'?: number;
    static discriminator: string | undefined;
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
    'exportUrl'?: string;
    static discriminator: string | undefined;
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
    'processes'?: Array<GetProcess>;
    'count'?: number;
    static discriminator: string | undefined;
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
    'reports'?: Array<GetReportsReports>;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'senders'?: Array<GetSendersListSenders>;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'ips'?: Array<GetSendersListIps>;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
}
export declare class GetSmsCampaignOverview {
    'id': number;
    'name': string;
    'status': GetSmsCampaignOverview.StatusEnum;
    'content': string;
    'scheduledAt'?: string;
    'sender': string;
    'createdAt': string;
    'modifiedAt': string;
    static discriminator: string | undefined;
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
export declare class GetSmsCampaign extends GetSmsCampaignOverview {
    'recipients': GetSmsCampaignRecipients;
    'statistics': GetSmsCampaignRecipients;
    static discriminator: string | undefined;
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
export declare class GetSmsCampaignRecipients {
    static discriminator: string | undefined;
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
export declare class GetSmsCampaignStats {
    'delivered': number;
    'sent': number;
    'processing': number;
    'softBounces': number;
    'hardBounces': number;
    'unsubscriptions': number;
    'answered': number;
    static discriminator: string | undefined;
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
    'campaigns'?: Array<any>;
    'count'?: number;
    static discriminator: string | undefined;
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
    'events'?: Array<GetSmsEventReportEvents>;
    static discriminator: string | undefined;
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
    'phoneNumber'?: string;
    'date'?: string;
    'messageId'?: string;
    'event'?: GetSmsEventReportEvents.EventEnum;
    'reason'?: string;
    'reply'?: string;
    'tag'?: string;
    static discriminator: string | undefined;
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
    'createdAt': string;
    'modifiedAt': string;
    'doiTemplate'?: boolean;
    static discriminator: string | undefined;
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
    'name'?: string;
    'email'?: string;
    'id'?: string;
    static discriminator: string | undefined;
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
    'count'?: number;
    'templates'?: Array<GetSmtpTemplateOverview>;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare class GetStatsByDevice {
    'desktop'?: {
        [key: string]: GetDeviceBrowserStats;
    };
    'mobile'?: {
        [key: string]: GetDeviceBrowserStats;
    };
    'tablet'?: {
        [key: string]: GetDeviceBrowserStats;
    };
    'unknown'?: {
        [key: string]: GetDeviceBrowserStats;
    };
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare class GetTransacAggregatedSmsReport {
    'range'?: string;
    'requests'?: number;
    'delivered'?: number;
    'hardBounces'?: number;
    'softBounces'?: number;
    'blocked'?: number;
    'unsubscribed'?: number;
    'replied'?: number;
    'accepted'?: number;
    'rejected'?: number;
    static discriminator: string | undefined;
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
    'count'?: number;
    'contacts'?: Array<GetTransacBlockedContactsContacts>;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'code'?: GetTransacBlockedContactsReason.CodeEnum;
    'message'?: string;
    static discriminator: string | undefined;
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
    'templateId'?: number;
    'date': string;
    'events': Array<GetTransacEmailContentEvents>;
    'body': string;
    'attachmentCount': number;
    static discriminator: string | undefined;
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
    'time': string;
    static discriminator: string | undefined;
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
    'count'?: number;
    'transactionalEmails'?: Array<GetTransacEmailsListTransactionalEmails>;
    static discriminator: string | undefined;
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
    'templateId'?: number;
    'messageId': string;
    'uuid': string;
    'date': string;
    'from'?: string;
    'tags'?: Array<string>;
    static discriminator: string | undefined;
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
    'reports'?: Array<GetTransacSmsReportReports>;
    static discriminator: string | undefined;
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
    'date'?: string;
    'requests'?: number;
    'delivered'?: number;
    'hardBounces'?: number;
    'softBounces'?: number;
    'blocked'?: number;
    'unsubscribed'?: number;
    'replied'?: number;
    'accepted'?: number;
    'rejected'?: number;
    static discriminator: string | undefined;
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
    'createdAt': string;
    'modifiedAt': string;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'ip'?: string;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'success'?: Array<string>;
    'failure'?: Array<string>;
    'total'?: number;
    'processId'?: number;
    static discriminator: string | undefined;
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
    'unexistingEmails'?: Array<string>;
    'withoutListEmails'?: Array<string>;
    'blackListedEmails'?: Array<string>;
    static discriminator: string | undefined;
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
    'unexistingSms'?: Array<string>;
    'withoutListSms'?: Array<string>;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'emails'?: Array<string>;
    'ids'?: Array<number>;
    'all'?: boolean;
    static discriminator: string | undefined;
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
    'sms'?: number;
    'email'?: number;
    static discriminator: string | undefined;
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
    'exportAttributes'?: Array<string>;
    'contactFilter'?: any;
    'customContactFilter'?: RequestContactExportCustomContactFilter;
    'notifyUrl'?: string;
    static discriminator: string | undefined;
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
    'actionForContacts'?: RequestContactExportCustomContactFilter.ActionForContactsEnum;
    'actionForEmailCampaigns'?: RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum;
    'actionForSmsCampaigns'?: RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum;
    'listId'?: number;
    'emailCampaignId'?: number;
    'smsCampaignId'?: number;
    static discriminator: string | undefined;
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
    'fileUrl'?: string;
    'fileBody'?: string;
    'listIds'?: Array<number>;
    'notifyUrl'?: string;
    'newList'?: RequestContactImportNewList;
    'emailBlacklist'?: boolean;
    'smsBlacklist'?: boolean;
    'updateExistingContacts'?: boolean;
    'emptyContactsAttributes'?: boolean;
    static discriminator: string | undefined;
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
    'listName'?: string;
    'folderId'?: number;
    static discriminator: string | undefined;
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
    'notifyURL'?: string;
    'recipientsType': RequestSmsRecipientExport.RecipientsTypeEnum;
    static discriminator: string | undefined;
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
export declare class SendReport {
    'language'?: SendReport.LanguageEnum;
    'email': SendReportEmail;
    static discriminator: string | undefined;
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
    'to': Array<string>;
    'body': string;
    static discriminator: string | undefined;
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
export declare class SendSms {
    'reference': string;
    'messageId': number;
    'smsCount'?: number;
    'usedCredits'?: number;
    'remainingCredits'?: number;
    static discriminator: string | undefined;
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
    'sender'?: SendSmtpEmailSender;
    'to'?: Array<SendSmtpEmailTo>;
    'bcc'?: Array<SendSmtpEmailBcc>;
    'cc'?: Array<SendSmtpEmailCc>;
    'htmlContent'?: string;
    'textContent'?: string;
    'subject'?: string;
    'replyTo'?: SendSmtpEmailReplyTo;
    'attachment'?: Array<SendSmtpEmailAttachment>;
    'headers'?: any;
    'templateId'?: number;
    'params'?: any;
    'messageVersions'?: Array<SendSmtpEmailMessageVersions>;
    'tags'?: Array<string>;
    static discriminator: string | undefined;
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
    'url'?: string;
    'content'?: string;
    'name'?: string;
    static discriminator: string | undefined;
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
    'name'?: string;
    static discriminator: string | undefined;
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
    'name'?: string;
    static discriminator: string | undefined;
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
export declare class SendSmtpEmailMessageVersions {
    'to': Array<SendSmtpEmailTo1>;
    'params'?: {
        [key: string]: any;
    };
    'bcc'?: Array<SendSmtpEmailBcc>;
    'cc'?: Array<SendSmtpEmailCc>;
    'replyTo'?: SendSmtpEmailReplyTo1;
    'subject'?: string;
    static discriminator: string | undefined;
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
    'name'?: string;
    static discriminator: string | undefined;
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
export declare class SendSmtpEmailReplyTo1 {
    'email': string;
    'name'?: string;
    static discriminator: string | undefined;
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
    'name'?: string;
    'email'?: string;
    'id'?: number;
    static discriminator: string | undefined;
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
    'name'?: string;
    static discriminator: string | undefined;
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
export declare class SendSmtpEmailTo1 {
    'email': string;
    'name'?: string;
    static discriminator: string | undefined;
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
    'emailTo'?: Array<string>;
    static discriminator: string | undefined;
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
    'phoneNumber'?: string;
    static discriminator: string | undefined;
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
    'type'?: SendTransacSms.TypeEnum;
    'tag'?: string;
    'webUrl'?: string;
    static discriminator: string | undefined;
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
    'value'?: string;
    'enumeration'?: Array<UpdateAttributeEnumeration>;
    static discriminator: string | undefined;
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
    static discriminator: string | undefined;
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
    'status'?: UpdateCampaignStatus.StatusEnum;
    static discriminator: string | undefined;
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
    'email'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'companyName'?: string;
    'password'?: string;
    static discriminator: string | undefined;
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
    'transactionalEmail'?: boolean;
    'transactionalSms'?: boolean;
    'marketingAutomation'?: boolean;
    'smsCampaign'?: boolean;
    static discriminator: string | undefined;
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
    'domain'?: string;
    static discriminator: string | undefined;
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
    'attributes'?: any;
    'emailBlacklisted'?: boolean;
    'smsBlacklisted'?: boolean;
    'listIds'?: Array<number>;
    'unlinkListIds'?: Array<number>;
    'smtpBlacklistSender'?: Array<string>;
    static discriminator: string | undefined;
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
    'tag'?: string;
    'sender'?: UpdateEmailCampaignSender;
    'name'?: string;
    'htmlContent'?: string;
    'htmlUrl'?: string;
    'scheduledAt'?: string;
    'subject'?: string;
    'replyTo'?: string;
    'toField'?: string;
    'recipients'?: UpdateEmailCampaignRecipients;
    'attachmentUrl'?: string;
    'inlineImageActivation'?: boolean;
    'mirrorActive'?: boolean;
    'recurring'?: boolean;
    'footer'?: string;
    'header'?: string;
    'utmCampaign'?: string;
    'params'?: any;
    'sendAtBestTime'?: boolean;
    'abTesting'?: boolean;
    'subjectA'?: string;
    'subjectB'?: string;
    'splitRule'?: number;
    'winnerCriteria'?: UpdateEmailCampaign.WinnerCriteriaEnum;
    'winnerDelay'?: number;
    'ipWarmupEnable'?: boolean;
    'initialQuota'?: number;
    'increaseRate'?: number;
    static discriminator: string | undefined;
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
    'exclusionListIds'?: Array<number>;
    'listIds'?: Array<number>;
    static discriminator: string | undefined;
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
    'name'?: string;
    'email'?: string;
    'id'?: number;
    static discriminator: string | undefined;
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
    'name'?: string;
    'folderId'?: number;
    static discriminator: string | undefined;
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
    'name'?: string;
    'email'?: string;
    'ips'?: Array<CreateSenderIps>;
    static discriminator: string | undefined;
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
    'name'?: string;
    'sender'?: string;
    'content'?: string;
    'recipients'?: CreateSmsCampaignRecipients;
    'scheduledAt'?: string;
    static discriminator: string | undefined;
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
    'tag'?: string;
    'sender'?: UpdateSmtpTemplateSender;
    'templateName'?: string;
    'htmlContent'?: string;
    'htmlUrl'?: string;
    'subject'?: string;
    'replyTo'?: string;
    'toField'?: string;
    'attachmentUrl'?: string;
    'isActive'?: boolean;
    static discriminator: string | undefined;
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
    'name'?: string;
    'email'?: string;
    'id'?: number;
    static discriminator: string | undefined;
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
    'url'?: string;
    'description'?: string;
    'events'?: Array<UpdateWebhook.EventsEnum>;
    static discriminator: string | undefined;
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
    'name'?: string;
    static discriminator: string | undefined;
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AccountApiApiKeys, value: string): void;
    getAccount(options?: any): Promise<{
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AttributesApiApiKeys, value: string): void;
    createAttribute(attributeCategory: 'normal' | 'transactional' | 'category' | 'calculated' | 'global', attributeName: string, createAttribute: CreateAttribute, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteAttribute(attributeCategory: 'normal' | 'transactional' | 'category' | 'calculated' | 'global', attributeName: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getAttributes(options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetAttributes;
    }>;
    updateAttribute(attributeCategory: 'category' | 'calculated' | 'global', attributeName: string, updateAttribute: UpdateAttribute, options?: any): Promise<{
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ContactsApiApiKeys, value: string): void;
    addContactToList(listId: number, contactEmails: AddContactToList, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    createAttribute(attributeCategory: 'normal' | 'transactional' | 'category' | 'calculated' | 'global', attributeName: string, createAttribute: CreateAttribute, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createContact(createContact: CreateContact, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateUpdateContactModel;
    }>;
    createDoiContact(createDoiContact: CreateDoiContact, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createFolder(createFolder: CreateUpdateFolder, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    createList(createList: CreateList, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteAttribute(attributeCategory: 'normal' | 'transactional' | 'category' | 'calculated' | 'global', attributeName: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteContact(identifier: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteFolder(folderId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteList(listId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getAttributes(options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetAttributes;
    }>;
    getContactInfo(identifier: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetExtendedContactDetails;
    }>;
    getContactStats(identifier: string, startDate?: string, endDate?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetContactCampaignStats;
    }>;
    getContacts(limit?: number, offset?: number, modifiedSince?: string, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetContacts;
    }>;
    getContactsFromList(listId: number, modifiedSince?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetContacts;
    }>;
    getFolder(folderId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetFolder;
    }>;
    getFolderLists(folderId: number, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetFolderLists;
    }>;
    getFolders(limit: number, offset: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetFolders;
    }>;
    getList(listId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetExtendedList;
    }>;
    getLists(limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetLists;
    }>;
    importContacts(requestContactImport: RequestContactImport, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    removeContactFromList(listId: number, contactEmails: RemoveContactFromList, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    requestContactExport(requestContactExport: RequestContactExport, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    updateAttribute(attributeCategory: 'category' | 'calculated' | 'global', attributeName: string, updateAttribute: UpdateAttribute, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateContact(identifier: string, updateContact: UpdateContact, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateFolder(folderId: number, updateFolder: CreateUpdateFolder, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateList(listId: number, updateList: UpdateList, options?: any): Promise<{
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmailCampaignsApiApiKeys, value: string): void;
    createEmailCampaign(emailCampaigns: CreateEmailCampaign, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteEmailCampaign(campaignId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    emailExportRecipients(campaignId: number, recipientExport?: EmailExportRecipients, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    getAbTestCampaignResult(campaignId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: AbTestCampaignResult;
    }>;
    getEmailCampaign(campaignId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetEmailCampaign;
    }>;
    getEmailCampaigns(type?: 'classic' | 'trigger', status?: 'suspended' | 'archive' | 'sent' | 'queued' | 'draft' | 'inProcess', startDate?: string, endDate?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetEmailCampaigns;
    }>;
    getSharedTemplateUrl(campaignId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetSharedTemplateUrl;
    }>;
    sendEmailCampaignNow(campaignId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendReport(campaignId: number, sendReport: SendReport, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendTestEmail(campaignId: number, emailTo: SendTestEmail, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateCampaignStatus(campaignId: number, status: UpdateCampaignStatus, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateEmailCampaign(campaignId: number, emailCampaign: UpdateEmailCampaign, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    uploadImageToGallery(uploadImage: UploadImageToGallery, options?: any): Promise<{
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: FoldersApiApiKeys, value: string): void;
    createFolder(createFolder: CreateUpdateFolder, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteFolder(folderId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getFolder(folderId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetFolder;
    }>;
    getFolderLists(folderId: number, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetFolderLists;
    }>;
    getFolders(limit: number, offset: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetFolders;
    }>;
    updateFolder(folderId: number, updateFolder: CreateUpdateFolder, options?: any): Promise<{
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ListsApiApiKeys, value: string): void;
    addContactToList(listId: number, contactEmails: AddContactToList, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    createList(createList: CreateList, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteList(listId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getContactsFromList(listId: number, modifiedSince?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetContacts;
    }>;
    getFolderLists(folderId: number, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetFolderLists;
    }>;
    getList(listId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetExtendedList;
    }>;
    getLists(limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetLists;
    }>;
    removeContactFromList(listId: number, contactEmails: RemoveContactFromList, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    updateList(listId: number, updateList: UpdateList, options?: any): Promise<{
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ProcessApiApiKeys, value: string): void;
    getProcess(processId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetProcess;
    }>;
    getProcesses(limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ResellerApiApiKeys, value: string): void;
    addCredits(childIdentifier: string, addCredits: AddCredits, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RemainingCreditModel;
    }>;
    associateIpToChild(childIdentifier: string, ip: ManageIp, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createChildDomain(childIdentifier: string, addChildDomain: AddChildDomain, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createResellerChild(resellerChild?: CreateChild, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateReseller;
    }>;
    deleteChildDomain(childIdentifier: string, domainName: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteResellerChild(childIdentifier: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    dissociateIpFromChild(childIdentifier: string, ip: ManageIp, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getChildAccountCreationStatus(childIdentifier: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetChildAccountCreationStatus;
    }>;
    getChildDomains(childIdentifier: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetChildDomains;
    }>;
    getChildInfo(childIdentifier: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetChildInfo;
    }>;
    getResellerChilds(limit?: number, offset?: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetChildrenList;
    }>;
    getSsoToken(childIdentifier: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetSsoToken;
    }>;
    removeCredits(childIdentifier: string, removeCredits: RemoveCredits, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RemainingCreditModel;
    }>;
    updateChildAccountStatus(childIdentifier: string, updateChildAccountStatus: UpdateChildAccountStatus, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateChildDomain(childIdentifier: string, domainName: string, updateChildDomain: UpdateChildDomain, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateResellerChild(childIdentifier: string, resellerChild: UpdateChild, options?: any): Promise<{
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SMSCampaignsApiApiKeys, value: string): void;
    createSmsCampaign(createSmsCampaign: CreateSmsCampaign, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteSmsCampaign(campaignId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getSmsCampaign(campaignId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetSmsCampaign;
    }>;
    getSmsCampaigns(status?: 'suspended' | 'archive' | 'sent' | 'queued' | 'draft' | 'inProcess', startDate?: string, endDate?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetSmsCampaigns;
    }>;
    requestSmsRecipientExport(campaignId: number, recipientExport?: RequestSmsRecipientExport, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    sendSmsCampaignNow(campaignId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendSmsReport(campaignId: number, sendReport: SendReport, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendTestSms(campaignId: number, phoneNumber: SendTestSms, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateSmsCampaign(campaignId: number, updateSmsCampaign: UpdateSmsCampaign, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateSmsCampaignStatus(campaignId: number, status: UpdateCampaignStatus, options?: any): Promise<{
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SendersApiApiKeys, value: string): void;
    createSender(sender?: CreateSender, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateSenderModel;
    }>;
    deleteSender(senderId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getIps(options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetIps;
    }>;
    getIpsFromSender(senderId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetIpsFromSender;
    }>;
    getSenders(ip?: string, domain?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetSendersList;
    }>;
    updateSender(senderId: number, sender?: UpdateSender, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum TransactionalEmailsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class TransactionalEmailsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TransactionalEmailsApiApiKeys, value: string): void;
    blockNewDomain(blockDomain: BlockDomain, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createSmtpTemplate(smtpTemplate: CreateSmtpTemplate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteBlockedDomain(domain: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteHardbounces(deleteHardbounces?: DeleteHardbounces, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteSmtpTemplate(templateId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getAggregatedSmtpReport(startDate?: string, endDate?: string, days?: number, tag?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetAggregatedReport;
    }>;
    getBlockedDomains(options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetBlockedDomains;
    }>;
    getEmailEventReport(limit?: number, offset?: number, startDate?: string, endDate?: string, days?: number, email?: string, event?: 'bounces' | 'hardBounces' | 'softBounces' | 'delivered' | 'spam' | 'requests' | 'opened' | 'clicks' | 'invalid' | 'deferred' | 'blocked' | 'unsubscribed' | 'error', tags?: string, messageId?: string, templateId?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetEmailEventReport;
    }>;
    getSmtpReport(limit?: number, offset?: number, startDate?: string, endDate?: string, days?: number, tag?: string, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetReports;
    }>;
    getSmtpTemplate(templateId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetSmtpTemplateOverview;
    }>;
    getSmtpTemplates(templateStatus?: boolean, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetSmtpTemplates;
    }>;
    getTransacBlockedContacts(startDate?: string, endDate?: string, limit?: number, offset?: number, senders?: Array<string>, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetTransacBlockedContacts;
    }>;
    getTransacEmailContent(uuid: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetTransacEmailContent;
    }>;
    getTransacEmailsList(email?: string, templateId?: number, messageId?: string, startDate?: string, endDate?: string, sort?: 'asc' | 'desc', limit?: number, offset?: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetTransacEmailsList;
    }>;
    sendTestTemplate(templateId: number, sendTestEmail: SendTestEmail, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendTransacEmail(sendSmtpEmail: SendSmtpEmail, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateSmtpEmail;
    }>;
    smtpBlockedContactsEmailDelete(email: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    smtpLogMessageIdDelete(messageId: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateSmtpTemplate(templateId: number, smtpTemplate: UpdateSmtpTemplate, options?: any): Promise<{
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TransactionalSMSApiApiKeys, value: string): void;
    getSmsEvents(limit?: number, startDate?: string, endDate?: string, offset?: number, days?: number, phoneNumber?: string, event?: 'bounces' | 'hardBounces' | 'softBounces' | 'delivered' | 'sent' | 'accepted' | 'unsubscription' | 'replies' | 'blocked', tags?: string, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetSmsEventReport;
    }>;
    getTransacAggregatedSmsReport(startDate?: string, endDate?: string, days?: number, tag?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetTransacAggregatedSmsReport;
    }>;
    getTransacSmsReport(startDate?: string, endDate?: string, days?: number, tag?: string, sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetTransacSmsReport;
    }>;
    sendTransacSms(sendTransacSms: SendTransacSms, options?: any): Promise<{
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
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: WebhooksApiApiKeys, value: string): void;
    createWebhook(createWebhook: CreateWebhook, options?: any): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteWebhook(webhookId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getWebhook(webhookId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetWebhook;
    }>;
    getWebhooks(type?: 'marketing' | 'transactional', sort?: 'asc' | 'desc', options?: any): Promise<{
        response: http.IncomingMessage;
        body: GetWebhooks;
    }>;
    updateWebhook(webhookId: number, updateWebhook: UpdateWebhook, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
