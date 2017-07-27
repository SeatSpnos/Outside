module.exports = {
  test: require('./test'),
  init: init
}

function init (req, res, next) {
  res.redirect ('/login');
}