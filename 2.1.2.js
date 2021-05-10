const pool = require("./db");

pool.query(`SELECT
rating,
SUM( rental_duration )
FROM
film
GROUP BY
rating
ORDER BY
rating;`, (err,res)=>{
  try {
    console.log(res.rows);
  } catch (err) {
    console.log(err.message);
  }
});

pool.end();