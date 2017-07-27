const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  item: String
});

module.exports = mongoose.model('items', itemsSchema);
