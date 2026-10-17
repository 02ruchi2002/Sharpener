const express = require('express');

const app = express();

app.use('/welcome',(req,res,next)=>{
    req.user = "Guest"
    next()
})

app.get('/welcome',(req,res)=>{
    res.send(`<h1>Welcome,${req.user}</h1>`)
})

let port = 3000;

app.listen(port,()=>{
    console.log("server is runing")
})