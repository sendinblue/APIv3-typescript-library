export declare class ErrorModel {
    'code': ErrorModel.CodeEnum;
    'message': string;
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
export declare namespace ErrorModel {
    enum CodeEnum {
        InvalidParameter,
        MissingParameter,
        OutOfRange,
        CampaignProcessing,
        CampaignSent,
        DocumentNotFound,
        ResellerPermissionDenied,
        NotEnoughCredits,
        PermissionDenied,
        DuplicateParameter,
        DuplicateRequest,
        MethodNotAllowed,
        Unauthorized,
        AccountUnderValidation,
        NotAcceptable
    }
}
