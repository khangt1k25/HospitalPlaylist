const DoctorModel = require('../models/Doctors')
const bcrypt = require('bcryptjs')
const doctorsController = {}

doctorsController.login = async (req, res, next) => {
    const {username, password} = req.body
    console.log(req.body)
    const user = await DoctorModel.findOne({username}).lean()
    if(!user){
        return res.json({status:'error', error:'Invalid username'})
    }
    if(await bcrypt.compare(password, user.password)){
        return res.json({status:'ok'})
    }
    return res.json({status:'error', error:'Password not match'})
}

doctorsController.register = async (req, res, next) => {
    const { username, email, password: plainTextPassword, department} = req.body
    const password = await bcrypt.hash(plainTextPassword, 10)

    try{
        const response = await DoctorModel.create({
            username,
            email,
            password,
            department
        })
        console.log("Create doctor account success")
    }
    catch(error){
        console.log(error.message)
        return res.json({status: "error"})
    }
    return res.json({status: "ok"})
}

module.exports = doctorsController