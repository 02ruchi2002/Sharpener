const express =  require('express');
const studentsConroller = require('../controller/studentsController')

const router = express.Router();

router.post('/',studentsConroller.addStudent)
router.get('/',studentsConroller.getAllStudents)
router.get('/:id',studentsConroller.getStudentByID)
router.put('/:id',studentsConroller.updateStudent)
router.delete('/:id',studentsConroller.deleteStudent)

module.exports = router;