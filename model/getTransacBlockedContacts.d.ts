import { GetTransacBlockedContactsContacts } from './getTransacBlockedContactsContacts';
export declare class GetTransacBlockedContacts {
    'count'?: number;
    'contacts'?: Array<GetTransacBlockedContactsContacts>;
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
