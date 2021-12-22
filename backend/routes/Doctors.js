const express = require("express")
const doctorsController = require("../controllers/Doctors");
const {asyncWrapper} = require("../utils/asyncWrapper");

const doctorsRoutes = express.Router()


doctorsRoutes.post(
    '/register',
    asyncWrapper(doctorsController.register)
)


doctorsRoutes.post(
    '/login',
    asyncWrapper(doctorsController.login)
)

doctorsRoutes.post(
    '/detail',
    asyncWrapper(doctorsController.getDetailInformation)
)

doctorsRoutes.get(
    '/getList',
    asyncWrapper(doctorsController.getListDoctor)
)

doctorsRoutes.post(
    '/accept-appointment',
    asyncWrapper(doctorsController.acceptAppointment)
)

doctorsRoutes.post(
    '/detete',
    asyncWrapper(doctorsController.deleteDoctor)
)

module.exports = doctorsRoutes