const models = require('../../models');
const menuModel = models.menu;
const submenuModel = models.submenu;

module.exports = (req, res, next) => {
  menuModel.find({}, (err, menus) => {
    if (err) return res.status(500).json(err);
    submenuModel.find({}, (err, submenus) => {
      if (err) return res.status(500).json(err);
      res.status(200).json({menus: menus, submenus: submenus});
    });
  });
};
