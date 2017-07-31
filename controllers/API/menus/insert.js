const models = require('../../models');
const menuModel = models.menu;
const submenuModel = models.submenu;

module.exports = {
  menu: menu,
  submenu: submenu,
  init: init
};

function menu (req, res, next) {
  let newEntry = menuModel(req.body);
  saveEntry(res, newEntry);
}

function submenu (req, res, next) {
  let newEntry = submenuModel(req.body);
  saveEntry(res, newEntry);
}

function saveEntry (res, entry) {
  entry.save((err, results) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
}
