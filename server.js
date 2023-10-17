const express = require('express');
const path = require('path');

const students = require('./database/students');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req,res) {
    res.render('home')
})

app.get('/students', function(req,res) {
    const studentsPresent = students.showAttendance();
    res.render('students/studentList', { studentsPresent });
})

app.listen(3000, function() {
    console.log('listenin on port 3000');
})

