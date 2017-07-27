const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otsSerialsSchema = new Schema({
  OT: String,
  serial: String
});

module.exports = mongoose.model('otsSerials', otsSerialsSchema);
