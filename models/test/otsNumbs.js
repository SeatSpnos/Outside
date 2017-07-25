const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otsNumbsSchema = new Schema({
  OT: String,
  Num: String,
});

module.exports = mongoose.model('otsNumbs', otsNumbsSchema);
