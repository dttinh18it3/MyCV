const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_Name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: Number },
    cellphone: { type: String, required: true },
    email: { type: String, maxlength: 255, required: true },
    password: { type: String, required: true},
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);