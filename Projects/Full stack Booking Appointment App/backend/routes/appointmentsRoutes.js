const express = require('express');
const appointmentsController = require('../controller/appointmentsController')

const router = express.Router();

router.get('/',appointmentsController.getAllAppointment)
router.post('/add',appointmentsController.addAppointment)
router.put('/update/:id',appointmentsController.updateAppointment)
router.delete('/delete/:id',appointmentsController.deleteAppointment)

module.exports = router;