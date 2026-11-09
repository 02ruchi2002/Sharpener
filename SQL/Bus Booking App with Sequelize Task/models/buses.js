const {Sequelize,DataTypes} = require('sequelize');
const sequlize = require('../utils/db_connection')

const Buses = sequlize.define('Buses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    busNumber:{
        type:DataTypes.INTEGER
    },
    totalSeats:{
        type:DataTypes.INTEGER
    },
    availableSeats:{
        type:DataTypes.INTEGER
    }
})

module.exports = Buses;