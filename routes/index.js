const controllers = require('../controllers');

module.exports = function (app) {
  app.get('/allOt/:ot', controllers.test.find.allOt);
  app.get('/list', controllers.test.find.list);
  app.get('/items', controllers.test.find.items);
  app.post('/items', controllers.test.insert.items);
  app.post('/numAndSerial', controllers.test.insert.numAndSerial);
  app.post('/list', controllers.test.insert.list);
  app.get('/', controllers.test.init);
};
