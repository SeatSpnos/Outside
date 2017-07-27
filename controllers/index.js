module.exports = {
  test: require('./test'),
  auth: require('./auth'),
  init: init
};

function init (req, res, next) {
  res.redirect('/login');
}
