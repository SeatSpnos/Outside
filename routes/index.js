const controllers = require('../controllers');
const middlewares = require('../middlewares');
const isLoggedIn = middlewares.isLoggedIn;

module.exports = (app, passport) => {
  app.get('/', controllers.init);
  app.get('/login', controllers.auth.init);
  app.post('/login', (req, res, next) => {
    passport.authenticate('local-login', (err, user, info) => {
      if (err) return res.status(500).json(err);
      if (!user) return res.status(401).send();

      req.logIn(user, function(err) {
        if (err) return res.status(500).json(err);
        return res.status(200).send();
      });
    })(req, res, next);
  });




    passport.authenticate('local-login'), (req, res) => {
    req.body.remember
    ? req.session.cookie.maxAge = 1000 * 60 * 60 * 4
    : req.session.cookie.expires = false;
    res.redirect('/test');
  }
  );
  app.use('/test', isLoggedIn, require('./test'));
  app.use('/API', require('./API'));
};
