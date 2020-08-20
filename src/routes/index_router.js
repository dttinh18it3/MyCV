
const homeRouter = require('./user/user_home_router');
const adminHomeRouter = require('./admin/admin_home_router');

function route(app, role) {


    if(role == 'admin') {
        app.use('/', adminHomeRouter);
    }
    else {
        app.use('/', homeRouter);
    }
}

module.exports = route;
