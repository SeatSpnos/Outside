let express = require('express');
let session = require('express-session');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let app = express();
let passport = require('passport');
let flash = require('connect-flash');
let busboy = require('connect-busboy');
let cors = require('cors');

module.exports = function () {
  require('../config/passport')(passport);

  app.use(cors({origin: 'http://wdt19167:5050'}));
  app.use(busboy());
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.use(express.static('public'));

  app.use(session({
    secret: 'olympuswillruletheworld',
    resave: true,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  require('../routes')(app, passport);

  return app;
};
