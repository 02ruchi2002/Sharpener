const fs = require('fs')

const requestHandler = (req,res) =>{
    
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
    
}

const antoherFuntion = () =>{
    console.log("this is another function")
}


// exporting this frunction to use it in  7_Task_clean_and_organizing_code.js


// 1] first way to export the function

module.exports = requestHandler;


// 2] second way to export the function if we have some many function


// module.exports = {
//     requestHandler,
//     antoherFuntion
// }


// 3] third way to export the function if we have some many function


// module.exports = {
//    handler: requestHandler,
//    testFuntion: antoherFuntion
// }


// 4] forth way to export the function if we have some many function


// export.handler = requestHandler
// export.testFunction = antoherFuntion