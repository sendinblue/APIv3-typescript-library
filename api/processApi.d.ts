/// <reference types="node" />
import http = require('http');
import { GetProcess } from '../model/getProcess';
import { GetProcesses } from '../model/getProcesses';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ProcessApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class ProcessApi {
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
    setApiKey(key: ProcessApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    getProcess(processId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetProcess;
    }>;
    getProcesses(limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetProcesses;
    }>;
}
