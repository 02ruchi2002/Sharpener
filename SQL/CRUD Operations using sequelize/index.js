const express = require('express')
const db = require('./utils/db_connection')
const studentRoutes = require('./routes/studentsRoutes')

const studentsModel = require('./models/students')
const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
   res.send('Hello world')
})

app.use('/students',studentRoutes)

db.sync().then(()=>{
    app.listen(3200,(err)=>{
        console.log('server is runing')
    })
}).catch((err)=>{
    console.log(err)
})
