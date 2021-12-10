const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
    {
        start: {
            type: String,
            required: true,
        },
        end: {
            type: String,
            unique: true,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        userDescription: {
            type: String,
            required: True,
        },
        status: {
            type: String,
            required: true,
        },
        doctorId: {
            type: String,
            required: False,
        },
        diagnoses: {
            type: String,
            required: False,
        },
        avatar: {
            type
        },
        prescription: {
            type: String,
            required: False,
        }
    },
    { collection: 'appointment'}
)

module.exports = mongoose.model('Appointment', appointmentSchema)