'use strict';

var debug = require('debug')('smartmirror:migrate:seeder-persona');

module.exports = function(app) {
  debug('Starting seeder Persona.');

  app.models.Persona.create(
    [
      {"name": "Sofi", "description": "Persona de Sofi", "myUserId": 1},
      {"name": "Nero", "description": "Persona Mia"}
    ],
    function(err, newPersona) {
      if (err) throw err;

      debug('Persona created: %j', newPersona);
    }
  );
};
