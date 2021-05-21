
'use strict';
const crypto = require('crypto');
var mongoose = require('mongoose');
var User = require('../../models/Users');

//custom user middleware

class apiUserController{
    CreateUserAccount(req, res, next) {
        const user = new User({
            userName: req.body.userName,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
            cellphone: req.body.cellphone,
            email: req.body.email,
            password: crypto.createHash('sha256').update(req.body.password).digest('hex')
        });
    
        user.save()
            .then(() => {
                res.send(user);
                console.log("Create user account successfully!!");
            })
            .catch(error => {
                console.log("Create user account failure!!");
                console.log(error);
            })
    };

    Getuser(req, res, next) {
        res.send('user');
    }
}

module.exports = new apiUserController;

