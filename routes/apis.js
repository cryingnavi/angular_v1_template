var express = require('express');
var router = express.Router();
var ctrls = require('../controllers/apis');

router.get('/list', ctrls.getList);
router.get('/list/:id', ctrls.getDetail);
router.put('/edit/:id', ctrls.edit);
router.delete('/list/:id', ctrls.del);

router.post('/login', ctrls.login);
router.post('/logout', ctrls.logout);

router.get('/user/:username', ctrls.getUser);

router.post('/list', ctrls.create);

module.exports = router;