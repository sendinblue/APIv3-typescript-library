/// <reference types="node" />
import http = require('http');
import { CreateModel } from '../model/createModel';
import { CreateSmsCampaign } from '../model/createSmsCampaign';
import { CreatedProcessId } from '../model/createdProcessId';
import { GetSmsCampaign } from '../model/getSmsCampaign';
import { GetSmsCampaigns } from '../model/getSmsCampaigns';
import { RequestSmsRecipientExport } from '../model/requestSmsRecipientExport';
import { SendReport } from '../model/sendReport';
import { SendTestSms } from '../model/sendTestSms';
import { UpdateCampaignStatus } from '../model/updateCampaignStatus';
import { UpdateSmsCampaign } from '../model/updateSmsCampaign';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum SMSCampaignsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class SMSCampaignsApi {
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
    setApiKey(key: SMSCampaignsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createSmsCampaign(createSmsCampaign: CreateSmsCampaign, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteSmsCampaign(campaignId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getSmsCampaign(campaignId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSmsCampaign;
    }>;
    getSmsCampaigns(status?: 'suspended' | 'archive' | 'sent' | 'queued' | 'draft' | 'inProcess', startDate?: string, endDate?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSmsCampaigns;
    }>;
    requestSmsRecipientExport(campaignId: number, recipientExport?: RequestSmsRecipientExport, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    sendSmsCampaignNow(campaignId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendSmsReport(campaignId: number, sendReport: SendReport, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendTestSms(campaignId: number, phoneNumber: SendTestSms, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateSmsCampaign(campaignId: number, updateSmsCampaign: UpdateSmsCampaign, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateSmsCampaignStatus(campaignId: number, status: UpdateCampaignStatus, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
