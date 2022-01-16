const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type:String,
            required:true,
        },
        fullname: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        }
    },
    {collection: 'admin'}
)

module.exports = mongoose.model('Admin', adminSchema)