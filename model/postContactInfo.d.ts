import { PostContactInfoContacts } from './postContactInfoContacts';
export declare class PostContactInfo {
    'contacts': PostContactInfoContacts;
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
