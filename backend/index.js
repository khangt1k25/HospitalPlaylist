const express = require('express')
const mongoose = require('mongoose')
const mainRouter = require('./routes/index')
const cors = require('cors')


const dbURI = 'mongodb+srv://webapp:khanh123@cluster0.hqw7c.mongodb.net/Hospital'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("connect the mongoose database"))



app = express()
app.use(express.json())
app.use(cors())
app.use('/', mainRouter)


// app.get('/', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

app.listen(8000, (error)=>{
    if(error) console.log(error)
    else console.log('listen to 8000')
})