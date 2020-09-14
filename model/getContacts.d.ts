import { GetContactDetails } from './getContactDetails';
export declare class GetContacts {
    'contacts': Array<GetContactDetails>;
    'count': number;
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
