const {spawn} = require("child_process")

console.log("starting computation...")

const child = spawn('cmd',['/c','echo %cd%'])

child.stdout.on('data',(data)=>{
     console.log(data.toSting())
})

child.stderr.on('data',(err)=>{
     console.log(err.toSting())
})

child.on('close',(code)=>{
   console.log("child process closed",code)
})

console.log("computation done!")