const router = require('express').Router();
const test = require('../../controllers').test;

router.get('/', test.init);
router.get('/allOt/:ot', test.find.allOt);
router.get('/list', test.find.list);
router.get('/items', test.find.items);
router.post('/items', test.insert.items);
router.post('/numAndSerial', test.insert.numAndSerial);
router.post('/list', test.insert.list);

module.exports = router;
