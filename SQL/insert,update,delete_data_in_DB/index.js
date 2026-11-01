const express = require('express')
const db = require('./utils/db_connection')
const studentRoutes = require('./routes/studentsRoutes')


const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
   res.send('Hello world')
})

app.use('/students',studentRoutes)

app.listen(3200,()=>{
    console.log('server is runing')
})