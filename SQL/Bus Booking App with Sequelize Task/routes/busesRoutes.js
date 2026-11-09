const express = require('express');
const busesController = require('../controller/busesController')


const router = express.Router();

router.get('/available/:seats',busesController.getBuses)
router.post('/',busesController.addBus)

module.exports = router