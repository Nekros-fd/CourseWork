const mongoose = require('mongoose');
const Product = mongoose.Schema({ id: Number,
    name: String,
    prise: Number,
    about: String,
    type: String,
    img: String });

const userSchema = mongoose.Schema({
    id: Number,
    name: String,
    login: String,
    password: String,
    date: String,
    about: String,
    cart: [Product]
}, { versionKey: false });

const User = mongoose.model('users', userSchema);

module.exports = { User }
