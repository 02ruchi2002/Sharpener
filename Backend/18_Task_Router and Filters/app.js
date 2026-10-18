const express = require('express');
const bookRouter = require('./routes/books')

const app = express();

app.use('/books',bookRouter)


app.listen(3000,()=>{
    console.log("server is runing")
})