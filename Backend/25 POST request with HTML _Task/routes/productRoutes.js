const express = require('express');
const productController = require('../controllers/productController')

const router = express.Router();

router.get('/',productController.getProducts)
router.post('/',productController.postProduct)

module.exports = router;
