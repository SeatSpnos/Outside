const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const userModel = require('../models').user;

module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    userModel.findOne({id: id}, function (err, user) {
      done(err, user);
    });
  });

  passport.use(
    'local-login',
    new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, username, password, done) => {
      userModel.findOne({username: username}, function (err, user) {
        console.log(err);
        console.log(user);
        if (err) return done(err);
        if (!user) {
          return done(null, false, req.flash('loginMessage', 'Esse utilizador não foi encontrado.'));
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, req.flash('loginMessage', 'Oops! Password Incorrecta.'));
        }
        done(null, user);
      });
    })
  );
};
