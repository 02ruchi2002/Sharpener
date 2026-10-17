const express = require('express')

const app = express();


// Authentication middleware common for every request
app.use((req,res,next)=>{
   console.log("Authentication middleware called")
   // to run next middleware
   next();
})

// middleware for specified url
app.use("/library-2",(req,res,next)=>{
    console.log("book recomendation")
    next()
})

app.use("/library-3",(req,res,next)=>{
    console.log(" special access to research paper for professors and senoirs")
})


app.get("/library-2",(req,res)=>{
    res.send("<h1>library 2 entered</h1>")
})

app.get("/library-3",(req,res)=>{
    res.send("<h1>library 3 entered</h1>")
})

const port = 3200;

app.listen(port,()=>{
    console.log("server is runing")
});