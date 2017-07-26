module.exports = {
  find: require('./find.js'),
  insert: require('./insert.js'),
  init: init
};

function init (req, res, next) {
   res.sendFile('../../views/test/index.html');
}
