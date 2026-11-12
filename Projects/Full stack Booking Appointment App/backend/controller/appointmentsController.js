const db = require('../utils/db_connection');
const Appointment = require('../modules/appointments')

const getAllAppointment = async(req,res) =>{
   console.log("inside get all bookings")
   try {
      const appointment = await Appointment.findAll()
      res.status(200).send({
         message:"appointments fetched successfuly",
         data:appointment
      })
      
   } catch (error) {
      res.status(500).send('unable to fetch appointments')
   }

}

const addAppointment = async(req,res) =>{
   console.log("inside add booking")
      try {
       const {userName,phoneNumber,email} = req.body;
      const appointment = await Appointment.create({
         userName:userName,
         phoneNumber:phoneNumber,
         email:email,
      })

      res.status(200).send(`appointment with name ${userName} added`)
      
   } catch (error) {
      res.status(500).send('unable to add')
   }
}

const updateAppointment = async(req,res) =>{
   console.log("inside update booking")
   try {
      const {id} = req.params
      const  {userName,phoneNumber,email} = req.body
      const  appointment = await Appointment.findByPk(id)

      if(!appointment){
         res.status(404).send('appointment not found')
      }

      appointment.userName = userName;
      appointment.phoneNumber = phoneNumber;
      appointment.email = email;

      await appointment.save()

      res.status(200).send('appointment has been updated')
   } catch (error) {
      res.status(500).send('appointment can not be update')
   }
}

const deleteAppointment = async(req,res) =>{
   console.log("inside delete booking")
   try {
      const {id} = req.params;

      const deleteAppointment = await Appointment.destroy({
         where:{
            id:id
         }
      })

      if(deleteAppointment === 0){
         res.status(404).send('appointment not found')
      }

      res.status(200).send('appointment deleted')
      
   } catch (error) {
      res.status(500).send('Error encountered while deleting')
   }
}

module.exports ={
  getAllAppointment,
  addAppointment,
  updateAppointment,
  deleteAppointment
}