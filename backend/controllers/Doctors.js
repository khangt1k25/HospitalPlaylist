const DoctorModel = require('../models/Doctors')
const DocumentModel = require('../models/Documents')
const AppointmentModel = require('../models/Appointments')
const httpStatus = require('../utils/httpStatus')
const bcrypt = require('bcryptjs')
const doctorsController = {}

doctorsController.login = async (req, res, next) => {
    const {username, password} = req.body
    const user = await DoctorModel.findOne({username})
    if(!user){
        return res.json({status:'error', error:'Invalid username'})
    }
    if(await bcrypt.compare(password, user.password)){
        return res.json({status: 'ok', user: user})
    }
    return res.json({status:'error', error:'Password not match'})
}

doctorsController.register = async (req, res, next) => {
    const { username, email, password: plainTextPassword, age, department, description} = req.body
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(plainTextPassword, salt)
    let avatar = await DocumentModel.findById("61b38fdb3c404567453b207b")
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
                doctorId: doctor._id,
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
        // for(department in doctorMap){
        //     var temp = []
        //     for(i in doctorMap[department]){
        //         var doctor = doctorMap[department][i]
        //         var avatarId = doctor.avatar
        //         doctor.avatar = await DocumentModel.findById(avatarId)
        //         temp.push(doctor)
        //     }
        //     doctorMap[department] = temp
        // }
        return res.status(httpStatus.OK).json(doctorMap)
    })
}

doctorsController.getListByDepartment = async (req, res) => {
    const department = req.body.department
    try{
        doctor_list = await DoctorModel.find({department: department})
        if (doctor_list == null){
            return res.status(httpStatus.NOT_FOUND).json({message: "doctor not found"})
        }
        return res.status(httpStatus.OK).json({doctors: doctor_list})
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

doctorsController.acceptAppointment = async (req, res) => {
    const {appointmentid} = req.body
    try{
      appointment = await AppointmentModel.findById(appointmentid)
      if (appointment == null){
        return res.status(httpStatus.NOT_FOUND.json({message: "No appointment"}))
      }
      appointment.status = 'accepted'
      await appointment.save()
      return res.status(httpStatus.OK.json({data: appointment}))
    }
    catch(e){
      console.log(e.message)
      return res.status(httpStatus.INTERNAL_SERVER_ERROR.json({message: e.message}))
    }
}

doctorsController.deleteDoctor = async (req, res) => {
    const doctorId = req.body.id 
    console.log(doctorId)
    DoctorModel.findOneAndDelete({_id: doctorId}, function(err){
        if(err){
            console.log("Can't delete")
            return res.status(httpStatus.NOT_ACCEPTABLE).json({message : error})
        }
        console.log("Delete success")
        return res.status(httpStatus.OK).json({message : "OK"})
    })
}

module.exports = doctorsController
