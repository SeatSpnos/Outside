module.exports = {
  find: require('./find.js'),
  insert: require('./insert.js'),
  init: init
};

function init (req, res, next) {
  let path = require('path');
  res.sendFile(path.join(__dirname, '..', '..', 'public/pages/test/index.html'));
}
