'use strict';

var utils = require('../utils/writer.js');
var DeliveryAddress = require('../service/DeliveryAddressService');

module.exports.findDeliveryAddresses = function findDeliveryAddresses (req, res, next) {
  var route name = req.swagger.params['route name'].value;
  DeliveryAddress.findDeliveryAddresses(route name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
