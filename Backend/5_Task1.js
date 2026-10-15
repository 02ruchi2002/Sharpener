const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{

    if(req.url == "/"){
        res.setHeader('Content-Type','text/html')
        res.end(`
            <form action="/message" method="POST">
            <label for="name">Name</label>
            <input type="text" name="username"/>
            <button type="submit">Add</button>
            </form>
            `);
    }else{
        if(req.url == "/message"){
            res.setHeader('Content-Type','text/html')
            let dataChunks = [];

            req.on('data',(chunks)=>{
                console.log("chuncks =>",chunks)
                dataChunks.push(chunks)
            })

            req.on('end',()=>{
                 let bufferData = Buffer.concat(dataChunks);
                 console.log("bufferConcatData",bufferData)
                 let data = bufferData.toString()
                 console.log("data =>",data)
                 let dataValues = data.split("=")[1]
                 console.log("dataValues =>",dataValues)

                 fs.writeFile('formNames.txt',dataValues,(err)=>{
                     res.statusCode = 302;
                     res.setHeader('Location','/')
                     res.end()
                 })
            })

        }else{
            if(req.url == '/read'){
                fs.readFile('formNames.txt',(err,data)=>{
                    res.setHeader('Content-Type','text/html')
                    console.log("read data =>",data)
                    res.end(`
                        <h1>${data.toString()}</h1>
                        `)
                })
            }
        }
    }

})


const port = 3003;

server.listen(port,()=>{
    console.log("server is running")
})