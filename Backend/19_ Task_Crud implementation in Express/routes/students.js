const express = require('express')

const router = express.Router();

const students = [

   { id: 1, name: "Alice" },

   { id: 2, name: "Bob" },

   { id: 3, name: "Charlie" }

];

   
router.get('/',(req,res)=>{
  let studentsName = students.map((item)=>item.name)
   res.send(`Students: ${studentsName.join()}`)
})


router.get('/:id', (req, res) => {
   let id = Number(req.params.id);
   const student = students.find((item) => item.id === id)
   if (student) {
      res.send(`Student ${student.name}`)
   } else {
      res.send('Student not found')
   }
})


module.exports = router;
