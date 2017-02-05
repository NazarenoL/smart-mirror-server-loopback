'use strict';

var debug = require('debug')('smartmirror:migrate:seeder-module');

module.exports = function(app) {
  debug('Starting seeder Module.');

  app.models.Module.create(
    [
      {name: 'Text', title: 'Text module', description: 'Base module. Displays a text. Normally extended by other modules.'},
      {name: 'Clock', title: 'Clock module', description: 'Shows the time in a specific format.'}
    ],
    function(err, module) {
      if (err) throw err;

      debug('Module created: %j', module);
    }
  );
};
