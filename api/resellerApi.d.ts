/// <reference types="node" />
import http = require('http');
import { AddChildDomain } from '../model/addChildDomain';
import { AddCredits } from '../model/addCredits';
import { CreateChild } from '../model/createChild';
import { CreateReseller } from '../model/createReseller';
import { GetChildAccountCreationStatus } from '../model/getChildAccountCreationStatus';
import { GetChildDomain } from '../model/getChildDomain';
import { GetChildInfo } from '../model/getChildInfo';
import { GetChildrenList } from '../model/getChildrenList';
import { GetSsoToken } from '../model/getSsoToken';
import { ManageIp } from '../model/manageIp';
import { RemainingCreditModel } from '../model/remainingCreditModel';
import { RemoveCredits } from '../model/removeCredits';
import { UpdateChild } from '../model/updateChild';
import { UpdateChildAccountStatus } from '../model/updateChildAccountStatus';
import { UpdateChildDomain } from '../model/updateChildDomain';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ResellerApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class ResellerApi {
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
    setApiKey(key: ResellerApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    addCredits(childIdentifier: string, addCredits: AddCredits, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemainingCreditModel;
    }>;
    associateIpToChild(childIdentifier: string, ip: ManageIp, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createChildDomain(childIdentifier: string, addChildDomain: AddChildDomain, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createResellerChild(resellerChild?: CreateChild, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateReseller;
    }>;
    deleteChildDomain(childIdentifier: string, domainName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteResellerChild(childIdentifier: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    dissociateIpFromChild(childIdentifier: string, ip: ManageIp, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getChildAccountCreationStatus(childIdentifier: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetChildAccountCreationStatus;
    }>;
    getChildDomains(childIdentifier: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<GetChildDomain>;
    }>;
    getChildInfo(childIdentifier: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetChildInfo;
    }>;
    getResellerChilds(limit?: number, offset?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetChildrenList;
    }>;
    getSsoToken(childIdentifier: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSsoToken;
    }>;
    removeCredits(childIdentifier: string, removeCredits: RemoveCredits, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemainingCreditModel;
    }>;
    updateChildAccountStatus(childIdentifier: string, updateChildAccountStatus: UpdateChildAccountStatus, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateChildDomain(childIdentifier: string, domainName: string, updateChildDomain: UpdateChildDomain, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateResellerChild(childIdentifier: string, resellerChild: UpdateChild, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
