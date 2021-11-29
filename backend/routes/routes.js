const router = require('express').Router()
const User = require('../models/user')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')


router.post('/register', async (req, res)=> {
    const {email, phone, fullname, address, password: plainTextPassword} = req.body
    const password = await bcrypt.hash(plainTextPassword, Math.floor(Math.random() * 100))
    try {
        await User.create({
            email,
            phone,
            address,
            fullname,
            password
        })
    }
    catch(error){
        console.log(error.message);
        return res.json({status: 'error'});
    }
    return res.json({status: 'successful'})
})

router.post('/signin', async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username}).lean()
    if (!user){
        return res.json({status: 'error', error: 'Wrong username'})
    }

    if (await bcrypt.compare(password, user.password)){
        return res.json({status: 'ok'})
    }
    return res.json({status: 'error'})
})

module.exports = router;