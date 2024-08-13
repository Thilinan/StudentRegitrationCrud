const express=require("express");
const app=express();
const cors=require("cors");
const mysql=require("mysql");

app.use(cors());



const db=mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

app.listen(8081, () => {
  console.log("listening");
});

app.get("/", (req, res) => {
   const sql = " SELECT * FROM student";
   db.query(sql,(err,data)=>{
    if (err)return res.json("Error");
    return res.json(data);


   })
});





/*app.post('/create',(req,res)=>{
  const sql = "INSERT INTO student('Name','Email')VALUES(?)";
  const values=[
    req.body.name,
    req.body.email
  ]
  db.query(sql,[values],(err,data)=>{
    if(err) return res.json("errr");
    return res.data(data);
  })
})*/


