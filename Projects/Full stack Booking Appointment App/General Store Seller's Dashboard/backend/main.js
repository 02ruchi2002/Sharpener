const express = require('express')
const cors = require('cors')
const db = require('./utils/db_connection')
const itemRouter = require('./routes/item')

const app = express();

app.use(cors());

app.use(express.json());

app.use('/item',itemRouter)

app.get('/',(req,res)=>{
    res.send('helloooo')
})


db.sync().then(() => {

    app.listen(3200, () => {
        console.log("server is running")
    })
}).catch((err) => {
    console.log(err)
})

