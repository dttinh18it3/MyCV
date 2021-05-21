
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
        type: String,
        required: 'Please enter your fullname!',
    },
    gender: {
        type: Number,
        required: 'Please choose your gender!'
    },
    dateOfBirth: {
        type: Date,
        required: false,
        default: Date.now
    },
    cellphone: {
        type: String,
        minlength:10,
        required: 'Please enter your cellphone'
    },
    email: {
        type: String,
        maxlength: 255,
        required: 'Please enter your email!'
    },
    password: {
        type: String,
        required: 'Please enter your password!'
    },
    address: {
        type: String,
        required: false,
        default: 'No address yet!'
    },
    specialization: {
        type: String,
        required: false,
        default: 'No specialization yet!'
    },
    description: {
        type: String,
        required: false,
        default: 'No description yet!'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Users', userSchema);