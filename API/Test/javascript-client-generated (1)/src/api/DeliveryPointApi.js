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


import ApiClient from "../ApiClient";
import DeliveryPoint from '../model/DeliveryPoint';

/**
* DeliveryPoint service.
* @module api/DeliveryPointApi
* @version 1.0.0
*/
export default class DeliveryPointApi {

    /**
    * Constructs a new DeliveryPointApi. 
    * @alias module:api/DeliveryPointApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the findDeliveryPoints operation.
     * @callback module:api/DeliveryPointApi~findDeliveryPointsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DeliveryPoint>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finds delivery points by delivery address id
     * @param {module:api/DeliveryPointApi~findDeliveryPointsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DeliveryPoint>}
     */
    findDeliveryPoints(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [DeliveryPoint];

      return this.apiClient.callApi(
        '/deliveryPoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
