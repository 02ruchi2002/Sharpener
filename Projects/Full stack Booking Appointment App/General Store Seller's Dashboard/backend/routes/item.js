const express = require('express');
const itemController = require('../controller/items')

const router = express.Router();

router.get('/',itemController.getAllItems)
router.post('/add',itemController.addItem)

module.exports = router;