const express = require('express');

const router = express.Router();

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

router.get('/',(req,res)=>{
  let courseName = courses.map((item)=>item.name)
   res.send(`Courses: ${courseName.join()}`)
})

router.get('/:id',(req,res)=>{
    let id = req.params.id;
    let filterCourse = courses.find((item)=>item.id == id)
    if(filterCourse){
   res.send(`Course :${filterCourse.name},Description:${filterCourse.description}`)
    }else{
      res.send('Course not found');
    }
})



module.exports = router;
