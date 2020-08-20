const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars  = require('express-handlebars');

const port = 3000;
// Khai bao controller
const app = express();

// Khai bao route
const route = require('./routes/index_router')

//Khai bao thu muc public
app.use(express.static(path.join(__dirname, 'public')));

// template engine

var role = 'user';
if(role == 'admin') {
    app.set('views', path.join(__dirname, 'resources','views','admin'));
} else {
    app.set('views', path.join(__dirname, 'resources','views','user'));
}
// app.set('views', [path.join(__dirname, 'resources','views','user'), path.join(__dirname, 'resources','views','admin')]);
app.engine('hbs', handlebars({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');

app.use(morgan('combined'));

// route
route(app, role);

app.listen(port, () => {
    console.log(port)
})


