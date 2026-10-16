const {fork} = require("child_process")

console.log("starting computation...")

const child = fork('./file.js')

child.send({number:40})

child.on("message",(data)=>{
     console.log("response received",data)
})

console.log("computation done!")