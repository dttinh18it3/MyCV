
const userHomeRouter = require('../routes/web/user/userHomeRouter');
const adminHomeRouter = require('../routes/web/admin/adminHomeRouter');
const userProfileRouter = require('../routes/web/user/userProfileRouter');
const express = require('express');
const router = express.Router();
var apiUserRoute = require('./api/apiUserRoute');

function route(app, role) {
    app.use('/api-user', apiUserRoute);

    if(role == 'admin') {
        app.use('/', adminHomeRouter);
    }
    else {
        app.use('/profile', userProfileRouter);
        app.use('/', userHomeRouter);
    }
}

module.exports = route;
