const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'testdb'
})

db.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connection has been created')

    // First table : users
    const usersQuery = `create table IF NOT EXISTS Users (
   id int auto_increment primary key,
   name varchar(20),
   email varchar(255)
   )`

    db.execute(usersQuery, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('user table is created')
    })


    // Second table : buses
    const busesQuery = `create table IF NOT EXISTS Buses(
   id int auto_increment primary key,
   busNumber int ,
   totalSeats int , 
    availableSeats int
    )`

    db.execute(busesQuery, (err) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('buses table is created')
    })

    // Third table : bookings
    const bookingQuery = `create table IF NOT EXISTS Bookings(
    id int auto_increment primary key,
    seatNumber int 
    )`

    db.execute(bookingQuery, (err) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('booking table is created')
    })

    // Forth table : payments
    const paymentsQuery = `create table IF NOT EXISTS payments(
    id int auto_increment primary key,
    amountPaid int,
    paymentStatus varchar(10))`

    db.execute(paymentsQuery, (err) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('payments table is created')
    })

})

module.exports = db;