const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const userModel = require('../models').user;

module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    console.log('serialize');
    console.log(user._id);
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    console.log('deserializ', id)
    userModel.findOne({_id: id}, function (err, user) {
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
        if (err) return done(err);
        console.log(user);
        if (!user) {
          console.log('No user');
          return done(null, false, req.flash('loginMessage', 'Esse utilizador não foi encontrado.'));
        }
        if (!bcrypt.compareSync(password, user.password)) {
          console.log('Wrong password');
          return done(null, false, req.flash('loginMessage', 'Oops! Password Incorrecta.'));
        }
        console.log('Authenticated');
        return done(null, user);
      });
    })
  );
};
