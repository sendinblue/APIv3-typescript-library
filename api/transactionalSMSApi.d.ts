/// <reference types="node" />
import http = require('http');
import { GetSmsEventReport } from '../model/getSmsEventReport';
import { GetTransacAggregatedSmsReport } from '../model/getTransacAggregatedSmsReport';
import { GetTransacSmsReport } from '../model/getTransacSmsReport';
import { SendSms } from '../model/sendSms';
import { SendTransacSms } from '../model/sendTransacSms';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum TransactionalSMSApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class TransactionalSMSApi {
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
    setApiKey(key: TransactionalSMSApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    getSmsEvents(limit?: number, startDate?: string, endDate?: string, offset?: number, days?: number, phoneNumber?: string, event?: 'bounces' | 'hardBounces' | 'softBounces' | 'delivered' | 'sent' | 'accepted' | 'unsubscription' | 'replies' | 'blocked', tags?: string, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSmsEventReport;
    }>;
    getTransacAggregatedSmsReport(startDate?: string, endDate?: string, days?: number, tag?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTransacAggregatedSmsReport;
    }>;
    getTransacSmsReport(startDate?: string, endDate?: string, days?: number, tag?: string, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTransacSmsReport;
    }>;
    sendTransacSms(sendTransacSms: SendTransacSms, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SendSms;
    }>;
}
