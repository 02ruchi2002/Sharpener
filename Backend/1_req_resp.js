
const http = require('http')

const server = http.createServer((req,res)=>{
   console.log("server is created")
   if(req.url == "/home"){
    res.end("<h1>Welcome home</h1>")
   }else if(req.url == "/about"){
    res.end("<h1>Welcome to about us</h1>")
   }else if(req.url == "/node"){
    res.end("<h1>Welcome to my Node Js projecte</h1>")
   }else{
    res.end("<h1>Page Not Found</h1>")
   }
})

const port = 3001;

server.listen(port,()=>{
    console.log("server is running")
})