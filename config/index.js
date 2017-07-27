const ENV = process.env.NODE_ENV || 'dev';

module.exports = {
  passport: require('./passport.js')
  //db: require('./' + ENV)
};
