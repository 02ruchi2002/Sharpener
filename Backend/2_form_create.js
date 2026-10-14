const http = require('http')

const server = http.createServer((req,res)=>{

    const url = req.url;
    const method = req.method;

    if(url == "/"){
        res.setHeader('Content-Type','text/html')
        res.end(`<form>
            <label for="name">Name</label>
            <input type="text" name="username"/>
            </form>`)
    }
})

const port = 3002;

server.listen(port,()=>{
    console.log("server is running")
})