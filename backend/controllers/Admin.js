const DoctorModel = require('../models/Doctors')
const PatientModel = require('../models/Users')
const AdminModel = require('../models/Admin')
const AppointmentModel = require('../models/Appointments')
const httpStatus = require('../utils/httpStatus')
const adminController = {}
const bcrypt = require('bcryptjs')

adminController.login = async(req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    console.log(username, password)
    const admin = await AdminModel.findOne({username: username})
    try{
        if (!admin){
            return res.status(httpStatus.NOT_FOUND).json({message: "admin not found"})
        }
        if (await bcrypt.compare(password, admin.password)){
            return res.status(httpStatus.OK).json({data: admin})
        }
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

adminController.register = async(req, res, next) => {
    const {username, password: plainTextPassword, fullname, position} = req.body

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(plainTextPassword, salt)
    admin = new AdminModel({
        username: username,
        password: password,
        fullname: fullname,
        position: position
    })

    try {
        const newAdmin = await admin.save()
        return res.status(httpStatus.CREATED).json({
            data: newAdmin
        })
    }
    catch(e){
        console.log("Fail")
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        })
    }
}

adminController.getUserList = async(req, res, next) => {
    console.log(req.body)
    try{
        const user_list = await PatientModel.find({})
        if (!user_list){
            return res.status(httpStatus.NOT_FOUND).json({message: "FALSE QUERYING DATA"})
        }
        return res.status(httpStatus.OK).json({
            data: user_list
        })
    }
    catch (e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

adminController.getDoctorList = async(req, res, next) => {
    console.log(req.body)
    try{
        const doctor_list = await DoctorModel.find({})
        if (!user_list){
            return res.status(httpStatus.NOT_FOUND).json({message: "FALSE QUERYING DATA"})
        }
        return res.status(httpStatus.OK).json({
            data: doctor_list
        })
    }
    catch (e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

adminController.getAppointment = async(req, res, next) => {
    const {status} = req.body
    try{
        if (status == "all"){
            appointment_list = AppointmentModel.find({})
        }
        else{
            appointment_list = AppointmentModel.find({status: status})
        }
        if (!appoint_list){
            return res.status(http.NOT_FOUND).json({message: "No appointment"})
        }
        return res.status(httpStatus.OK).json({
            data: appointment_list
        })
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

module.exports = adminController