'use strict';

var debug = require('debug')('smartmirror:migrate:seeder-user');

module.exports = function(app) {
  debug('Starting seeder User.');

  //Values
  var DEFAULT_USER = 'nazarenolorenzo@gmail.com';
  var DEFAULT_PASSWORD = '123456';
  var DEFAULT_USERNAME = 'nazareno';

  app.models.User.create(
    {email: DEFAULT_USER, password: DEFAULT_PASSWORD, username: DEFAULT_USERNAME},
    function(err, newUser) {
      if (err) throw err;

      debug('User created: %j', newUser);

      //Login user
      app.models.User.login(
        {email: DEFAULT_USER, password: DEFAULT_PASSWORD},
        function (err, accessToken) {
          if (err) throw err;

          debug('User access token: %j', accessToken);
        }
      );
    }
  );
};
