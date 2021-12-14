const DoctorModel = require('../models/Doctors')
const DocumentModel = require('../models/Documents')
const httpStatus = require('../utils/httpStatus')
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
    const { username, email, password: plainTextPassword, age, department, description} = req.body
    console.log(req.body)
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(plainTextPassword, salt)
    let avatar = await DocumentModel.findById("61b38fdb3c404567453b207b")
    console.log(avatar)
    doctor = new DoctorModel({
        username: username,
        email: email,
        password: password,
        age: age,
        department: department,
        description: description,
        avatar: "61b38fdb3c404567453b207b"
    })

    try{
        const savedDoctor = await doctor.save()
        console.log("Save success")
        return res.status(httpStatus.CREATED).json({
            data: {
                id: savedDoctor._id,
                username: savedDoctor.username,
                email: savedDoctor.email,
                age: age,
                department: department,
                description: description,
                avatar: avatar
            }
        })
    }
    catch(e){
        console.log("Save fail")
        return res.status(httpStatus.BAD_REQUEST).json({
            message: e.message
        })
    }
}

doctorsController.getDetailInformation = async (req, res, next) =>{
    const doctorId = req.body.id
    console.log(req.id)
    console.log(doctorId)
    try{
        let doctor = await DoctorModel.findById(doctorId)
        if(doctor == null){
            return res.status(httpStatus.NOT_FOUND).json({message: "Can not find doctor"})
        }
        return res.status(httpStatus.OK).json({
            data: doctor
        })
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

doctorsController.getListDoctor = async (req, res, next) => {
    DoctorModel.find({} , async function(err, doctors){
        var doctorMap = {}
        doctors.forEach(function(doctor){
            data = {
                username: doctor.username,
                email: doctor.email,
                age: doctor.age,
                department: doctor.department,
                description: doctor.description,
                avatar: doctor.avatar
            }
            if(!doctorMap[doctor.department]){
                doctorMap[doctor.department] = []
            }
            doctorMap[doctor.department].push(data)
        })
        console.log(doctorMap)
        for(department in doctorMap){
            var temp = []
            for(i in doctorMap[department]){
                var doctor = doctorMap[department][i]
                var avatarId = doctor.avatar
                doctor.avatar = await DocumentModel.findById(avatarId)
                temp.push(doctor)
            }
            doctorMap[department] = temp
        }
        return res.status(httpStatus.OK).json(doctorMap)
    })
}

module.exports = doctorsController