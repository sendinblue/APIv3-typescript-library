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
var ContactsApiApiKeys;
(function (ContactsApiApiKeys) {
    ContactsApiApiKeys[ContactsApiApiKeys["apiKey"] = 0] = "apiKey";
    ContactsApiApiKeys[ContactsApiApiKeys["partnerKey"] = 1] = "partnerKey";
})(ContactsApiApiKeys = exports.ContactsApiApiKeys || (exports.ContactsApiApiKeys = {}));
class ContactsApi {
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
        this.authentications[ContactsApiApiKeys[key]].apiKey = value;
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
    createAttribute(attributeCategory, attributeName, createAttribute, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
                .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
                .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
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
            if (attributeCategory === null || attributeCategory === undefined) {
                throw new Error('Required parameter attributeCategory was null or undefined when calling createAttribute.');
            }
            if (attributeName === null || attributeName === undefined) {
                throw new Error('Required parameter attributeName was null or undefined when calling createAttribute.');
            }
            if (createAttribute === null || createAttribute === undefined) {
                throw new Error('Required parameter createAttribute was null or undefined when calling createAttribute.');
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
                body: models_1.ObjectSerializer.serialize(createAttribute, "CreateAttribute")
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
    createContact(createContact, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts';
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
            if (createContact === null || createContact === undefined) {
                throw new Error('Required parameter createContact was null or undefined when calling createContact.');
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
                body: models_1.ObjectSerializer.serialize(createContact, "CreateContact")
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
                            body = models_1.ObjectSerializer.deserialize(body, "CreateUpdateContactModel");
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
    createDoiContact(createDoiContact, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/doubleOptinConfirmation';
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
            if (createDoiContact === null || createDoiContact === undefined) {
                throw new Error('Required parameter createDoiContact was null or undefined when calling createDoiContact.');
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
                body: models_1.ObjectSerializer.serialize(createDoiContact, "CreateDoiContact")
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
    createFolder(createFolder, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/folders';
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
            if (createFolder === null || createFolder === undefined) {
                throw new Error('Required parameter createFolder was null or undefined when calling createFolder.');
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
                body: models_1.ObjectSerializer.serialize(createFolder, "CreateUpdateFolder")
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
    deleteAttribute(attributeCategory, attributeName, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
                .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
                .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
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
            if (attributeCategory === null || attributeCategory === undefined) {
                throw new Error('Required parameter attributeCategory was null or undefined when calling deleteAttribute.');
            }
            if (attributeName === null || attributeName === undefined) {
                throw new Error('Required parameter attributeName was null or undefined when calling deleteAttribute.');
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
    deleteContact(identifier, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/{identifier}'
                .replace('{' + 'identifier' + '}', encodeURIComponent(String(identifier)));
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
            if (identifier === null || identifier === undefined) {
                throw new Error('Required parameter identifier was null or undefined when calling deleteContact.');
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
    deleteFolder(folderId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/folders/{folderId}'
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
                throw new Error('Required parameter folderId was null or undefined when calling deleteFolder.');
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
    getAttributes(options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/attributes';
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
                            body = models_1.ObjectSerializer.deserialize(body, "GetAttributes");
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
    getContactInfo(identifier, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/{identifier}'
                .replace('{' + 'identifier' + '}', encodeURIComponent(String(identifier)));
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
            if (identifier === null || identifier === undefined) {
                throw new Error('Required parameter identifier was null or undefined when calling getContactInfo.');
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
                            body = models_1.ObjectSerializer.deserialize(body, "GetExtendedContactDetails");
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
    getContactStats(identifier, startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/{identifier}/campaignStats'
                .replace('{' + 'identifier' + '}', encodeURIComponent(String(identifier)));
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
            if (identifier === null || identifier === undefined) {
                throw new Error('Required parameter identifier was null or undefined when calling getContactStats.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "string");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "GetContactCampaignStats");
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
    getContacts(limit, offset, modifiedSince, sort, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts';
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
            if (modifiedSince !== undefined) {
                localVarQueryParameters['modifiedSince'] = models_1.ObjectSerializer.serialize(modifiedSince, "string");
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
    getFolder(folderId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/folders/{folderId}'
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
                throw new Error('Required parameter folderId was null or undefined when calling getFolder.');
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
                            body = models_1.ObjectSerializer.deserialize(body, "GetFolder");
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
    getFolders(limit, offset, sort, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/folders';
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
            if (limit === null || limit === undefined) {
                throw new Error('Required parameter limit was null or undefined when calling getFolders.');
            }
            if (offset === null || offset === undefined) {
                throw new Error('Required parameter offset was null or undefined when calling getFolders.');
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
                            body = models_1.ObjectSerializer.deserialize(body, "GetFolders");
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
    importContacts(requestContactImport, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/import';
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
            if (requestContactImport === null || requestContactImport === undefined) {
                throw new Error('Required parameter requestContactImport was null or undefined when calling importContacts.');
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
                body: models_1.ObjectSerializer.serialize(requestContactImport, "RequestContactImport")
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
                            body = models_1.ObjectSerializer.deserialize(body, "CreatedProcessId");
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
    requestContactExport(requestContactExport, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/export';
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
            if (requestContactExport === null || requestContactExport === undefined) {
                throw new Error('Required parameter requestContactExport was null or undefined when calling requestContactExport.');
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
                body: models_1.ObjectSerializer.serialize(requestContactExport, "RequestContactExport")
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
                            body = models_1.ObjectSerializer.deserialize(body, "CreatedProcessId");
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
    updateAttribute(attributeCategory, attributeName, updateAttribute, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/attributes/{attributeCategory}/{attributeName}'
                .replace('{' + 'attributeCategory' + '}', encodeURIComponent(String(attributeCategory)))
                .replace('{' + 'attributeName' + '}', encodeURIComponent(String(attributeName)));
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
            if (attributeCategory === null || attributeCategory === undefined) {
                throw new Error('Required parameter attributeCategory was null or undefined when calling updateAttribute.');
            }
            if (attributeName === null || attributeName === undefined) {
                throw new Error('Required parameter attributeName was null or undefined when calling updateAttribute.');
            }
            if (updateAttribute === null || updateAttribute === undefined) {
                throw new Error('Required parameter updateAttribute was null or undefined when calling updateAttribute.');
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
                body: models_1.ObjectSerializer.serialize(updateAttribute, "UpdateAttribute")
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
    updateContact(identifier, updateContact, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/{identifier}'
                .replace('{' + 'identifier' + '}', encodeURIComponent(String(identifier)));
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
            if (identifier === null || identifier === undefined) {
                throw new Error('Required parameter identifier was null or undefined when calling updateContact.');
            }
            if (updateContact === null || updateContact === undefined) {
                throw new Error('Required parameter updateContact was null or undefined when calling updateContact.');
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
                body: models_1.ObjectSerializer.serialize(updateContact, "UpdateContact")
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
    updateFolder(folderId, updateFolder, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/contacts/folders/{folderId}'
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
                throw new Error('Required parameter folderId was null or undefined when calling updateFolder.');
            }
            if (updateFolder === null || updateFolder === undefined) {
                throw new Error('Required parameter updateFolder was null or undefined when calling updateFolder.');
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
                body: models_1.ObjectSerializer.serialize(updateFolder, "CreateUpdateFolder")
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
exports.ContactsApi = ContactsApi;
//# sourceMappingURL=contactsApi.js.map