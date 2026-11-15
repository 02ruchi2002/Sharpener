const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testdb', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
});

    (async () => {
        try {
            await sequelize.authenticate();
            console.log('connection to the database has been created');
        } catch (err) {
            console.log(err);
        }
    })();


module.exports = sequelize;

