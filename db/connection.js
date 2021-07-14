const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        //your MySQL username,
        user: 'root',
        //your MySQL password
        password: '0wXeV88db!',
        database: 'cms'
    },
    console.log('Connected to the employee database.')
);

db.connect(function (err) {
    if(err) throw err
})

module.exports = db;