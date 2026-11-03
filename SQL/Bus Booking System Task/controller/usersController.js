const db = require('../utils/db_connection')

const getUsers = (req,res) =>{
  console.log('get users')

  const getQuery = `select * from users`
  console.log('get query =>',getQuery)

  db.execute(getQuery,(err,result)=>{
    if(err){
        res.status(500).send(err.message)
    }

    console.log('users =>',result)
    res.status(200).send({
      message:"Users fetch successsfully",
      data:result
    })
  })
}


const addUser = (req,res) =>{
  console.log('add user')
  const {name,email} = req.body

  const addQuery = `INSERT INTO users (name,email) values(?,?)`

  db.execute(addQuery,[name,email],(err)=>{
    if(err){
        return res.status(500).send(err.message);  
    }
    console.log('user has been added')
    res.status(200).send(`user with name ${name} is added`)
  })

}

module.exports = {
    getUsers,
    addUser
}