module.exports = function(app) {
  app.dataSources.mongoDs.automigrate('WidgetArea', function(err) {
    if (err) throw err;

    app.models.WidgetArea.create(
      [
        {name: 'Top'},
        {name: 'Bottom'},
        {name: 'LeftTop'}
      ], function(err, widgetAreas) {
        if (err) throw err;

        console.log('Models created: \n', widgetAreas);
      }
    );
  });
};
