// Connect to database
const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit:10,
    host: 'localhost',
    user: 'root',
    password: 'aleceia1998',
    database: 'countriesDB'
});

module.exports = pool;
