const {Sequelize,DataTypes} = require("sequelize");
const sequelize = require('../utils/db_connection');

const StudentCourses= sequelize.define('studentCourses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
})

module.exports = StudentCourses;