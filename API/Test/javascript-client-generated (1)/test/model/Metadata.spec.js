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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NordicRecipientAdminApp);
  }
}(this, function(expect, NordicRecipientAdminApp) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NordicRecipientAdminApp.Metadata();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Metadata', function() {
    it('should create an instance of Metadata', function() {
      // uncomment below and update the code to test Metadata
      //var instane = new NordicRecipientAdminApp.Metadata();
      //expect(instance).to.be.a(NordicRecipientAdminApp.Metadata);
    });

    it('should have the property transactionId (base name: "transaction_id")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instane = new NordicRecipientAdminApp.Metadata();
      //expect(instance).to.be();
    });

    it('should have the property enqueuedAt (base name: "enqueued_at")', function() {
      // uncomment below and update the code to test the property enqueuedAt
      //var instane = new NordicRecipientAdminApp.Metadata();
      //expect(instance).to.be();
    });

    it('should have the property objectId (base name: "object_id")', function() {
      // uncomment below and update the code to test the property objectId
      //var instane = new NordicRecipientAdminApp.Metadata();
      //expect(instance).to.be();
    });

    it('should have the property sourceObjectId (base name: "source_objectId")', function() {
      // uncomment below and update the code to test the property sourceObjectId
      //var instane = new NordicRecipientAdminApp.Metadata();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modified_by")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instane = new NordicRecipientAdminApp.Metadata();
      //expect(instance).to.be();
    });

    it('should have the property modifiedAt (base name: "modified_at")', function() {
      // uncomment below and update the code to test the property modifiedAt
      //var instane = new NordicRecipientAdminApp.Metadata();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new NordicRecipientAdminApp.Metadata();
      //expect(instance).to.be();
    });

    it('should have the property jsonsign (base name: "jsonsign")', function() {
      // uncomment below and update the code to test the property jsonsign
      //var instane = new NordicRecipientAdminApp.Metadata();
      //expect(instance).to.be();
    });

    it('should have the property schema (base name: "schema")', function() {
      // uncomment below and update the code to test the property schema
      //var instane = new NordicRecipientAdminApp.Metadata();
      //expect(instance).to.be();
    });

    it('should have the property test (base name: "test")', function() {
      // uncomment below and update the code to test the property test
      //var instane = new NordicRecipientAdminApp.Metadata();
      //expect(instance).to.be();
    });

  });

}));
