'use strict';


/**
 * Get all recipients
 *
 * name String Find recipients by name
 * returns Recipient
 **/
exports.findRecipients = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstname" : "Eric",
  "delivery_point_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "starting_date" : "2000-01-23T04:56:07.000+00:00",
  "expiration_date" : "2019-01-23T04:56:07.000+00:00",
  "object_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "private_recipient" : true,
  "lastname" : "Amundsson"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns 'Hello' to the caller
 *
 * name String The name of the person to whom to say hello (optional)
 * returns HelloWorldResponse
 **/
exports.hello = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

