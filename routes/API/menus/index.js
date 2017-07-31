const router = require('express').Router();
const menus = require('../../../controllers').API.menus;

router.get('/', menus.find);
router.post('/menu', menus.insert.menu);
router.post('/submenu', menus.insert.submenu);

module.exports = router;
