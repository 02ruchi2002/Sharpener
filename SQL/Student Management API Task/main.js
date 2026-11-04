const express = require('express');
const studentsRoutes = require('./routes/studentsRoutes')

const app = express();

app.use(express.json())

app.use('/students',studentsRoutes)

app.get('/',(req,res)=>{
    res.send('helloooo...')
})

app.listen(3300,()=>{
    console.log('server is runing')
})
