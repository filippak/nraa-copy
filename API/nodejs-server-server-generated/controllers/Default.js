'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.healthGET = function healthGET (req, res, next) {
  Default.healthGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
