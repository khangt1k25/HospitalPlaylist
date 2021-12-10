const express = require("express")
const doctorRoutes = require("../Doctors")

const apiRoutes = express.Router()

apiRoutes.use("/doctors", doctorRoutes)


apiRoutes.get(
    "/", (req, res) => res.json({ api: "is-working" })
);
module.exports = apiRoutes;