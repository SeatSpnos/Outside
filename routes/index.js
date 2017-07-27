const controllers = require('../controllers');
const middlewares = require('../middlewares');
const isLoggedIn = middlewares.isLoggedIn;

module.exports = function (app) {
	app.get('/', controllers.init);
  app.use('/login', require('./auth'));
  app.use('/test', isLoggedIn, require('./test'));  
  app.use('/API', require('./API'));
};
