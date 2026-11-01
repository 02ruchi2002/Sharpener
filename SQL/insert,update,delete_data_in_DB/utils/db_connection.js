const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'testdb'
})

connection.connect((err)=>{
   if(err){
    console.log(err);
    return;
   }
   console.log('connection has been created')

   const creationQuery = `create table IF NOT EXISTS Students (
   id int auto_increment primary key,
   name varchar(20),
   email varchar(255)
   )`

   connection.execute(creationQuery,(err)=>{
    if(err){
        console.log(err);
        connection.end();
        return;
    }
    console.log('table is created')
   })
})

module.exports = connection