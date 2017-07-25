var mongoose = require('mongoose');
var mongoDB = 'mongodb://<test>:<test123>@ds119533.mlab.com:19533/seat_hosting';
mongoose.connect(mongoDB);

module.exports = mongoose.connection;
