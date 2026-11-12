const {DataTypes} = require('sequelize')
const sequelize = require('../utils/db_connection')


const Appointments = sequelize.define('Appointments',{
    id:{
       type:DataTypes.INTEGER,
       autoIncrement:true,
       primaryKey:true,
       allowNull:false
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phoneNumber:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
})

module.exports = Appointments