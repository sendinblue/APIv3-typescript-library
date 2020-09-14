/// <reference types="node" />
import http = require('http');
import { GetAccount } from '../model/getAccount';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AccountApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class AccountApi {
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
    setApiKey(key: AccountApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    getAccount(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAccount;
    }>;
}
