/**
 * Nordic Recipient Admin App
 * TODO/Following David's template
 *
 * OpenAPI spec version: 1.0.0
 * Contact: david.hultsberg@postnord.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The Metadata model module.
* @module model/Metadata
* @version 1.0.0
*/
export default class Metadata {
    /**
    * Constructs a new <code>Metadata</code>.
    * This is from David&#39;s template. Base object with attributes for tracability, security and synchronization of changes
    * @alias module:model/Metadata
    * @class
    * @param objectId {String} 
    * @param modifiedAt {Date} 
    */

    constructor(objectId, modifiedAt) {
        

        
        

        this['object_id'] = objectId;this['modified_at'] = modifiedAt;

        
    }

    /**
    * Constructs a <code>Metadata</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Metadata} obj Optional instance to populate.
    * @return {module:model/Metadata} The populated <code>Metadata</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Metadata();

            
            
            

            if (data.hasOwnProperty('transaction_id')) {
                obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
            }
            if (data.hasOwnProperty('enqueued_at')) {
                obj['enqueued_at'] = ApiClient.convertToType(data['enqueued_at'], 'Date');
            }
            if (data.hasOwnProperty('object_id')) {
                obj['object_id'] = ApiClient.convertToType(data['object_id'], 'String');
            }
            if (data.hasOwnProperty('source_objectId')) {
                obj['source_objectId'] = ApiClient.convertToType(data['source_objectId'], 'String');
            }
            if (data.hasOwnProperty('modified_by')) {
                obj['modified_by'] = ApiClient.convertToType(data['modified_by'], 'String');
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('jsonsign')) {
                obj['jsonsign'] = ApiClient.convertToType(data['jsonsign'], 'String');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], 'String');
            }
            if (data.hasOwnProperty('test')) {
                obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} transaction_id
    */
    transaction_id = undefined;
    /**
    * @member {Date} enqueued_at
    */
    enqueued_at = undefined;
    /**
    * @member {String} object_id
    */
    object_id = undefined;
    /**
    * @member {String} source_objectId
    */
    source_objectId = undefined;
    /**
    * Format hardwareid/app/idp/userid or regex?
    * @member {String} modified_by
    */
    modified_by = undefined;
    /**
    * @member {Date} modified_at
    */
    modified_at = undefined;
    /**
    * @member {Date} created_at
    */
    created_at = undefined;
    /**
    * A digital signature for non repudation and protection from changes.
    * @member {String} jsonsign
    */
    jsonsign = undefined;
    /**
    * schema-version for supporting multiple versions on the same topics etc
    * @member {String} schema
    */
    schema = undefined;
    /**
    * Use for sending test-messages in production environments without affecting business.
    * @member {Boolean} test
    */
    test = undefined;








}


