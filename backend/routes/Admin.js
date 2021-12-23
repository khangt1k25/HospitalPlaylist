const express = require('express')
const adminController = require('../controllers/Admin')
const {asyncWrapper} = require("../utils/asyncWrapper");

const adminRoutes = express.Router()

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