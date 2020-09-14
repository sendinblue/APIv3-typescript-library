/// <reference types="node" />
import http = require('http');
import { CreateSender } from '../model/createSender';
import { CreateSenderModel } from '../model/createSenderModel';
import { GetIps } from '../model/getIps';
import { GetIpsFromSender } from '../model/getIpsFromSender';
import { GetSendersList } from '../model/getSendersList';
import { UpdateSender } from '../model/updateSender';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum SendersApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class SendersApi {
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
    setApiKey(key: SendersApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createSender(sender?: CreateSender, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSenderModel;
    }>;
    deleteSender(senderId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getIps(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetIps;
    }>;
    getIpsFromSender(senderId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetIpsFromSender;
    }>;
    getSenders(ip?: string, domain?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSendersList;
    }>;
    updateSender(senderId: number, sender?: UpdateSender, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
