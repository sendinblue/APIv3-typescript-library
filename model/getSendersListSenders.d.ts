import { GetSendersListIps } from './getSendersListIps';
export declare class GetSendersListSenders {
    'id': number;
    'name': string;
    'email': string;
    'active': boolean;
    'ips'?: Array<GetSendersListIps>;
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
