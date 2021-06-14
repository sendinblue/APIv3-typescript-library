/// <reference types="node" />
import http = require('http');
import { BlockDomain } from '../model/blockDomain';
import { CreateModel } from '../model/createModel';
import { CreateSmtpEmail } from '../model/createSmtpEmail';
import { CreateSmtpTemplate } from '../model/createSmtpTemplate';
import { DeleteHardbounces } from '../model/deleteHardbounces';
import { GetAggregatedReport } from '../model/getAggregatedReport';
import { GetBlockedDomains } from '../model/getBlockedDomains';
import { GetEmailEventReport } from '../model/getEmailEventReport';
import { GetReports } from '../model/getReports';
import { GetSmtpTemplateOverview } from '../model/getSmtpTemplateOverview';
import { GetSmtpTemplates } from '../model/getSmtpTemplates';
import { GetTransacBlockedContacts } from '../model/getTransacBlockedContacts';
import { GetTransacEmailContent } from '../model/getTransacEmailContent';
import { GetTransacEmailsList } from '../model/getTransacEmailsList';
import { SendEmail } from '../model/sendEmail';
import { SendSmtpEmail } from '../model/sendSmtpEmail';
import { SendTemplateEmail } from '../model/sendTemplateEmail';
import { SendTestEmail } from '../model/sendTestEmail';
import { UpdateSmtpTemplate } from '../model/updateSmtpTemplate';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum TransactionalEmailsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class TransactionalEmailsApi {
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
    setApiKey(key: TransactionalEmailsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    blockNewDomain(blockDomain: BlockDomain, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createSmtpTemplate(smtpTemplate: CreateSmtpTemplate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteBlockedDomain(domain: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteHardbounces(deleteHardbounces?: DeleteHardbounces, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteSmtpTemplate(templateId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getAggregatedSmtpReport(startDate?: string, endDate?: string, days?: number, tag?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAggregatedReport;
    }>;
    getBlockedDomains(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetBlockedDomains;
    }>;
    getEmailEventReport(limit?: number, offset?: number, startDate?: string, endDate?: string, days?: number, email?: string, event?: 'bounces' | 'hardBounces' | 'softBounces' | 'delivered' | 'spam' | 'requests' | 'opened' | 'clicks' | 'invalid' | 'deferred' | 'blocked' | 'unsubscribed' | 'error', tags?: string, messageId?: string, templateId?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEmailEventReport;
    }>;
    getSmtpReport(limit?: number, offset?: number, startDate?: string, endDate?: string, days?: number, tag?: string, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetReports;
    }>;
    getSmtpTemplate(templateId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSmtpTemplateOverview;
    }>;
    getSmtpTemplates(templateStatus?: boolean, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSmtpTemplates;
    }>;
    getTransacBlockedContacts(startDate?: string, endDate?: string, limit?: number, offset?: number, senders?: Array<string>, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTransacBlockedContacts;
    }>;
    getTransacEmailContent(uuid: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTransacEmailContent;
    }>;
    getTransacEmailsList(email?: string, templateId?: number, messageId?: string, startDate?: string, endDate?: string, sort?: 'asc' | 'desc', limit?: number, offset?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTransacEmailsList;
    }>;
    sendTemplate(templateId: number, sendEmail: SendEmail, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SendTemplateEmail;
    }>;
    sendTestTemplate(templateId: number, sendTestEmail: SendTestEmail, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    sendTransacEmail(sendSmtpEmail: SendSmtpEmail, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSmtpEmail;
    }>;
    smtpBlockedContactsEmailDelete(email: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    smtpLogMessageIdDelete(messageId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateSmtpTemplate(templateId: number, smtpTemplate: UpdateSmtpTemplate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
