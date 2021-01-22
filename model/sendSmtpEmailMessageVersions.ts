/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { SendSmtpEmailBcc } from './sendSmtpEmailBcc';
import { SendSmtpEmailCc } from './sendSmtpEmailCc';
import { SendSmtpEmailReplyTo1 } from './sendSmtpEmailReplyTo1';
import { SendSmtpEmailTo1 } from './sendSmtpEmailTo1';

export class SendSmtpEmailMessageVersions {
    /**
    * List of email addresses and names (_optional_) of the recipients. For example, [{\"name\":\"Jimmy\", \"email\":\"jimmy98@example.com\"}, {\"name\":\"Joe\", \"email\":\"joe@example.com\"}]
    */
    'to': Array<SendSmtpEmailTo1>;
    /**
    * Pass the set of attributes to customize the template. For example, {\"FNAME\":\"Joe\", \"LNAME\":\"Doe\"}. It\'s considered only if template is in New Template Language format.
    */
    'params'?: { [key: string]: object; };
    /**
    * List of email addresses and names (optional) of the recipients in bcc
    */
    'bcc'?: Array<SendSmtpEmailBcc>;
    /**
    * List of email addresses and names (optional) of the recipients in cc
    */
    'cc'?: Array<SendSmtpEmailCc>;
    'replyTo'?: SendSmtpEmailReplyTo1;
    /**
    * Custom subject specific to message version 
    */
    'subject'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<SendSmtpEmailTo1>"
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<SendSmtpEmailBcc>"
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Array<SendSmtpEmailCc>"
        },
        {
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "SendSmtpEmailReplyTo1"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SendSmtpEmailMessageVersions.attributeTypeMap;
    }
}
