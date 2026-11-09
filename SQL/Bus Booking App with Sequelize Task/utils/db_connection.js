const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('testdb','root','12345',{
    host:'localhost',
    dialect:'mysql'
});   // semicolun is must here

(
    async()=>{
        try {
            await sequelize.authenticate();
            console.log('connection to the database has been created')
        } catch (error) {
            console.log(error);
        }
    }
)();

module.exports = sequelize;