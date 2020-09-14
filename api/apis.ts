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

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [AccountApi, AttributesApi, ContactsApi, EmailCampaignsApi, FoldersApi, ListsApi, ProcessApi, ResellerApi, SMSCampaignsApi, SendersApi, TransactionalEmailsApi, TransactionalSMSApi, WebhooksApi];
