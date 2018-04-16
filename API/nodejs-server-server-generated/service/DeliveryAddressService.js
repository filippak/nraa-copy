'use strict';


/**
 * Finds delivery addresses by route name
 *
 * route name String api allows starts-with 2 first characters
 * returns List
 **/
exports.findDeliveryAddresses = function(route name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "sequence_number" : "sequence_number",
  "street_address" : "street_address",
  "metadata" : {
    "transaction_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "schema" : "schema",
    "jsonsign" : "jsonsign",
    "source_objectId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "enqueued_at" : "2000-01-23T04:56:07.000+00:00",
    "test" : true,
    "modified_by" : "http://example.com/aeiou",
    "created_at" : "2000-01-23T04:56:07.000+00:00",
    "modified_at" : "2000-01-23T04:56:07.000+00:00",
    "object_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "stop_point_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "address_position" : 0,
  "postal_code" : "postal_code",
  "object_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "mail_delivery_route_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}, {
  "sequence_number" : "sequence_number",
  "street_address" : "street_address",
  "metadata" : {
    "transaction_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "schema" : "schema",
    "jsonsign" : "jsonsign",
    "source_objectId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "enqueued_at" : "2000-01-23T04:56:07.000+00:00",
    "test" : true,
    "modified_by" : "http://example.com/aeiou",
    "created_at" : "2000-01-23T04:56:07.000+00:00",
    "modified_at" : "2000-01-23T04:56:07.000+00:00",
    "object_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "stop_point_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "address_position" : 0,
  "postal_code" : "postal_code",
  "object_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "mail_delivery_route_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

