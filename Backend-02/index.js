// Express -> request, response and router (RRR) from server side 

const express = require('express');
const app = express();

// port -> logical endpoint which is used to connect web client and web server

let port = 8080;

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  });

  // app.use((req,res) => {
  //   // console.log(req);
  //   console.log('request received');
  //   res.send("Basic response for an request");
  // });


app.get("/",(req,res) => {
  res.send("Hello,I am root");
})

app.get("/apple",(req,res) => {
  res.send("You have contacted apple path");
})

app.get("/mango",(req,res) => {
  res.send("You have contacted mango path");
})

app.get("/:username/:id",(req,res) =>{
res.send("Welcome to the page of @${username}");
})
  // listen to request sent from client
  // res.send is used to send response for the request