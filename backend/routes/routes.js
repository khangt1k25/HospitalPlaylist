const router = require('express').Router()
const User = require('../models/user')


router.post('/register', async (req, res)=> {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    // res.send(await user.save())
    res.send(await user.save())
    console.log('register')
})

module.exports = router;