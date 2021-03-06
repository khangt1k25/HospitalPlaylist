const AppointmentModel = require('../models/Appointments')
const UserModel = require('../models/Users')
const appointmentRoute = require('../routes/Appointments')
const httpStatus = require('../utils/httpStatus')
const appointmentsController = {}

appointmentsController.create = async (req, res, next) => {
    const {start, end, userId, doctorId, userDescription} = req.body
    console.log(req.body)
    var status = "Pending"
    appointment = new AppointmentModel({
        start: new Date(start),
        end: new Date(end),
        userId: userId,
        userDescription: userDescription,
        status: status,
        doctorId: doctorId
    })


    try{
        let user = await UserModel.findById(userId)
        const saveAppointment = await appointment.save()
        console.log("Create appointment successfully")
        console.log(saveAppointment)
        return res.status(httpStatus.CREATED).json({
            data :saveAppointment
        })
    }
    catch(e){
        console.log("Create fail")
        return res.status(httpStatus.BAD_REQUEST).json({
            message: e.message
        })
    }
}

appointmentsController.detail = async (req, res) => {
    appointmentId = req.body.appointmentId
    try {
        appointment = await AppointmentModel.findById(appointmentId)
        if (appointment == null){
            res.status(httpStatus.NOT_FOUND).json({message: "apointment not found."})
        }
        else res.status(httpStatus.OK).json({
            data: appointment
        })
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

appointmentsController.getAppointmentOfDoctor = async (req, res) => {
    doctorId = req.body.doctorId
    app_status = req.body.status
    try {
        if (app_status == "all"){
            app_list = await AppointmentModel.find({doctorId: doctorId})
        }
        else{
            app_list = await AppointmentModel.find({doctorId: doctorId, status: app_status})
        }
        if (app_list == null){
            res.status(httpStatus.NOT_FOUND).json({message: "appointment not found."})
        }
        else res.status(httpStatus.OK).json({
            data: app_list
        })
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

appointmentsController.getAppointmentOfUser = async (req, res) => {
    userId = req.body.userId
    app_status = req.body.status
    console.log(userId, app_status)
    try {
        if (app_status == "all"){
            console.log("all appointment")
            app_list = await AppointmentModel.find({userId: userId})
        }
        else{
            app_list = await AppointmentModel.find({userId: userId, status: app_status})
        }
        if (app_list == null){
            return res.status(httpStatus.NOT_FOUND).json({message: "appointment not found."})
        }
        else{ return res.status(httpStatus.OK).json({
            data: app_list
        })
        }
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

appointmentsController.countByMonth = async (req, res) => {
    year = req.body.year
    month = req.body.month
    app_status = req.body.status
    try{
        AppointmentModel.find({}, (err, appointments) => {
            let countMonth = 0
            let appoint_list = []
            appointments.forEach(function(appointment){
                if (appointment.start.getYear() + 1900 == year && appointment.start.getMonth() == month){
                    countMonth += 1
                    appoint_list.push(appointment)
                }
            })
            return res.status(httpStatus.OK).json({count: countMonth, appointments: appoint_list})
        })
    }
    catch (e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

appointmentsController.aprrove = async (req, res) => {
    const update = {status: "Approved"}
    appointmentId = req.body.appointmentId
    console.log(appointmentId)
    try {
        appointment = await AppointmentModel.findByIdAndUpdate({_id: appointmentId}, update)
        appointment.status = "Approved"
        if (appointment == null){
            return res.status(httpStatus.NOT_FOUND).json({message: "appointment not found."})
        }
        else return res.status(httpStatus.OK).json({appointment: appointment})
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

appointmentsController.getByStatus = async (req, res) => {
    const app_status = req.body.status
    try{
        if (app_status == "all"){
            appointment_list = await AppointmentModel.find({})
        }
        else{
            appointment_list = await AppointmentModel.find({status: app_status})
        }
        if (appointment_list == null){
            return res.status(httpStatus.NOT_FOUND).json({message: "appointment not found"})
        }
        return res.status(httpStatus.OK).json({data: appointment_list})    
    }
    catch (e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

appointmentsController.getListAppointment = async (req, res, next) => {
    const {year} = req.body
    AppointmentModel.find({}, (error, appointments) => {
        let countMonth = {}
        appointments.forEach(function(appointment){
            if (appointment.start.getYear() + 1900 == year){
                let month = appointment.start.getMonth() + 1 
                if(countMonth.hasOwnProperty(month) == false){
                    countMonth[month] = 1
                }
                else{
                    countMonth[month] += 1
                }
            }
        })
        return res.status(httpStatus.OK).json(countMonth)
    })
}

appointmentsController.getAppointmentOfUserNow = async (req, res, next) => {
    const userId = req.body.userId
    var start = new Date()
    start.setUTCHours(0,0,0,0)
    var end = new Date()
    end.setUTCHours(23, 59, 59, 0)
    try{
        appointments = await AppointmentModel.find({
            start: {
                $gte: start,
                $lt: end
            },
            userId: userId
        })
        return res.status(httpStatus.OK).json({
            data: appointments
        })
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        })
    }
}

appointmentsController.getAppointmentOfDoctorNow = async (req, res, next) => {
    const doctorId = req.body.doctorId
    var start = new Date()
    start.setUTCHours(0,0,0,0)
    var end = new Date()
    end.setUTCHours(23, 59, 59, 0)
    try{
        appointments = await AppointmentModel.find({
            start: {
                $gte: start,
                $lt: end
            },
            doctorId: doctorId
        })
        return res.status(httpStatus.OK).json({
            data: appointments
        })
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        })
    }
}

module.exports = appointmentsController