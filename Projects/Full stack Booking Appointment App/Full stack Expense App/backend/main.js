const express = require('express')
const cors = require('cors')
const db = require('./utils/db_connection')
const expenseRouter = require('./routes/expense')

const app = express();

app.use(cors());

app.use(express.json());

app.use('/expense',expenseRouter)

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

