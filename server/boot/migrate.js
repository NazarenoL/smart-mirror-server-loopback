'use strict';

var debug = require('debug')('smartmirror:migrate:migrate');
var seeder = require('./seeder');

module.exports = function(app) {
  debug('Starting mysqlDs migration.');

  app.dataSources.mysqlDs.automigrate(function(err) {
    debug('Finishing myqslDs migration.');
    if (err) throw err;

    seeder(app);
  });
};
