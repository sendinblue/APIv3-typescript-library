"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateCampaignStatus {
    static getAttributeTypeMap() {
        return UpdateCampaignStatus.attributeTypeMap;
    }
}
UpdateCampaignStatus.discriminator = undefined;
UpdateCampaignStatus.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "UpdateCampaignStatus.StatusEnum"
    }
];
exports.UpdateCampaignStatus = UpdateCampaignStatus;
(function (UpdateCampaignStatus) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Darchive"] = 'darchive'] = "Darchive";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Replicate"] = 'replicate'] = "Replicate";
        StatusEnum[StatusEnum["ReplicateTemplate"] = 'replicateTemplate'] = "ReplicateTemplate";
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
    })(StatusEnum = UpdateCampaignStatus.StatusEnum || (UpdateCampaignStatus.StatusEnum = {}));
})(UpdateCampaignStatus = exports.UpdateCampaignStatus || (exports.UpdateCampaignStatus = {}));
//# sourceMappingURL=updateCampaignStatus.js.map