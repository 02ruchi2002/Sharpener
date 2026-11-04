const db = require('../utils/db_connection')


const addStudent = (req,res) =>{
   console.log('inside add student')

   const {name,email,age} = req.body;

   const addQuery = `insert into students (name,email,age) values(?,?,?)`
   
   db.execute(addQuery,[name,email,age],(err,result)=>{
     if(err){
        console.log(err.message)
        res.status(500).send(err.message)
     }
     console.log('student added succesfully')

     res.status(200).send('student added succesfully')
   })

}


const getAllStudents = (req,res) =>{
   console.log('inside get all student')

   const getQuery = `select * from students`;

   db.execute(getQuery,(err,result)=>{
     if(err){
        console.log(err.message);
        res.status(500).send(err.message)
     }

     console.log(result)

     res.status(200).send({
        message:"students fetch successfully",
        data:result
     })
   })
   
}


const getStudentByID = (req,res) =>{
   console.log('inside get student by id ')
   const {id} = req.params;

   const getByIdQuery = `select * from students where id = ?`;

   db.execute(getByIdQuery,[id],(err,result)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message)
    }

    if(result.length === 0){
      res.status(404).send('student not found')
    }

    console.log("student fetched successfuly",result)

    res.status(200).send({
        message:"student fetch successfully",
        data:result
    })
   })
   
}


const updateStudent = (req,res) =>{
   console.log('inside update student')

   const {id} = req.params;

   const {name,email,age} = req.body;

   const updateQuery = `update students set name = ? , email = ? , age = ? where id = ?`;

   db.execute(updateQuery,[name,email,age,id],(err,result)=>{
      if(err){
        console.log(err.message);
        res.status(500).send(err.message)
      }
      if(result.affectedRows === 0){
        res.status(404).send('student not found')
        return;
      }

      res.status(200).send('student update successfuly')
   })
}


const deleteStudent = (req,res) =>{
   console.log('inside delete student')

   const {id} = req.params;

   const deleteQuery = `delete from students where id = ?`

   db.execute(deleteQuery,[id],(err,result)=>{
      if(err){
        console.log(err.message)
        res.status(500).send(err.message)
      }
       if(result.affectedRows === 0){
        res.status(404).send('student not found')
        return;
      }

      res.status(200).send("student deleted")
   })
  
}

module.exports = {
    addStudent,
    getAllStudents,
    getStudentByID,
    updateStudent,
    deleteStudent
}