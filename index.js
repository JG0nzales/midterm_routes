const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.post("/gonzalesgustilo_routes1", async(req,res)=>{
  try {
    // console.log("got in");
    // console.log(req.body);
    // res.json(req.body);

    const franchise=req.body; //{id: 2, name: 'YukiShiro'}
    //console.log(">>>", franchise);
    const newStore = await pool.query(`
      insert into store_name (id, name)
      values($1,$2) RETURNING *;
    `,[franchise.id, franchise.name]);

    res.json(newStore.rows[0]);

  } catch (err) {
    console.log(err.message);
  }
});


app.get("/gonzalesgustilo_route2.1.1", async (req,res) =>{
  try{
      const q1 = `SELECT COUNT(*) FROM film`;
      const query1 = await pool.query(q1);
      res.json(query1);
  }
  catch(err){
      console.error(err.message);
  }
});

app.get("/gonzalesgustilo_route2.1.2", async (req,res) =>{
  try{
      const q1 = `SELECT
      rating,
      SUM( rental_duration )
      FROM
      film
      GROUP BY
      rating
      ORDER BY
      rating;`;
      const query1 = await pool.query(q1);
      res.json(query1);
  }
  catch(err){
      console.error(err.message);
  }
});

app.get("/gonzalesgustilo_route2.1.3", async (req,res) =>{
  try{
      const q1 = `SELECT
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
      title;`;
      const query1 = await pool.query(q1);
      res.json(query1);
  }
  catch(err){
      console.error(err.message);
  }
});

app.get("/gonzalesgustilo_route2.2.1", async (req,res) =>{
  try{
      const q1 = `select * from midterm_list_of_films`;
      const query1 = await pool.query(q1);
      res.json(query1);
  }
  catch(err){
      console.error(err.message);
  }
});

app.get("/gonzalesgustilo_route2.2.2", async (req,res) =>{
  try{
      const q1 = `select * from midterm_total_films_per_category`;
      const query1 = await pool.query(q1);
      res.json(query1);
  }
  catch(err){
      console.error(err.message);
  }
});

app.get("/gonzalesgustilo_route2.3.1", async (req,res) =>{
  try{
      const q1 = ` SELECT  'customer' Caption, first_name, last_name
      FROM    customer
      UNION  
      SELECT  'actor' Caption, first_name, last_name
      FROM    actor`;
      const query1 = await pool.query(q1);
      res.json(query1);
  }
  catch(err){
      console.error(err.message);
  }
});

app.get("/gonzalesgustilo_route2.3.2", async (req,res) =>{
  try{
      const q1 = ` SELECT 
      C.CATEGORY_ID,
      C.NAME,
      FC.FILM_ID,
      FC.LAST_UPDATE
      FROM CATEGORY C
      INNER JOIN FILM_CATEGORY FC
      USING(category_id)`;
      const query1 = await pool.query(q1);
      res.json(query1);
  }
  catch(err){
      console.error(err.message);
  }
});

app.get("/gonzalesgustilo_route2.4.1", async (req,res) =>{
  try{
      const q1 = `select total()`;
      const query1 = await pool.query(q1);
      res.json(query1);
  }
  catch(err){
      console.error(err.message);
  }
});

app.get("/gonzalesgustilo_route2.4.2", async (req,res) =>{
  try{
      const q1 = `select * from store_name`;
      const query1 = await pool.query(q1);
      res.json(query1);
  }
  catch(err){
      console.error(err.message);
  }
});

app.get("/gonzalesgustilo_route2.1.1", async (req,res) =>{
  try{
      const q1 = `SELECT COUNT(*) FROM film`;
      const query1 = await pool.query(q1);
      res.json(query1);
  }
  catch(err){
      console.error(err.message);
  }
});



app.listen(5000, ()=>{
  console.log("Server starts on port 5000");
});



