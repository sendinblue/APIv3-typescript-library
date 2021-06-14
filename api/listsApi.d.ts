/// <reference types="node" />
import http = require('http');
import { AddContactToList } from '../model/addContactToList';
import { CreateList } from '../model/createList';
import { CreateModel } from '../model/createModel';
import { GetContacts } from '../model/getContacts';
import { GetExtendedList } from '../model/getExtendedList';
import { GetFolderLists } from '../model/getFolderLists';
import { GetLists } from '../model/getLists';
import { PostContactInfo } from '../model/postContactInfo';
import { RemoveContactFromList } from '../model/removeContactFromList';
import { UpdateList } from '../model/updateList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ListsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class ListsApi {
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
    setApiKey(key: ListsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    addContactToList(listId: number, contactEmails: AddContactToList, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    createList(createList: CreateList, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteList(listId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getContactsFromList(listId: number, modifiedSince?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetContacts;
    }>;
    getFolderLists(folderId: number, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFolderLists;
    }>;
    getList(listId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetExtendedList;
    }>;
    getLists(limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetLists;
    }>;
    removeContactFromList(listId: number, contactEmails: RemoveContactFromList, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    updateList(listId: number, updateList: UpdateList, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
