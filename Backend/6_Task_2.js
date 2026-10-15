const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    if (req.url == "/") {

        fs.readFile('message.txt', (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>${data.toString()}</h1>
            
            <form action="/message" method="POST">
             <input type="text" name="message"/>
             <button type="submit">Send</button>

            </form>
            `)
        })

    } else {
        if (req.url == "/message") {
            res.setHeader('Content-Type', 'text/html')
            let dataChuncks = [];
            req.on('data', (chuncks) => {
                dataChuncks.push(chuncks)
            })

            req.on('end', () => {
                let bufferData = Buffer.concat(dataChuncks)
                let data = bufferData.toString();
                let messageValue = data.split("=")[1]

                fs.writeFile('message.txt', messageValue, (err) => {
                    res.statusCode = 302;
                    res.setHeader('Location', '/')
                    res.end()
                })
            })
        }
    }
})

const port = 3004;

server.listen(port, () => {
    console.log("server is runing")
})