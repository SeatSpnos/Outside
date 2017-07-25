const controllers = require('../controllers');

module.exports = function (app) {
  app.get('/allOt', controllers.test.find.allOt);
  app.get('/list', controllers.test.find.list);
  app.post('/items', controllers.test.insert.items);
  app.post('/numAndSerial', controllers.test.insert.numAndSerial);
  app.post('/list', controllers.test.insert.list);
};
