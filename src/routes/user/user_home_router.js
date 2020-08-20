
const express = require('express');
const router = express.Router();

const homeController = require('../../app/controllers/user/HomeController');
const route = require('../index_router');

router.use('/', homeController.GetHome);

module.exports = router;
