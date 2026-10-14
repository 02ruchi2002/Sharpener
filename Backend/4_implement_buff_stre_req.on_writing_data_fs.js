const http = require('http')
const fs = require('fs');
const { buffer } = require('stream/consumers');

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
            res.setHeader('Content-Type',"text/html");

            //-----  using stream, buffer and req.on() -----
            let dataChuncks = [];

            req.on('data',(chunks)=>{
                console.log("chunks =",chunks)
                dataChuncks.push(chunks)
            })

            req.on('end',()=>{
                let combinedBuffer = Buffer.concat(dataChuncks)
                console.log(combinedBuffer)
                let formData = combinedBuffer.toString()       
                let formValues = formData.split("=")[1];
                console.log("value =" ,formValues)
                
                
                // ---  writing data into a file  ---
                fs.writeFile('formValues.txt',formValues,(err)=>{
                    // after writing data into file
                    //  we redirect the user  
                    res.statusCode=302;   //redirectd
                    res.setHeader('Location','/')
                    res.end()
                })
            })
        }else{
            // ----  read from the file ---
            if(req.url == "/read"){
                fs.readFile('fromValue.txt',(err,data)=>{
                    // we get data in buffer so we use toString() to convert it
                    console.log(data.toString())
                    res.end(`<h1>${data.toString()}</h1>`)
                })
            }
        }
    }
})

const port = 3003;

server.listen(port,()=>{
    console.log("server is running")
})