const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express')
const app = express()
const path = require("path");

app.set("View engine","ejs");
app.set("veiws",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'College',
  password:"Yashu@2005",
});


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Home Route -> count of user
app.get("/",(req,res) =>{
  let q ="SELECT count(*) FROM user";
  try{
  connection.query(q,(err,result)=> {
  if (err) throw err;
  let count = result[0]["count(*)"];
  res.render("home.ejs",{count});
});
} catch(err){
  console.log(err);
  res.send("Some error in DB");
}
});

// Show route -> user data is displayed
app.get("/user",(req,res) =>{
  let q ="SELECT * FROM user";
  try{
  connection.query(q,(err,users)=> {
  if (err) throw err;
  res.render("show.ejs",{users});
});
} catch(err){
  console.log(err);
  res.send("Some error in DB");
}
});

//Edit Route
app.get("/user/:id/edit",(req,res) =>{
  let {id} = req.params;
  let q ="SELECT * FROM user WHERE id=${id}";
  try{
  connection.query(q,(err,result)=> {
  if (err) throw err;
  let user = result[0];
  res.render("edit.ejs",{user});
});
} catch(err){
  console.log(err);
  res.send("Some error in DB");
}
});

app.listen("8080",() =>{
  console.log("Server is listening to port 8080");
});


// To insert in bulk -> get data from faker of 100 user using for loop - it is pushed to query by connection


// Need to watch edit and Update route