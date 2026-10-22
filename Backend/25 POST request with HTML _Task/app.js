const express = require('express');
const productRouter = require('./routes/productRoutes')

const app = express();

app.use(express.static('public'));
app.use(express.json())

app.use('/products',productRouter)


app.listen(3200,()=>{
    console.log('server  is runing')
})