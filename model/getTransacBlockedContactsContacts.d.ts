import { GetTransacBlockedContactsReason } from './getTransacBlockedContactsReason';
export declare class GetTransacBlockedContactsContacts {
    'email': string;
    'senderEmail': string;
    'reason': GetTransacBlockedContactsReason;
    'blockedAt': string;
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
