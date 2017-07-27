const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  phone: String,
  group: String,
  provider: String
});

module.exports = mongoose.model('Users', usersSchema);
