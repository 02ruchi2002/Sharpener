const Students = require('./students')
const IdentityCard = require('./identityCards')
const Department = require('./department')
const Courses = require('./courses')
const StudentCourses = require('./studentCourse')


// ONE-TO-ONE ASSOCIATION

Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);


// ONE-TO-MANY ASSOCIATION

Department.hasMany(Students);
Students.belongsTo(Department);


// MANY-TO-MANY ASSOCIATION

Students.belongsToMany(Courses,{through:StudentCourses})
Courses.belongsToMany(Students,{through:StudentCourses})

module.exports = {
    Students,
    IdentityCard,
    Courses,
    StudentCourses
}