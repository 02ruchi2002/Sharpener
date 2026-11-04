const mysql = require('mysql2')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'testdb',
})

db.connect((err)=>{
   if(err){
    console.log(err)
    return;
   }
   console.log('connection has been created')

   const studentsQuery = `create table IF NOT EXISTS students 
   (id int auto_increment primary key, name varchar(20),email varchar(255),age int)`

   db.execute(studentsQuery,(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('students table is created')
   })
})

module.exports = db;