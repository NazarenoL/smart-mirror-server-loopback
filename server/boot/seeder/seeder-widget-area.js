'use strict';

var debug = require('debug')('smartmirror:migrate:seeder-widget-area');

module.exports = function(app) {
  debug('Starting seeder WidgetArea.');

  app.models.WidgetArea.create(
    [
      {name: 'Top', title: 'Top container'},
      {name: 'LeftTop', title: 'Left Top container'},
      {name: 'LeftBottom', title: 'Left Bottom container'},
      {name: 'RightTop', title: 'Right Top container'},
      {name: 'RightBottom', title: 'Right Bottom container'},
      {name: 'Bottom', title: 'Bottom container'},
      {name: 'Sensor', title: 'Sensor container', description: 'Non visible container for sensors.'}
    ],
    function(err, widgetArea) {
      if (err) throw err;

      debug('WidgetArea created: %j', widgetArea);
    }
  );
};
