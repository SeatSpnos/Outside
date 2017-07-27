const router = require('express').Router();
const auth = require('../../../controllers').auth;

router.post('/', auth.insert);
router.put('/password/:user', auth.update.password);
router.put('/user/:user', auth.update.user);

module.exports = router;
