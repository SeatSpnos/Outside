module.exports = {
  test: require('./test'),
  auth: require('./auth'),
  API: require('./API'),
  init: init
};

function init (req, res, next) {
  res.redirect('/login');
}
