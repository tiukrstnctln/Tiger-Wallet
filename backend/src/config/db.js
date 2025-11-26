const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

// Optional test for Sprint 1 (will log once when server starts)
pool.getConnection((err, connection) => {
  if (err) {
    console.error("MySQL connection FAILED:", err.message);
  } else {
    console.log("MySQL connection SUCCESS");
    connection.release();
  }
});

module.exports = pool;
