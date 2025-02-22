const express = require('express')
const app = express()
const mongoose = require('mongoose');
// const path = require("path");
const Listing = require("./models/listing.js");

// app.set("veiws", path.join(__dirname,"views"));
// app.set("view engine","ejs");
// app.use(express.static(path.join(__dirname,"public")));

main()
.then(() =>{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/WanderLust');
}

app.get("/",(req,res) =>{
    res.send("Hi, I am root");
});

app.get("/testListing",async (req,res) =>{
    let sampleListing = new Listing({
        title:"My New Villa",
        description:"By the Sea",
        price:"1200",
        location:"Goa",
        country:"India"
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("Successful testing");
});

app.listen(8080,() =>{
    console.log("Server is listening to port 8080");
});