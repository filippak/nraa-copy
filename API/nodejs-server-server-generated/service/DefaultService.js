'use strict';


/**
 * Checks if the server and its dependencies are working
 *
 * no response value expected for this operation
 **/
exports.healthGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

