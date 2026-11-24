const { DataTypes } = require('sequelize')
const sequelize = require('../utils/db_connection')

const DashboardItem = sequelize.define('generalStore',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    itemName:{
       type:DataTypes.STRING,
       allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    quantity:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
})

module.exports = DashboardItem;