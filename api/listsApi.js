"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const localVarRequest = require("request");
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
const defaultBasePath = 'https://api.sendinblue.com/v3';
var ListsApiApiKeys;
(function (ListsApiApiKeys) {
    ListsApiApiKeys[ListsApiApiKeys["apiKey"] = 0] = "apiKey";
    ListsApiApiKeys[ListsApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(ListsApiApiKeys = exports.ListsApiApiKeys || (exports.ListsApiApiKeys = {}));
class ListsApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {
            'user-agent': 'sendinblue_clientAPI/v2.2.2/ts-node'
        };
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'apiKey': new models_2.ApiKeyAuth('header', 'api-key'),
            'partnerKey': new models_2.ApiKeyAuth('header', 'partner-key'),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    set defaultHeaders(defaultHeaders) {
        if (defaultHeaders['user-agent'] && defaultHeaders['user-agent'].substr(0, 11).toLowerCase() !== 'sendinblue_') {
            this._defaultHeaders = this._defaultHeaders;
        }
        else {
            this._defaultHeaders = defaultHeaders;
        }
    }
    get defaultHeaders() {
        return this._defaultHeaders;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[ListsApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    addContactToList(listId, contactEmails, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/add'
                .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
            const localVarQueryParameters = {};
            const localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            const localVarFormParams = {};
            if (listId === null || listId === undefined) {
                throw new Error('Required parameter listId was null or undefined when calling addContactToList.');
            }
            if (contactEmails === null || contactEmails === undefined) {
                throw new Error('Required parameter contactEmails was null or undefined when calling addContactToList.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            const localVarUseFormData = false;
            const localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(contactEmails, "AddContactToList")
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.apiKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
            }
            if (this.authentications.partnerKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "PostContactInfo");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    createList(createList, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/lists';
            const localVarQueryParameters = {};
            const localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            const localVarFormParams = {};
            if (createList === null || createList === undefined) {
                throw new Error('Required parameter createList was null or undefined when calling createList.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            const localVarUseFormData = false;
            const localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(createList, "CreateList")
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.apiKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
            }
            if (this.authentications.partnerKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "CreateModel");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    deleteList(listId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/lists/{listId}'
                .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
            const localVarQueryParameters = {};
            const localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            const localVarFormParams = {};
            if (listId === null || listId === undefined) {
                throw new Error('Required parameter listId was null or undefined when calling deleteList.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            const localVarUseFormData = false;
            const localVarRequestOptions = {
                method: 'DELETE',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.apiKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
            }
            if (this.authentications.partnerKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    getContactsFromList(listId, modifiedSince, limit, offset, sort, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts'
                .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
            const localVarQueryParameters = {};
            const localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            const localVarFormParams = {};
            if (listId === null || listId === undefined) {
                throw new Error('Required parameter listId was null or undefined when calling getContactsFromList.');
            }
            if (modifiedSince !== undefined) {
                localVarQueryParameters['modifiedSince'] = models_1.ObjectSerializer.serialize(modifiedSince, "string");
            }
            if (limit !== undefined) {
                localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
            }
            if (offset !== undefined) {
                localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
            }
            if (sort !== undefined) {
                localVarQueryParameters['sort'] = models_1.ObjectSerializer.serialize(sort, "'asc' | 'desc'");
            }
            Object.assign(localVarHeaderParams, options.headers);
            const localVarUseFormData = false;
            const localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.apiKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
            }
            if (this.authentications.partnerKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "GetContacts");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    getFolderLists(folderId, limit, offset, sort, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/folders/{folderId}/lists'
                .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
            const localVarQueryParameters = {};
            const localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            const localVarFormParams = {};
            if (folderId === null || folderId === undefined) {
                throw new Error('Required parameter folderId was null or undefined when calling getFolderLists.');
            }
            if (limit !== undefined) {
                localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
            }
            if (offset !== undefined) {
                localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
            }
            if (sort !== undefined) {
                localVarQueryParameters['sort'] = models_1.ObjectSerializer.serialize(sort, "'asc' | 'desc'");
            }
            Object.assign(localVarHeaderParams, options.headers);
            const localVarUseFormData = false;
            const localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.apiKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
            }
            if (this.authentications.partnerKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "GetFolderLists");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    getList(listId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/lists/{listId}'
                .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
            const localVarQueryParameters = {};
            const localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            const localVarFormParams = {};
            if (listId === null || listId === undefined) {
                throw new Error('Required parameter listId was null or undefined when calling getList.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            const localVarUseFormData = false;
            const localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.apiKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
            }
            if (this.authentications.partnerKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "GetExtendedList");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    getLists(limit, offset, sort, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/lists';
            const localVarQueryParameters = {};
            const localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            const localVarFormParams = {};
            if (limit !== undefined) {
                localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
            }
            if (offset !== undefined) {
                localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
            }
            if (sort !== undefined) {
                localVarQueryParameters['sort'] = models_1.ObjectSerializer.serialize(sort, "'asc' | 'desc'");
            }
            Object.assign(localVarHeaderParams, options.headers);
            const localVarUseFormData = false;
            const localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.apiKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
            }
            if (this.authentications.partnerKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "GetLists");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    removeContactFromList(listId, contactEmails, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/remove'
                .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
            const localVarQueryParameters = {};
            const localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            const localVarFormParams = {};
            if (listId === null || listId === undefined) {
                throw new Error('Required parameter listId was null or undefined when calling removeContactFromList.');
            }
            if (contactEmails === null || contactEmails === undefined) {
                throw new Error('Required parameter contactEmails was null or undefined when calling removeContactFromList.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            const localVarUseFormData = false;
            const localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(contactEmails, "RemoveContactFromList")
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.apiKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
            }
            if (this.authentications.partnerKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "PostContactInfo");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    updateList(listId, updateList, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/lists/{listId}'
                .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
            const localVarQueryParameters = {};
            const localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            const localVarFormParams = {};
            if (listId === null || listId === undefined) {
                throw new Error('Required parameter listId was null or undefined when calling updateList.');
            }
            if (updateList === null || updateList === undefined) {
                throw new Error('Required parameter updateList was null or undefined when calling updateList.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            const localVarUseFormData = false;
            const localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(updateList, "UpdateList")
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.apiKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
            }
            if (this.authentications.partnerKey.apiKey) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
}
exports.ListsApi = ListsApi;
//# sourceMappingURL=listsApi.js.map