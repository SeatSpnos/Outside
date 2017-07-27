const controllers = require('../controllers');
const middlewares = require('../middlewares');
const isLoggedIn = middlewares.isLoggedIn;

module.exports = function (app) {
  app.use('/login', require('./auth'));
  app.use('/test', isLoggedIn, require('./test'));
  app.get('/', controllers.init);
  app.use('/API', require('./API'));
};
