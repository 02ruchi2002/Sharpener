const http = require('http')
const routes = require("./routes")


routes.antoherFuntion()

const server = http.createServer(routes)

// third way to access function

routes.testFunction()

// const server = http.createServer(routes.handler)


const port = 3003;

server.listen(port,()=>{
    console.log("server is running")
})