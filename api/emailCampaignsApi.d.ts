/// <reference types="node" />
import http = require('http');
import { AbTestCampaignResult } from '../model/abTestCampaignResult';
import { CreateEmailCampaign } from '../model/createEmailCampaign';
import { CreateModel } from '../model/createModel';
import { CreatedProcessId } from '../model/createdProcessId';
import { EmailExportRecipients } from '../model/emailExportRecipients';
import { GetEmailCampaign } from '../model/getEmailCampaign';
import { GetEmailCampaigns } from '../model/getEmailCampaigns';
import { GetSharedTemplateUrl } from '../model/getSharedTemplateUrl';
import { SendReport } from '../model/sendReport';
import { SendTestEmail } from '../model/sendTestEmail';
import { UpdateCampaignStatus } from '../model/updateCampaignStatus';
import { UpdateEmailCampaign } from '../model/updateEmailCampaign';
import { UploadImageToGallery } from '../model/uploadImageToGallery';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum EmailCampaignsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class EmailCampaignsApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'partnerKey': ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    defaultHeaders: any;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EmailCampaignsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createEmailCampaign(emailCampaigns: CreateEmailCampaign, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteEmailCampaign(campaignId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    emailExportRecipients(campaignId: number, recipientExport?: EmailExportRecipients, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    getAbTestCampaignResult(campaignId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AbTestCampaignResult;
    }>;
    getEmailCampaign(campaignId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEmailCampaign;
    }>;
    getEmailCampaigns(type?: 'classic' | 'trigger', status?: 'suspended' | 'archive' | 'sent' | 'queued' | 'draft' | 'inProcess', startDate?: string, endDate?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEmailCampaigns;
    }>;
    getSharedTemplateUrl(campaignId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSharedTemplateUrl;
    }>;
    sendEmailCampaignNow(campaignId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendReport(campaignId: number, sendReport: SendReport, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendTestEmail(campaignId: number, emailTo: SendTestEmail, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateCampaignStatus(campaignId: number, status: UpdateCampaignStatus, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateEmailCampaign(campaignId: number, emailCampaign: UpdateEmailCampaign, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    uploadImageToGallery(uploadImage: UploadImageToGallery, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
