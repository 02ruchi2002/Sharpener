const express = require('express')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
const cardRouter = require('./routes/cardRoutes')

const app = express();

app.use('/users',userRouter)
app.use('/products',productRouter)
app.use('/card',cardRouter)


app.listen(3002,()=>{
    console.log("server is runing")
})