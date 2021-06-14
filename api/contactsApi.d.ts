/// <reference types="node" />
import http = require('http');
import { AddContactToList } from '../model/addContactToList';
import { CreateAttribute } from '../model/createAttribute';
import { CreateContact } from '../model/createContact';
import { CreateDoiContact } from '../model/createDoiContact';
import { CreateList } from '../model/createList';
import { CreateModel } from '../model/createModel';
import { CreateUpdateContactModel } from '../model/createUpdateContactModel';
import { CreateUpdateFolder } from '../model/createUpdateFolder';
import { CreatedProcessId } from '../model/createdProcessId';
import { GetAttributes } from '../model/getAttributes';
import { GetContactCampaignStats } from '../model/getContactCampaignStats';
import { GetContacts } from '../model/getContacts';
import { GetExtendedContactDetails } from '../model/getExtendedContactDetails';
import { GetExtendedList } from '../model/getExtendedList';
import { GetFolder } from '../model/getFolder';
import { GetFolderLists } from '../model/getFolderLists';
import { GetFolders } from '../model/getFolders';
import { GetLists } from '../model/getLists';
import { PostContactInfo } from '../model/postContactInfo';
import { RemoveContactFromList } from '../model/removeContactFromList';
import { RequestContactExport } from '../model/requestContactExport';
import { RequestContactImport } from '../model/requestContactImport';
import { UpdateAttribute } from '../model/updateAttribute';
import { UpdateContact } from '../model/updateContact';
import { UpdateList } from '../model/updateList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ContactsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class ContactsApi {
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
    setApiKey(key: ContactsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    addContactToList(listId: number, contactEmails: AddContactToList, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    createAttribute(attributeCategory: 'normal' | 'transactional' | 'category' | 'calculated' | 'global', attributeName: string, createAttribute: CreateAttribute, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createContact(createContact: CreateContact, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateUpdateContactModel;
    }>;
    createDoiContact(createDoiContact: CreateDoiContact, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createFolder(createFolder: CreateUpdateFolder, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    createList(createList: CreateList, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteAttribute(attributeCategory: 'normal' | 'transactional' | 'category' | 'calculated' | 'global', attributeName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteContact(identifier: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteFolder(folderId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteList(listId: number, options?: {
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
    getContactInfo(identifier: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetExtendedContactDetails;
    }>;
    getContactStats(identifier: string, startDate?: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetContactCampaignStats;
    }>;
    getContacts(limit?: number, offset?: number, modifiedSince?: string, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetContacts;
    }>;
    getContactsFromList(listId: number, modifiedSince?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetContacts;
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
    importContacts(requestContactImport: RequestContactImport, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    removeContactFromList(listId: number, contactEmails: RemoveContactFromList, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PostContactInfo;
    }>;
    requestContactExport(requestContactExport: RequestContactExport, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreatedProcessId;
    }>;
    updateAttribute(attributeCategory: 'category' | 'calculated' | 'global', attributeName: string, updateAttribute: UpdateAttribute, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateContact(identifier: string, updateContact: UpdateContact, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateFolder(folderId: number, updateFolder: CreateUpdateFolder, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
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
