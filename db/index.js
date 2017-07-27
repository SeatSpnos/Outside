const mongoose = require('mongoose');
const config = 'mongodb://test:test123@ds119533.mlab.com:19533/seat_hosting';

module.exports = {
  start: start,
  stop: stop
};

function start () {
  mongoose.connect(config);
}

function stop () {
  mongoose.disconnect();
}
