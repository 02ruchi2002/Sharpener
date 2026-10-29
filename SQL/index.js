const express = require('express')
const mysql = require('mysql2')

const app = express();

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

   const creationQuery = `create table Students (
   id int auto_increment primary key,
   name varchar(20),
   email varchar(20)
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

app.get('/',(req,res)=>{
   res.send('Hello world')
})

app.listen(3200,()=>{
    console.log('server is runing')
})