module.exports = {
  init: init,
  insert: require('./insert.js'),
  update: require('./update.js')
};

function init (req, res, next) {
  let path = require('path');
  res.sendFile(path.join(__dirname, '..', '..', 'public/pages/auth/login/index.html'));
}
