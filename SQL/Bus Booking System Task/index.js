const express = require('express');
const mysql = require('mysql2')

const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'testdb'
})

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connection has been created')

    // First table : users
    const usersQuery = `create table Users (
   id int auto_increment primary key,
   name varchar(20),
   email varchar(20)
   )`

    connection.execute(usersQuery, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('user table is created')
    })


    // Second table : buses
    const busesQuery = `create table Buses(
   id int auto_increment primary key,
   busNumber int ,
   totalSeats int , 
    availableSeats int
    )`

    connection.execute(busesQuery, (err) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('buses table is created')
    })

    // Third table : bookings
    const bookingQuery = `create table Bookings(
    id int auto_increment primary key,
    seatNumber int 
    )`

    connection.execute(bookingQuery, (err) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('booking table is created')
    })

    // Forth table : payments
    const paymentsQuery = `create table payments(
    id int auto_increment primary key,
    amountPaid int,
    paymentStatus varchar(10))`

    connection.execute(paymentsQuery, (err) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('payments table is created')
    })

    connection.end();

})

app.get('/', (req, res) => {
    res.send('hello....')
})

app.listen(3200, () => {
    console.log('server is runging')
})