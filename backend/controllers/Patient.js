const PatientModel = require('../models/Users')
const DocumentModel = require('../models/Documents')
const AppointmentModel = require('../models/Appointments')
const httpStatus = require('../utils/httpStatus')
const PatientController = {}
const bcrypt = require('bcryptjs')

PatientController.login = async (req, res, next) => {
    const {username, password} = req.body
    const user = await PatientModel.findOne({username}).lean()
    if (!user){
        return res.json({status: 'error', error: 'Invalid username'})
    }
    if(await bcrypt.compare(password, user.password)){
        return res.json({status: 'ok'})
    }
    return res.json({status:'error', error: 'Password incorrect'})
}

PatientController.register = async (req, res, next) => {
    const {username, email, password: plainTextPassword, age, gender} = req.body
    console.log(req.body)
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(plainTextPassword, salt)
    // let avater = await DocumentModel.findById("")
    patient = new PatientModel({
        username: username,
        email: email,
        password: password,
        age: age,
        gender: gender,
        appointmentPending: [],
        appointmentDone: []
    })

    try {
        const newPatient = await patient.save()
        console.log("Successfully")
        return res.status(httpStatus.CREATED).json({
            data: {
                id: newPatient._id,
                username: newPatient.username,
                email: newPatient.email,
                age: age,
                gender: gender
            }
        })
    }
    catch(e){
        console.log("Fail")
        return res.status(httpStatus.BAD_REQUEST).json({
            message: e.message
        })
    }
}

PatientController.requestAppointment = async (req, res) => {
    const {start, end, userId, userDescription, doctorId} = res.body

    appointment = new AppointmentModel({
        start: start,
        end: end,
        userId: userId,
        userDescription: userDescription,
        doctorId: doctorId,
        status: 'request',
        diagnoses: "",
        prescription: ""
    })

    try {
        const newAppointment = await appointment.save()
        console.log("Save")
        return res.status(httpStatus.CREATED).json({
            appointment: {
                id: newAppointment._id,
                start: newApointment.start,
                end: newApointment.end,
                userId: newAppiontment.userId,
                userDescription: newAppointment.userDescription,
                doctorId: newAppointment.doctorId,
                status: newAppointment.status,
                diagnoses: newAppointment.diagnoses,
                prescription: newAppointment.prescription
            }
        })
    }
    catch(e){
        console.log("Fail")
        return res.status(httpStatus.BAD_REQUEST).json({
            message: e.message
        })
    }
}

PatientController.getuserinfo = async (req, res) => {
  const {userid} = req.body
  try{
    user = PatientModel.findById(userid)
    if (user == null){
      return res.status(httpStatus.NOT_FOUND.json({message: "USER not found"}))
    }
    return res.status(httpStatus.OK.json({
      username: user.username,
      email: user.email,
      age: user.age,
      gender: user.gender
    }))
  }
  catch(e){
    return res.status(httpStatus.INTERNAL_SERVER_ERROR.json({message: e.message}))
  }
}

module.exports = PatientController
