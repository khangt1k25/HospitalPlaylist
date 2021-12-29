const express = require('express')
const appointmentController = require('../controllers/Appointments')
const {asyncWrapper} = require('../utils/asyncWrapper')


const appointmentRoute = express.Router()

appointmentRoute.post(
    '/createAppointment',
    asyncWrapper(appointmentController.createAppointment)
)

appointmentRoute.get(
    '/getList',
    asyncWrapper(appointmentController.getListAppointment)
)

module.exports = appointmentRoute