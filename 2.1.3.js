const pool = require("./db");

pool.query(`SELECT
film_id,
title
FROM
film
WHERE
replacement_cost =(
  SELECT
    MAX( replacement_cost )
  FROM
    film
)
ORDER BY
title;`, (err,res)=>{
  try {
    console.log(res.rows);
  } catch (err) {
    console.log(err.message);
  }
});