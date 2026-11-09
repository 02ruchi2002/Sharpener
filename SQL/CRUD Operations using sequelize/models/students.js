const {Sequelize,DataTypes} = require("sequelize");
const sequelize = require('../utils/db_connection');

const Students = sequelize.define('Students2',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false
  },
 }, {
  tableName: 'students2'
})

module.exports = Students;