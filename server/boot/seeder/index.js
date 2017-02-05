'use strict';

var seederUser = require('./seeder-user');
var seederPersona = require('./seeder-persona');
var seederWidgetArea = require('./seeder-widget-area');
var seederModule = require('./seeder-module');

module.exports = function(app) {
  seederUser(app);
  seederPersona(app);
  seederWidgetArea(app);
  seederModule(app);
};
