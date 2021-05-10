const pool = require("./db");

pool.query(`select total()`, (err,res)=>{
  try {
    console.log(res.rows);
  } catch (err) {
    console.log(err.message);
  }
});