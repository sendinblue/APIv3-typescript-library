import { GetTransacEmailContentEvents } from './getTransacEmailContentEvents';
export declare class GetTransacEmailContent {
    'email': string;
    'subject': string;
    'templateId'?: number;
    'date': string;
    'events': Array<GetTransacEmailContentEvents>;
    'body': string;
    'attachmentCount': number;
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
