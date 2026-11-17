const Courses = require('../models/courses')
const Students = require('../models/students')

const addCourse = async(req,res)=>{
   try {
    const {name} = req.body;

    const course = await Courses.create({
        'name':name
    });

    res.status(201).json(course);
    
   } catch (error) {
     res.status(500).json({'error':error.message})
   }
}


const addStudentsToCourses = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const student = await Students.findByPk(studentId);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    // Fetch multiple courses
    const courses = await Courses.findAll({
      where: {
        id: courseId
      }
    });

    if (courses.length !== courseId.length) {
      return res.status(404).json({
        message: "Some courses were not found"
      });
    }

    // Associate multiple courses
    await student.addCourses(courses);

    const updatedStudent = await Students.findByPk(studentId, {
      include: Courses
    });

    return res.status(200).json(updatedStudent);

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};



module.exports ={
    addCourse,
    addStudentsToCourses
}


