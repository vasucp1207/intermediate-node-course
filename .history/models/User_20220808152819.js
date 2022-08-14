const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, required: true},
    email: {type: String, unique: true},
    password: {type: String, required: true}
})