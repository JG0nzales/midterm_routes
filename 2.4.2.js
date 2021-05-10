const pool = require("./db");


const sql = `select * from store_name`;
pool.query(sql, (err,res)=>{
  try {
    console.log(res.rows);
  } catch (err) {
    console.log(err.message);
  }
});
