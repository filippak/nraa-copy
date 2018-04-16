'use strict';

var utils = require('../utils/writer.js');
var DeliveryPoint = require('../service/DeliveryPointService');

module.exports.findDeliveryPoints = function findDeliveryPoints (req, res, next) {
  DeliveryPoint.findDeliveryPoints()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
