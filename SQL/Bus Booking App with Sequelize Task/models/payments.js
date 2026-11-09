const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../utils/db_connection')

const Payments = sequelize.define('Payments',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    amountPaid:{
        type:DataTypes.INTEGER
    },
    paymentStatus:{
        type:DataTypes.INTEGER
    }
})

module.exports = Payments;