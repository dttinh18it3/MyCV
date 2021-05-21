
    const express = require('express');
    const router = express.Router();
    var apiUserController = require('../../app/controllers/api/apiUserController');

    router.post('/sign-up', apiUserController.CreateUserAccount);
    router.get('/get-user', apiUserController.Getuser);

    module.exports = router;
