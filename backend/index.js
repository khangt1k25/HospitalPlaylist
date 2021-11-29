const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const DB_CONFIG = require("./config/db.config")
const _CONST = require("./config/constant")
const app = express()
const router = require('./routes/routes')

mongoose.connect(DB_CONFIG.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log('connected to the database')
})

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(morgan('combined'))
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use('/api', router)

const PORT = process.env.PORT || _CONST.PORT

app.listen(PORT, (error)=>{
    if(error) console.log(error)
    else console.log(`Server is running on port ${PORT}.`);
})