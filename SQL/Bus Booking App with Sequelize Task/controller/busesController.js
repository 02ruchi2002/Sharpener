const { Op } = require('sequelize');
const db = require('../utils/db_connection')
const Bus = require('../models/buses')


const getBuses = async(req,res) =>{
   try {
      const requireSeats = Number(req.params.seats)
      const buses = await Bus.findAll({
         where:{
            availableSeats:{
               [Op.gt]: requireSeats
            }
         }
      })
      console.log(buses)
      res.status(200).send({
         message:'buses fetch successfuly',
         data:buses
      })
   } catch (error) {
      res.status(500).send("unable to fetch buses")
   }
}


const addBus = async(req,res) =>{
   console.log('add bus')
   try {
      const {busNumber,totalSeats,availableSeats} = req.body;
      const bus = await Bus.create({
         busNumber:busNumber,
         totalSeats:totalSeats,
         availableSeats:availableSeats
      })
      console.log(bus)
      res.status(200).send(`bus with busNumber ${busNumber} is created`)
   } catch (error) {
       res.status(500).send('unable to create')
   }
}

module.exports ={
    getBuses,
    addBus
}