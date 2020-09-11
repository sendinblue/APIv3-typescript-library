import { GetSendersListSenders } from './getSendersListSenders';
export declare class GetSendersList {
    'senders'?: Array<GetSendersListSenders>;
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
