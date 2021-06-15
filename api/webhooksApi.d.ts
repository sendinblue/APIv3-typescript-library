/// <reference types="node" />
import http = require('http');
import { CreateModel } from '../model/createModel';
import { CreateWebhook } from '../model/createWebhook';
import { GetWebhook } from '../model/getWebhook';
import { GetWebhooks } from '../model/getWebhooks';
import { UpdateWebhook } from '../model/updateWebhook';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum WebhooksApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class WebhooksApi {
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
    setApiKey(key: WebhooksApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createWebhook(createWebhook: CreateWebhook, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteWebhook(webhookId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getWebhook(webhookId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWebhook;
    }>;
    getWebhooks(type?: 'marketing' | 'transactional', sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWebhooks;
    }>;
    updateWebhook(webhookId: number, updateWebhook: UpdateWebhook, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
