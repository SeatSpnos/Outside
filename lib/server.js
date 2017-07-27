const config = require('config');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const passport = require('passport');
const flash = require('connect-flash');
const busboy = require('connect-busboy');
const cors = require('cors');

module.exports = function () {
  config.passport(passport);

  app.use(cors({origin: 'http://wdt19167:5050'}));
  app.use(busboy());
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.use(express.static('public'));

  app.use(session({
    secret: 'vidyapathaisalwaysrunning',
    resave: true,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  require('../routes')(app, passport);

  return app;
};
