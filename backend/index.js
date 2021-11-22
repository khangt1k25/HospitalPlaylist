const express = require('express')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/hospitalplaylist', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log('connected to the database')
})


const router = require('./routes/routes')

app = express()
app.use(express.json())
app.use('/api', router)

app.listen(8000, (error)=>{
    if(error) console.log(error)
    else console.log('listen to 8000')
})