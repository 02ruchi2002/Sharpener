const db = require('../utils/db_connection');
const User = require('../models/users')

const getUsers = async(req,res) =>{
  try {
    const users = await User.findAll();
    
    res.status(200).send({
      message:'fetched all users',
      data:users
    })

  } catch (error) {
    res.status(500).send('unable to fetch users')
  }
}


const addUser = async(req,res) =>{
  try {
    const {name,email} = req.body
    const user = await User.create({
      name:name,
      email:email
    })
    
    res.status(200).send(`user with name ${name} is created`)
  } catch (error) {
    res.status(500).send('unable to create')
  }

}

module.exports = {
    getUsers,
    addUser
}