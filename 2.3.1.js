const pool = require("./db");

pool.query(` SELECT  'customer' Caption, first_name, last_name
FROM    customer
UNION  
SELECT  'actor' Caption, first_name, last_name
FROM    actor`, (err,res)=>{
  try {
    console.log(res.rows);
  } catch (err) {
    console.log(err.message);
  }
});