const mysql = require('mysql2/promise')

// create the connection to database
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
    multipleStatements: true,
    charset: "utf8mb4",
    decimalNumbers: true,
});

pool.getConnection()
  .then(conn => {
    const res = conn.query('SELECT 1');
    conn.release();
    return res;
  }).then(results => {
    console.log('Connected to MySQL DB');
  }).catch(err => {
    console.log(err); 
  });

  
  module.exports = pool