
const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log("output from middleware 1")
    // without this second middleware console will not be printed
    next()
})

app.use((req,res,next)=>{
    console.log("output from middleware 2")
    // returning the response to web page
    res.send("hello everyone")
})


app.listen(3005);   // instead of doing bleow code
// const server = http.createServer(app)

// server.listen(3005,()=>{
//     console.log("server is runing")
// })