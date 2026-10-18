const express = require('express')

const app = express();

// dynamic route
app.get('/welcome/:username',(req,res)=>{
    let userName = req.params.username;
    // query parameter - additional infomation
    let userRole = req.query.role
    res.send(`<h1>Welcome,${userName} Your role is ${userRole}</h1>`)
})

app.listen(3000,()=>{
    console.log("server is runing")
})