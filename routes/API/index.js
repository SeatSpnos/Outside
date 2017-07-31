const express = require('express');
const router = express.Router();

router.use('/user', require('./user'));
router.use('/menus', require('./menus'));

module.exports = router;
