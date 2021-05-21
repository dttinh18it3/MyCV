const express = require('express');
const router = express.Router();

const userProfileController = require('../../../app/controllers/web/user/UserProfileController');
// const route = require('../index_router');

router.get('/', userProfileController.GetProfile);

module.exports = router;