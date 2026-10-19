
const getAllUsers = (req,res) =>{
    res.send('Fetching all users')
}

const addNewUser = (req,res)=>{
    res.send('Adding a new user')
}

const fetchUserById = (req,res)=>{
    res.send(`Fetching user with ID: ${req.params.id}`)
}

module.exports = {
    getAllUsers,
    addNewUser,
    fetchUserById
}

