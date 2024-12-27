// Template -> blueprint with which we can 1000+ copies of html copies
// e.g- insta page of - google,meta,others they have same template but the content part is different

// npm init -> npm i ejs -> npm i nodemon -> create folder named (views) 

const express = require("express");
const app = express();
const path = require("path"); // vd

const port = 8080;

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views")); // vd

app.get("/hello",(req,res) =>{
  res.send("hello this is yashas!!");
});

app.get("/",(req,res) =>{
  res.render("home.ejs");
});

app.get("/rolldice",(req,res) =>{
  res.render("rolldice.ejs");
});

// getting data from data.json and taking username as input and giving response
app.get("/ig/:username",(req,res) =>{
  let{username}= req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  if(data){
    res.render("insta.ejs",{data});
  }else{
    res.render("error.ejs");
  }
});

app.listen(port,() => {
  console.log(`listening on port ${port}`); 
});




// more info ->

// view -> used to create templates
// app.get (res.send) is used to receive request and send response (for small file)
// app.get (res.render(home.ejs)) is used to send big files
// nodemon Backend-03/index.js -> You can run node outside the directory at web dev
// to get response outside Backend-03 -> must use view directory (vd)
// more info on ejs tag -> ejs.co 
// {username} -> is variable which value changes

