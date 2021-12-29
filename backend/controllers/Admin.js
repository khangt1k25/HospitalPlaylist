const DoctorModel = require('../models/Doctors')
const PatientModel = require('../models/Users')
const AppointmentModel = require('../models/Appointments')
const httpStatus = require('../utils/httpStatus')
const adminController = {}

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