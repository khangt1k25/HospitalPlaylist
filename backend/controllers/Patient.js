const PatientModel = require('../models/Users')
const DocumentModel = require('../models/Documents')
const AppointmentModel = require('../models/Appointments')
const DoctorModel = require('../models/Doctors')
const httpStatus = require('../utils/httpStatus')
const PatientController = {}
const bcrypt = require('bcryptjs')

PatientController.login = async (req, res, next) => {
    const {username, password} = req.body
    const user = await PatientModel.findOne({username})
    if (!user){
        return res.json({status: 'error', error: 'Invalid username'})
    }
    if(await bcrypt.compare(password, user.password)){
        return res.json({status: 'ok', user: user})
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

// PatientController.requestAppointment = async (req, res) => {
//     const {start, end, userId, userDescription, doctorId} = res.body

//     appointment = new AppointmentModel({
//         start: start,
//         end: end,
//         userId: userId,
//         userDescription: userDescription,
//         doctorId: doctorId,
//         status: 'request',
//         diagnoses: "",
//         prescription: ""
//     })

//     try {
//         const newAppointment = await appointment.save()
//         console.log("Save")
//         return res.status(httpStatus.CREATED).json({
//             appointment: {
//                 id: newAppointment._id,
//                 start: newApointment.start,
//                 end: newApointment.end,
//                 userId: newAppiontment.userId,
//                 userDescription: newAppointment.userDescription,
//                 doctorId: newAppointment.doctorId,
//                 status: newAppointment.status,
//                 diagnoses: newAppointment.diagnoses,
//                 prescription: newAppointment.prescription
//             }
//         })
//     }
//     catch(e){
//         console.log("Fail")
//         return res.status(httpStatus.BAD_REQUEST).json({
//             message: e.message
//         })
//     }
// }

PatientController.detail = async (req, res) => {
  userid = req.body.id
  console.log(userid)
  try{
    let user = await PatientModel.findById(userid)
    if (user == null){
      return res.status(httpStatus.NOT_FOUND).json({message: "USER not found"})
    }
    return res.status(httpStatus.OK).json({
      username: user.username,
      email: user.email,
      age: user.age,
      gender: user.gender
    })
  }
  catch(e){
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
  }
}

PatientController.getList = async (req, res) => {
    try{
        PatientModel.find({}, async function (err, patients){
            var patient_Map = {}
            patients.forEach(function(patient){
                data = {
                    username: patient.username,
                    email: patient.email,
                    age: patient.age,
                    gender: patient.gender
                }
                patient_Map[patient._id] = data
            })
            return res.status(httpStatus.OK).json({
                patient_Map
            })
        })
        
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

PatientController.delete = async (req, res) => {
    const doctorId = req.body.doctorId
    try{
        DoctorModel.findByIdAndDelete(doctorId, async function (err, docs){
            if (err){
                return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({messeage: e.message})
            }
            else{
                return res.status(httpStatus.OK).json({Deleted: docs})
            }
        })
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: e.message})
    }
}

module.exports = PatientController
