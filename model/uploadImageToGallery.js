"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UploadImageToGallery {
    static getAttributeTypeMap() {
        return UploadImageToGallery.attributeTypeMap;
    }
}
UploadImageToGallery.discriminator = undefined;
UploadImageToGallery.attributeTypeMap = [
    {
        "name": "imageUrl",
        "baseName": "imageUrl",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.UploadImageToGallery = UploadImageToGallery;
//# sourceMappingURL=uploadImageToGallery.js.map