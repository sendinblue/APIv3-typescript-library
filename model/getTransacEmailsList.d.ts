import { GetTransacEmailsListTransactionalEmails } from './getTransacEmailsListTransactionalEmails';
export declare class GetTransacEmailsList {
    'transactionalEmails'?: Array<GetTransacEmailsListTransactionalEmails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
