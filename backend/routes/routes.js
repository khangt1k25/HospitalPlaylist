const router = require('express').Router()
const User = require('../models/user')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res)=> {
    const { username, email, password: plainTextPassword } = req.body
    const password = await bcrypt.hash(plainTextPassword, 10)

    try{
        const response = await User.create({
            username,
            email, 
            password
        })
        console.log("User create success", response)
    }
    catch(error){
        console.log(error.message)
        return res.json({status: 'error'})
    }
    return res.json({status: 'Ok'})
})

router.post('/login', async (req, res)=>{
    const {username, password} = req.body
    console.log(req.body)
    const user = await User.findOne({username}).lean()
    if(!user){
        return res.json({status:'error', error:'Invalid username'})
    }
    if(await bcrypt.compare(password, user.password)){
        return res.json({status:'ok'})
    }
    return res.json({status:'error', error:'Password not match'})
})

module.exports = router;