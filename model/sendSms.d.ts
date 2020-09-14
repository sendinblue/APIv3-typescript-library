export declare class SendSms {
    'reference': string;
    'messageId': number;
    'smsCount'?: number;
    'usedCredits'?: number;
    'remainingCredits'?: number;
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
