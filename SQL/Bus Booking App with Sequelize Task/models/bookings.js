const {Sequelize,DataTypes} = require('sequelize');
const sequlize = require('../utils/db_connection')

const Bookings = sequlize.define('Bookings',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    seatNumber:{
        type:DataTypes.INTEGER
    }

})

module.exports = Bookings;