const db = require('../utils/db_connection')

const addEnteries = (req,res)=>{
    const {name,email} = req.body;
    const inserQuery = `INSERT INTO students2 (name ,email) values(?,?)`

    db.execute(inserQuery,[name,email],(err)=>{
       if(err){
        console.log(err.message)
        res.status(500).send(err.message);
        db.end();
        return;
       }
       console.log('value has been inserted')
       res.status(200).send(`Student with name ${name} successfully added `)
    })
}
 

const updateEntry = (req,res) =>{
   const {id}= req.params;
   const {name} = req.body;

   const updateQuery = `UPDATE students2 set name=? where id = ?`

   db.execute(updateQuery,[name,id],(err,result)=>{
     if(err){
        console.log(err.message);
        res.status(500).send(err.message);
        db.end();
        return;
     }
     if(result.affectedRows === 0){
        res.status(404).send('Student not found');
        return;
     }

     res.status(200).send('students has been updated')
      db.end();
   })
}

const deleteEntry = (req,res) =>{
  const {id} = req.params;

  console.log("id",id)

  const deleteQuery = `DELETE FROM students2 where id= ?`;

  db.execute(deleteQuery,[id],(err,results)=>{
    if(err){
      console.log(err.message);
      res.status(500).send(err.message)
    }
    if(results.affectedRows === 0){
      res.status(404).send('students is not found')
      return;
    }
    res.status(200).send(`user with id ${id} is deleted`)
    db.end();
  })
}

module.exports ={
    addEnteries,
    updateEntry,
    deleteEntry
}