const express = require('express');
const productRouter = require('./routes/productRoutes')

const app = express();

app.use('/products',productRouter)

app.listen(3200,()=>{
    console.log('server  is runing')
})