const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
    {
        start: {
            type: Date,
            required: true,
        },
        end: {
            type: Date,
            unique: true,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        userDescription: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        doctorId: {
            type: String,
            required: false,
        },
        diagnoses: {
            type: String,
            required: false,
        },
        prescription: {
            type: String,
            required: false,
        }
    },
    { collection: 'appointment'}
)

module.exports = mongoose.model('Appointment', appointmentSchema)