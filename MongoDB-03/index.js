const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
app.use(express.urlencoded({ extended: true }));


main()
.then(() =>{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Signal');
}

//Index route:
app.get("/chats", async (req,res) =>{
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs",{chats});
});

//New Route:
app.get("/chats/new", (req,res) =>{
  res.render("new.ejs");
})

// Create Route:
app.post("/chats", (req, res) => {
  console.log(req.body); // Check if 'from', 'to', and 'msg' are being received
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  // Below is used to save info to database
  newChat
  .save()
  .then(res =>
    {console.log("chat was saved")
    })
  .catch((err) =>{
    console.log(err);
  });
  res.redirect("/chats"); 
  // used to redirect from /chats/new to chats
});

//Edit route:
app.get("/chats/:id/edit",async (req,res) =>{
  let {id} = req.params;  // something new
  let chat = await Chat.findById(id);
  res.render("edit.ejs",{chat});
});


app.get('/', (req, res) => {
    res.send('Root is working!');
  });

app.listen(8080,() =>{
    console.log("Server is listening on port 8080");
});