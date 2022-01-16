const express = require('express')
const adminController = require('../controllers/Admin')
const {asyncWrapper} = require("../utils/asyncWrapper");

const adminRoutes = express.Router()

adminRoutes.post(
    '/login',
    asyncWrapper(adminController.login)
)

adminRoutes.post(
    '/register',
    asyncWrapper(adminController.register)
)

adminRoutes.get(
    "/getuserlist",
    asyncWrapper(adminController.getUserList)
)

adminRoutes.get(
    "/getdoctorlist",
    asyncWrapper(adminController.getDoctorList)
)

adminRoutes.get(
    "/getappointmentlist",
    asyncWrapper(adminController.getAppointment)
)

module.exports = adminRoutes