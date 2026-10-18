const expres = require('express')

const app = expres();

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
   res.send("<h1>A new category has been added.</h1>")
})


app.use((req,res,next)=>{
 res.status(404)
 res.send("<h1>Page Not Found</h1>")
})


let port = 4000

app.listen(port,()=>{
   console.log(`Server is running on ${port}`)
})