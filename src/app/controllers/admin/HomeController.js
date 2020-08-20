
const path = require('path');
class HomeController{
    
    GetHome(request, response) {
        response.render('admin_home');
        console.log("PATH admin"+ path.join(__dirname));
    }
}

module.exports = new HomeController;
