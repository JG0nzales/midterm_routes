const pool = require("./db");

pool.query(` SELECT 
C.CATEGORY_ID,
C.NAME,
FC.FILM_ID,
FC.LAST_UPDATE
FROM CATEGORY C
INNER JOIN FILM_CATEGORY FC
USING(category_id)`, (err,res)=>{
  try {
    console.log(res.rows);
  } catch (err) {
    console.log(err.message);
  }
});