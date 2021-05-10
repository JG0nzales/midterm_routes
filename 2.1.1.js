const pool = require("./db");

pool.query(`SELECT COUNT(*) FROM film`, (err,res) =>{
  try {
    console.log(res.rows);
  } catch (err) {
    console.log(err.message);
  }
});

pool.end();