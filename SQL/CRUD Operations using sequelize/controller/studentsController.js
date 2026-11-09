const db = require('../utils/db_connection')
const Student = require('../models/students')

const addEnteries = async(req,res)=>{
  try {
    const {name,email} = req.body;
    const student = await Student.create({
      email:email,
      name:name,
    });
    res.status(200).send(`student with name ${name} is created`)
  } catch (error) {
     res.status(500).send('unable to create');
  }
}

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();

    return res.status(200).send({
      message: "Students fetched successfully",
      data: students
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send('Unable to fetch students');
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).send({
        message: "Student not found"
      });
    }

    return res.status(200).send({
      message: "Student fetched successfully",
      data: student
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Unable to fetch student"
    });
  }
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const student = await Student.findByPk(id);

    // console.log("Student found:", student);

    if (!student) {
      return res.status(404).send('Student is not found');
    }

    student.name = name;
    await student.save();

    return res.status(200).send('Student has been updated');

  } catch (error) {
    console.log(error);
    return res.status(500).send('Student cannot be updated');
  }
};


const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await Student.destroy({
      where: {
        id: id
      }
    });

    if (deletedStudent === 0) {
      return res.status(404).send('Student is not found');
    }

    return res.status(200).send('Student is deleted');

  } catch (error) {
    console.log(error);
    return res.status(500).send('Error encountered while deleting');
  }
};



module.exports ={
    addEnteries,
    getAllStudents,
    getStudentById,
    updateEntry,
    deleteEntry
};