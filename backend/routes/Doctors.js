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

module.exports = doctorsRoutes