import { RequestContactImportNewList } from './requestContactImportNewList';
export declare class RequestContactImport {
    'fileUrl'?: string;
    'fileBody'?: string;
    'listIds'?: Array<number>;
    'notifyUrl'?: string;
    'newList'?: RequestContactImportNewList;
    'emailBlacklist'?: boolean;
    'smsBlacklist'?: boolean;
    'updateExistingContacts'?: boolean;
    'emptyContactsAttributes'?: boolean;
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
