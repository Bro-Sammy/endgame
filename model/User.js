// Create Database Schema and model for users
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    studentID: Number,
    name: { type: String, required: true },
    password: { type: String },
    age: { type: Number },
    level: String,
    program: String
});

// Model for the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;