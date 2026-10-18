const express = require('express');

const app = express();

const orderRouter = require('./routes/orders')
const userRouter = require('./routes/users')

app.use('/orders',orderRouter)

app.use('/users',userRouter)


app.listen(3000,()=>{
    console.log("server is runing")
})