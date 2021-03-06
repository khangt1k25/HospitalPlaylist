const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },

        age: {
            type: String,
            required: true
        },

        gender: {
            type: String,
            required: true,
        },
        
        appointmentRequest: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Appointment'
            }
        ],
        appointmentDone: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Appointment'
            }
        ]
    },
    { collection: 'users'}
)

module.exports = mongoose.model('User', userSchema)