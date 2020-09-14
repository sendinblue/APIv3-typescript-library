export declare class GetDeviceBrowserStats {
    'clickers': number;
    'uniqueClicks': number;
    'viewed': number;
    'uniqueViews': number;
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
