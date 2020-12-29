/// <reference types="node" />
import http = require('http');
import { CreateModel } from '../model/createModel';
import { CreateUpdateFolder } from '../model/createUpdateFolder';
import { GetFolder } from '../model/getFolder';
import { GetFolderLists } from '../model/getFolderLists';
import { GetFolders } from '../model/getFolders';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum FoldersApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class FoldersApi {
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
    setApiKey(key: FoldersApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createFolder(createFolder: CreateUpdateFolder, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteFolder(folderId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getFolder(folderId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFolder;
    }>;
    getFolderLists(folderId: number, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFolderLists;
    }>;
    getFolders(limit: number, offset: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFolders;
    }>;
    updateFolder(folderId: number, updateFolder: CreateUpdateFolder, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
