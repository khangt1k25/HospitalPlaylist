const express = require("express")
const doctorRoutes = require("../Doctors")
const patientRoutes = require("../Patient")
const adminRoutes = require("../Admin")
const apiRoutes = express.Router()

apiRoutes.use("/doctors", doctorRoutes)
apiRoutes.use("/patient", patientRoutes)
apiRoutes.use("/admin", patientRoutes)


apiRoutes.get(
    "/", (req, res) => res.json({ api: "is-working" })
);
module.exports = apiRoutes;