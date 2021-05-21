
const express = require('express');
const router = express.Router();

const userHomeController = require('../../../app/controllers/web/user/UserHomeController');
// const router = require('../index_router');

router.get('/', userHomeController.GetHome);
router.post('/create-account', userHomeController.CreateAccount);

module.exports = router;
