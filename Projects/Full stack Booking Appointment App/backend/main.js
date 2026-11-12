const express = require('express');
const cors = require('cors')
const db = require('./utils/db_connection')
const appointmentRoutes = require('./routes/appointmentsRoutes')

const app = express();

app.use(express.json())

app.use(cors());

app.get('/', (req, res) => {
    res.send("hellloooo")
})

app.use('/appointments',appointmentRoutes)

db.sync().then(() => {
    app.listen(3200, (err) => {
        console.log("server is runing")
    })
}).catch((err) => {
    console.log(err)
})
