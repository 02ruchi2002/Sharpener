const express = require('express')
const cardController = require('../controllers/cardController')


const router = express.Router();

router.get('/:userId',cardController.getCardByUserId)

router.post('/:userId',cardController.addProductInCardByUserId)

module.exports = router;
