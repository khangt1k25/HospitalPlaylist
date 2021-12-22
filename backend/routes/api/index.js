const express = require("express")
const doctorRoutes = require("../Doctors")
const appointmentRoutes = require('../Appointments')
const apiRoutes = express.Router()

apiRoutes.use("/doctors", doctorRoutes)
apiRoutes.use("/appointments", appointmentRoutes)

apiRoutes.get(
    "/", (req, res) => res.json({ api: "is-working" })
);


module.exports = apiRoutes;