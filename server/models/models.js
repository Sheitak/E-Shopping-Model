/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
const mongoose = require('mongoose');
const register = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('users', register);