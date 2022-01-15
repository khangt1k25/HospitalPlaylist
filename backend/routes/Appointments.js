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

appointmentRoute.post(
    '/getAppointmentOfDoctor',
    asyncWrapper(appointmentController.getAppointmentOfDoctor)
)

appointmentRoute.post(
    '/getAppointmentOfUser',
    asyncWrapper(appointmentController.getAppointmentOfUser)
)

appointmentRoute.post(
    '/countByMonth',
    asyncWrapper(appointmentController.countByMonth)
)

appointmentRoute.post(
    '/approve',
    asyncWrapper(appointmentController.aprrove)
)

appointmentRoute.post(
    '/getList',
    asyncWrapper(appointmentController.getListAppointment)
)

appointmentRoute.post(
    '/getByStatus',
    asyncWrapper(appointmentController.getByStatus)
)
module.exports = appointmentRoute