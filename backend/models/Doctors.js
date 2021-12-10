const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true
        },
        avatar: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Documents',
        },        
        appointmentPending: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        },
        appointmentDone: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    },
    { collection: 'doctor'}
)

module.exports = mongoose.model('Doctor', doctorSchema)