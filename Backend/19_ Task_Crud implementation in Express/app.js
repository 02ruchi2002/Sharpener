const express = require('express')
const homeRouter = require("./routes/home")
const courseRouter = require('./routes/courses')
const studentRouter = require('./routes/students')

const app = express();

app.use('/home',homeRouter)
app.use('/courses',courseRouter)
app.use('/students',studentRouter)

app.get('/',(req,res)=>{
    res.send("Welcome to the Student & Course Portal API!")
})

app.listen(3000,()=>{
    console.log("server is runing")
})