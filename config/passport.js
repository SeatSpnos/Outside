const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const userModel = require('../models').user;
const login = 'local-login';
const strategy = new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, verification);

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    userModel.selectID(id, function (err, rows) {
      done(err, rows[0]);
    });
  });

  passport.use(login, strategy);
};

function verification (req, username, password, done) {
  userModel.find({username: username}, function (err, user) {
    console.log(user);
    if (err) return done(err);
    if (!user.length) return done(null, false, req.flash('loginMessage', 'Esse utilizador não foi encontrado.'));
    if (!bcrypt.compareSync(password, user.password)) return done(null, false, req.flash('loginMessage', 'Oops! Password Incorrecta.'));
    done(null, user);
  });
}
