const express = require("express")
const PatientController = require("../controllers/Patient")
const {asyncWrapper} = require("../utils/asyncWrapper")

const patientRoutes = express.Router()

patientRoutes.post(
    '/register',
    asyncWrapper(PatientController.register)
)

patientRoutes.post(
    '/login',
    asyncWrapper(PatientController.login)
)

// patientRoutes.post(
//     '/request-appointment',
//     asyncWrapper(PatientController.requestAppointment)
// )

patientRoutes.post(
    '/detail',
    asyncWrapper(PatientController.detail)
)

patientRoutes.get(
    '/getList',
    asyncWrapper(PatientController.getList)
)

patientRoutes.post(
    '/delete',
    asyncWrapper(PatientController.delete)
)

module.exports = patientRoutes