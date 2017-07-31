const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submenuSchema = new Schema({
  name: String,
  link: String,
  permissionGroup: String,
  parent: String
});

module.exports = mongoose.model('submenu', submenuSchema);
