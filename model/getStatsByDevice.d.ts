import { GetDeviceBrowserStats } from './getDeviceBrowserStats';
export declare class GetStatsByDevice {
    'desktop'?: {
        [key: string]: GetDeviceBrowserStats;
    };
    'mobile'?: {
        [key: string]: GetDeviceBrowserStats;
    };
    'tablet'?: {
        [key: string]: GetDeviceBrowserStats;
    };
    'unknown'?: {
        [key: string]: GetDeviceBrowserStats;
    };
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
