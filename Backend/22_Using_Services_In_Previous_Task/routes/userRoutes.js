const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router();

router.get('/',userController.getAllUsers)

router.post('/',userController.addNewUser)

router.get('/:id',userController.fetchUserById)

module.exports = router;