'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.findRecipients = function findRecipients (req, res, next) {
  var name = req.swagger.params['name'].value;
  Default.findRecipients(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.hello = function hello (req, res, next) {
  var name = req.swagger.params['name'].value;
  Default.hello(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
