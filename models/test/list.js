const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listModelSchema = new Schema({
  OT: String,
  Num: String,
  serial: String,
  mac: String,
  item: String
});

module.exports = mongoose.model('List', listModelSchema);
