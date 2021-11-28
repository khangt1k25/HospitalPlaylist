const express = require('express')
const mongoose = require('mongoose')

const dbURI = 'mongodb+srv://webapp:khanh123@cluster0.hqw7c.mongodb.net/Hospital'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("connect the mongoose database"))


const router = require('./routes/routes')

app = express()
app.use(express.json())
app.use('/api', router)

app.listen(8000, (error)=>{
    if(error) console.log(error)
    else console.log('listen to 8000')
})