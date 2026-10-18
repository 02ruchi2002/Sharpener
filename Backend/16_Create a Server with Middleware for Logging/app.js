const express = require('express')

const app = express();

// middleware
app.use((req,res,next)=>{
    let method = req.method;
    let url = req.url;
    console.log(`${method} request made to ${url}`)
    next();
})


app.get("/products",(req,res)=>{
   res.send("<h1>Here is the list of all products.</h1>")
})

app.post("/products",(req,res)=>{
   res.send( "<h1>A new product has been created.</h1>")
})

app.get("/categories",(req,res)=>{
   res.send("<h1>Here is the list of all categories.</h1>")
})

app.post("/categories",(req,res)=>{
   res.send("<h1>A new category has been created.</h1>")
})

app.listen(5000,()=>{
    console.log("server is runing")
})