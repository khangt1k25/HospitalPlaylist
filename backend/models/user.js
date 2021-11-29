const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const users = new Schema({
    email: {type: String, default: ''},
    phone: {type: String, default: ''},
    address: {type: String, default: ''},
    name: {type: String, default: ''},
    password: {type: String, default: ''},

    deleteAt: {type: Date, default: Date.now},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
    action: {type: String, default: 'System'},
}, {collection: 'users'})

users.index({email: 1})

module.exports = mongoose.model('users', users)