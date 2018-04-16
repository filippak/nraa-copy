'use strict';


/**
 * Finds Routes by name
 * Muliple tags can be provided with comma separated strings. Use\\ \\ tag1, tag2, tag3 for testing.
 *
 * name String api allows starts-with 2 first characters
 * returns List
 **/
exports.findRoutes = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "sequence_number" : "sequence_number",
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
  "name" : "name",
  "delivery_office_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "object_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}, {
  "sequence_number" : "sequence_number",
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
  "name" : "name",
  "delivery_office_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "object_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

