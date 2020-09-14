"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorModel {
    static getAttributeTypeMap() {
        return ErrorModel.attributeTypeMap;
    }
}
ErrorModel.discriminator = undefined;
ErrorModel.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "ErrorModel.CodeEnum"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
exports.ErrorModel = ErrorModel;
(function (ErrorModel) {
    let CodeEnum;
    (function (CodeEnum) {
        CodeEnum[CodeEnum["InvalidParameter"] = 'invalid_parameter'] = "InvalidParameter";
        CodeEnum[CodeEnum["MissingParameter"] = 'missing_parameter'] = "MissingParameter";
        CodeEnum[CodeEnum["OutOfRange"] = 'out_of_range'] = "OutOfRange";
        CodeEnum[CodeEnum["CampaignProcessing"] = 'campaign_processing'] = "CampaignProcessing";
        CodeEnum[CodeEnum["CampaignSent"] = 'campaign_sent'] = "CampaignSent";
        CodeEnum[CodeEnum["DocumentNotFound"] = 'document_not_found'] = "DocumentNotFound";
        CodeEnum[CodeEnum["ResellerPermissionDenied"] = 'reseller_permission_denied'] = "ResellerPermissionDenied";
        CodeEnum[CodeEnum["NotEnoughCredits"] = 'not_enough_credits'] = "NotEnoughCredits";
        CodeEnum[CodeEnum["PermissionDenied"] = 'permission_denied'] = "PermissionDenied";
        CodeEnum[CodeEnum["DuplicateParameter"] = 'duplicate_parameter'] = "DuplicateParameter";
        CodeEnum[CodeEnum["DuplicateRequest"] = 'duplicate_request'] = "DuplicateRequest";
        CodeEnum[CodeEnum["MethodNotAllowed"] = 'method_not_allowed'] = "MethodNotAllowed";
        CodeEnum[CodeEnum["Unauthorized"] = 'unauthorized'] = "Unauthorized";
        CodeEnum[CodeEnum["AccountUnderValidation"] = 'account_under_validation'] = "AccountUnderValidation";
        CodeEnum[CodeEnum["NotAcceptable"] = 'not_acceptable'] = "NotAcceptable";
    })(CodeEnum = ErrorModel.CodeEnum || (ErrorModel.CodeEnum = {}));
})(ErrorModel = exports.ErrorModel || (exports.ErrorModel = {}));
//# sourceMappingURL=errorModel.js.map