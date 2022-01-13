const express = require('express')
const apiRoutes = require("./api")
const path = require('path')
const http = require('http')

const mainRouter = express.Router()

mainRouter.get('/health_check', (req, res) => {
    res.status(200).send('ok');
});

mainRouter.use('/api', apiRoutes)
mainRouter.use('/files', express.static(path.join(__dirname, "../files")))

module.exports = mainRouter