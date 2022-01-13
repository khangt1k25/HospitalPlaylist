const AppointmentModel = require('../models/Appointments')
const UserModel = require('../models/Users')
const httpStatus = require('../utils/httpStatus')
const appointmentsController = {}

appointmentsController.create = async (req, res, next) => {
    const {start, end, userId, userDescription, doctorId} = req.body
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
        // let user = await UserModel.findById(userId)
        const saveAppointment = await appointment.save()
        console.log("Create appointment successfully")
        return res.status(httpStatus.CREATED).json({
            data :{
                id: saveAppointment._id,
                start: saveAppointment.start,
                end: saveAppointment.end,
                userId: user._id
            }
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
        appointment = AppointmentModel.findById(appointmentId)
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


// appointmentsController.getListAppointment = async (req, res, next) => {
//     const {year} = req.body
//     AppointmentModel.find({}, (error, appointments) => {
//         let countMonth = {}
//         appointments.forEach(function(appointment){
//             if (appointment.start.getYear() + 1900 == year){
//                 let month = appointment.start.getMonth() + 1 
//                 if(countMonth.hasOwnProperty(month) == false){
//                     countMonth[month] = 1
//                 }
//                 else{
//                     countMonth[month] += 1
//                 }
//             }
//         })
//         return res.status(httpStatus.OK).json(countMonth)
//     })
// }

module.exports = appointmentsController