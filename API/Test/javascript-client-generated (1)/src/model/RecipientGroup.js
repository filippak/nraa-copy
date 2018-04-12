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
import Metadata from './Metadata';
import StopPointStopPointType from './StopPointStopPointType';





/**
* The RecipientGroup model module.
* @module model/RecipientGroup
* @version 1.0.0
*/
export default class RecipientGroup {
    /**
    * Constructs a new <code>RecipientGroup</code>.
    * TODO
    * @alias module:model/RecipientGroup
    * @class
    * @param metadata {module:model/Metadata} 
    */

    constructor(metadata) {
        

        
        

        this['metadata'] = metadata;

        
    }

    /**
    * Constructs a <code>RecipientGroup</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RecipientGroup} obj Optional instance to populate.
    * @return {module:model/RecipientGroup} The populated <code>RecipientGroup</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipientGroup();

            
            
            

            if (data.hasOwnProperty('delivery_point_id')) {
                obj['delivery_point_id'] = ApiClient.convertToType(data['delivery_point_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('recipient_group_type')) {
                obj['recipient_group_type'] = StopPointStopPointType.constructFromObject(data['recipient_group_type']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = Metadata.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }

    /**
    * @member {String} delivery_point_id
    */
    delivery_point_id = undefined;
    /**
    * @member {Number} amount
    */
    amount = undefined;
    /**
    * @member {module:model/StopPointStopPointType} recipient_group_type
    */
    recipient_group_type = undefined;
    /**
    * @member {module:model/Metadata} metadata
    */
    metadata = undefined;








}


