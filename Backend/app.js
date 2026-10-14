const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server is created")

    res.setHeader('Content-Type', 'text/html')
    if (req.url == "/") {
        res.statusCode = 200;
        res.end("<h1>hello world</h1>")
    } else {
        if (req.url == "/pizza") {
            res.statusCode = 200;
            res.end("<h1>this is your pizza</h1>")
        } else {
            res.statusCode = 404;
            res.end("<h1>page not found</h1>")
        }
    }

    // reg.url  , req.headers
})

let port = 3000;

server.listen(port, () => {
    console.log("server is running")
})