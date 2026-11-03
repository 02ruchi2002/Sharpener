const db = require('../utils/db_connection')

const getBuses = (req,res) =>{
   console.log(' inside get buses')
   const requireSeats = req.params.seats

   const getQuery = `select * from buses where availableSeats >= ?`;

   db.execute(getQuery,[requireSeats],(err,result)=>{
      if(err){
        res.status(500).send(err.message)
      }
      
      console.log('buses =>',result)

      res.status(200).send({
        message:"Buses fetch successfully",
        data:result
      })
   })
}



const addBus = (req,res) =>{
   console.log('add bus')
   const {busNumber,totalSeats,availableSeats} = req.body;
   const addQuery = `INSERT INTO buses (busNumber,totalSeats,availableSeats) values(?,?,?)`
   
   db.execute(addQuery,[busNumber,totalSeats,availableSeats],(err,result)=>{
      if(err){
        res.status(500).send(err.message)
        return;
      }
      res.status(200).send('bus added successfully')
   })
}

module.exports ={
    getBuses,
    addBus
}