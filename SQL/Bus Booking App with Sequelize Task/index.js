const express = require('express');
const db = require('./utils/db_connection')
const usersRoutes = require('./routes/usersRoutes')
const busesRoutes = require('./routes/busesRoutes')


const BookingsModel = require('./models/bookings')
const PaymentsModel = require('./models/payments')
const BusesModel = require('./models/buses')
const UsersModel = require('./models/users')

const app = express()

app.use(express.json())

app.use('/users', usersRoutes)
app.use('/buses', busesRoutes)


app.get('/', (req, res) => {
    res.send('hello....')
})

db.sync().then(() => {
    app.listen(3200, () => {
        console.log('server is runing')
    })
}).catch((error) => {
    console.log(error)
})
