const express = require('express');
const router = express.Router();
const auth = require('../../controllers').auth;
const passport = require('passport');

router.get('/', auth);
router.post('/', passport.authenticate('local', {
  sucessRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;
