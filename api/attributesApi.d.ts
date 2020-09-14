/// <reference types="node" />
import http = require('http');
import { CreateAttribute } from '../model/createAttribute';
import { GetAttributes } from '../model/getAttributes';
import { UpdateAttribute } from '../model/updateAttribute';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AttributesApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class AttributesApi {
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
    setApiKey(key: AttributesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createAttribute(attributeCategory: 'normal' | 'transactional' | 'category' | 'calculated' | 'global', attributeName: string, createAttribute: CreateAttribute, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteAttribute(attributeCategory: 'normal' | 'transactional' | 'category' | 'calculated' | 'global', attributeName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getAttributes(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAttributes;
    }>;
    updateAttribute(attributeCategory: 'category' | 'calculated' | 'global', attributeName: string, updateAttribute: UpdateAttribute, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
