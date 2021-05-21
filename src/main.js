const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars  = require('express-handlebars');

const port = 3000;
// Khai bao controller
const app = express();

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
// //custom user middleware
// const userMiddleware = require('./app/middlewares/userMiddleware');
// app.use(userMiddleware);

// Khai bao web route
const indexRoute = require('./routes/indexRoute');


// Khai bao api route
const apiRoute = require('./routes/api/apiUserRoute');

//Khai bao ket noi database
const database = require('./config/database/connectdb');
// Ket noi database
database.connectdb();
// Khai bao body -- middleware xử lý dữ liệu form
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
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
indexRoute(app, role);
// webRoute(app, role);
// apiRoute(app);

app.listen(port, () => {
    console.log(port)
})


