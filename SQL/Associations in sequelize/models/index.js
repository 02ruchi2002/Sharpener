const Students = require('./students')
const IdentityCard = require('./identityCards')
const Department = require('./department')


// ONE-TO-ONE ASSOCIATION

Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);


// ONE-TO-MANY ASSOCIATION

Department.hasMany(Students);
Students.belongsTo(Department);


module.exports = {
    Students,
    IdentityCard
}