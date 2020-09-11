/// <reference types="node" />
export * from './accountApi';
import { AccountApi } from './accountApi';
export * from './attributesApi';
import { AttributesApi } from './attributesApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './emailCampaignsApi';
import { EmailCampaignsApi } from './emailCampaignsApi';
export * from './foldersApi';
import { FoldersApi } from './foldersApi';
export * from './listsApi';
import { ListsApi } from './listsApi';
export * from './processApi';
import { ProcessApi } from './processApi';
export * from './resellerApi';
import { ResellerApi } from './resellerApi';
export * from './sMSCampaignsApi';
import { SMSCampaignsApi } from './sMSCampaignsApi';
export * from './sendersApi';
import { SendersApi } from './sendersApi';
export * from './transactionalEmailsApi';
import { TransactionalEmailsApi } from './transactionalEmailsApi';
export * from './transactionalSMSApi';
import { TransactionalSMSApi } from './transactionalSMSApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as fs from 'fs';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare const APIS: (typeof AccountApi | typeof AttributesApi | typeof ContactsApi | typeof EmailCampaignsApi | typeof FoldersApi | typeof ListsApi | typeof ProcessApi | typeof ResellerApi | typeof SMSCampaignsApi | typeof SendersApi | typeof TransactionalEmailsApi | typeof TransactionalSMSApi | typeof WebhooksApi)[];
