const express = require('express');
const studentsController = require('../controller/studentsController')

const router = express.Router();

router.post('/add',studentsController.addEnteries)
router.get('/',studentsController.getAllStudents)
router.get('/:id',studentsController.getStudentById)
router.put('/update/:id',studentsController.updateEntry)
router.delete('/delete/:id',studentsController.deleteEntry)

module.exports = router;