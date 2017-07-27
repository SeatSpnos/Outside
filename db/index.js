const mongoose = require('mongoose');
const config = require('../config').db;

module.exports = {
  start: start,
  stop: stop
};

function start () {
  mongoose.connect(config.mongodb);
}

function stop () {
  mongoose.disconnect();
}
