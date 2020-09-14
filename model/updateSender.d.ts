import { CreateSenderIps } from './createSenderIps';
export declare class UpdateSender {
    'name'?: string;
    'email'?: string;
    'ips'?: Array<CreateSenderIps>;
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
