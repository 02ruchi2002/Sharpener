const express = require('express');
const usersRoutes = require('./routes/usersRoutes')
const busesRoutes = require('./routes/busesRoutes')

const app = express()

app.use(express.json())

app.use('/users',usersRoutes)
app.use('/buses',busesRoutes)


app.get('/',(req, res) => {
    res.send('hello....')
})


app.listen(3200, () => {
    console.log('server is runing')
})