import { RemainingCreditModelChild } from './remainingCreditModelChild';
import { RemainingCreditModelReseller } from './remainingCreditModelReseller';
export declare class RemainingCreditModel {
    'child': RemainingCreditModelChild;
    'reseller': RemainingCreditModelReseller;
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
