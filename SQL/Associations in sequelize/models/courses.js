const {Sequelize,DataTypes} = require("sequelize");
const sequelize = require('../utils/db_connection');

const Courses = sequelize.define('courses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Courses;