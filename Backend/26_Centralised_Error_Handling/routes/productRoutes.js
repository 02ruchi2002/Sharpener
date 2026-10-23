const express = require('express')
const productsController = require('../controllers/productsController')

const router = express.Router();

router.get('/:id',productsController.getProduct)

router.post('/',productsController.addNewProduct)


module.exports = router;