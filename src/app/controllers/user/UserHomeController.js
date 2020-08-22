const crypto = require('crypto');
const User = require('../../models/User');

class UserHomeController{
    
    GetHome(request, response) {
        // response.render('userHome');

        try {
            const user = new User({
                user_Name: 'ABC',
                dateOfBirth: '2020-02-01',
                gender: 1,
                cellphone: '0123456789',
                email: 'user@gmail.com',
                password: crypto.createHash('sha256').update('password').digest('hex'),
            });
            user.save().then(() => console.log('save successfully'));
            response.render('userHome');
        } catch (error) {
            console.log("error create user: " + error);
        }

        // User.find({}, function(error, users) {
        //     if (!error) response.json(users);
        //     response.status(400).json({ error: 'ERROR find users!!!' });
        // });
    }
}

module.exports = new UserHomeController;
