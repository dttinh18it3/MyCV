
const express = require('express');
const router = express.Router();

const adminHomeController = require('../../../app/controllers/web/admin/AdminHomeController');
// const route = require('../index_router');

router.get('/', adminHomeController.GetHome);

module.exports = router;
