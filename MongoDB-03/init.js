const mongoose = require('mongoose');

const Chat = require("./models/chat.js");

main()
.then(() =>{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Signal');
}

Chat.insertMany([{  
    from:"Yashas",
    to:"Hitesh",
    msg:"Can we meet today",
    created_at: new Date()},
    {
        from:"Y",
        to:"S",
        msg:"I am coming to TTR",
        created_at: new Date()
    },
    {
        from:"X",
        to:"H",
        msg:"Hey!!",
        created_at: new Date()
    },
    {  from:"Y",
        to:"C",
        msg:"All the best!",
        created_at: new Date()
    },
    {  from:"R",
      to:"C",
      msg:"Nice meeting you",
      created_at: new Date()
  }

  ]).then((res) =>{
    console.log(res);
  });  
  
