const mongoose = require('mongoose'); // connect to MongoDB
const initData = require("./data.js"); // sample users
const User = require("../models/user"); // User model

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Alternate_You'); // or your DB name
}

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch(err => console.log(err));

  // initDB(); -> Only run when you want to initialize the database with sample data

// const initDB = async () => {

//   await User.deleteMany({}); // clear existing data
//   await User.insertMany(initData.data); // insert fresh users
//   console.log("Users were initialized");
// };


