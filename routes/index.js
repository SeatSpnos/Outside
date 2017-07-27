const controllers = require('../controllers');
const middlewares = require('../middlewares');
const isLoggedIn = middlewares.isLoggedIn;

module.exports = (app, passport) => {
  app.get('/', controllers.init);
  app.get('/login', controllers.auth.init);
  app.post('/login',
    passport.authenticate('local-login', {
      sucessRedirect: '/test',
      failureRedirect: '/login',
      failureFlash: true
    }),
    (req, res) => {
      req.body.remember
      ? req.session.cookie.maxAge = 1000 * 60 * 60 * 4
      : req.session.cookie.expires = false;
      res.redirect('/test');
    }
  );
  app.use('/test', isLoggedIn, require('./test'));
  app.use('/API', require('./API'));
};
