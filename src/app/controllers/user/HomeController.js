
const path = require('path');
class HomeController{
    
    GetHome(request, response) {
        response.render('user_home');
        console.log("PATH "+ path.join(__dirname));
    }
}

module.exports = new HomeController;
