const express = require('express')
const appointmentsController = require('../controllers/Appointments')
const appointmentController = require('../controllers/Appointments')
const {asyncWrapper} = require('../utils/asyncWrapper')


const appointmentRoute = express.Router()

appointmentRoute.post(
    '/create',
    asyncWrapper(appointmentController.create)
)

appointmentRoute.post(
    '/detail',
    asyncWrapper(appointmentsController.detail)
)

// appointmentRoute.get(
//     '/getList',
//     asyncWrapper(appointmentController.getListAppointment)
// )

module.exports = appointmentRoute