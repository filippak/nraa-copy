'use strict';

var utils = require('../utils/writer.js');
var Route = require('../service/RouteService');

module.exports.findRoutes = function findRoutes (req, res, next) {
  var name = req.swagger.params['name'].value;
  Route.findRoutes(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
