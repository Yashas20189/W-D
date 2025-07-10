
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const User = require('./models/user.js'); // swapped Listing with User
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");

app.use(express.urlencoded({ extended: true }));
// Add them later 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);


// Connecting to the database
main()
  .then(() => {
    console.log('Connection successful');
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Alternate_You');
}

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});

// Root Route
app.get('/', (req, res) => {
  res.send('Hi, I am root');
});

// Index Route: Display all users
app.get('/users', async (req, res) => {
  const allUsers = await User.find({});
  res.render('users/index.ejs', { allUsers });
});

// **New Route**: Form for a new user
app.get('/users/new', (req, res) => {
  res.render('users/new.ejs');
});

// **Show Route**: Display a single user
app.get('/users/:id', async (req, res) => {
  let { id } = req.params;
  const user = await User.findById(id);
  res.render('users/show.ejs', { user });
});

// **Create Route**: Create a new user
app.post('/users', async (req, res) => {
  const newUser = new User(req.body.user); // expects user[username], user[email], etc.
  await newUser.save();
  res.redirect('/users'); // Redirect after successful creation
});


// **Edit Route**: Form for editing a user
app.get('/users/:id/edit', async (req, res) => {
  let { id } = req.params;
  const user = await User.findById(id);
  res.render('users/edit', { user });
});

// **Update Route**: Process form to update the user
app.put("/users/:id", async (req, res) => {
  let { id } = req.params;
  await User.findByIdAndUpdate(id, { ...req.body.user });
  res.redirect(`/users/${id}`);
});


// **Delete Route**: Delete a user
app.delete('/users/:id', async (req, res) => {
  let { id } = req.params;
  await User.findByIdAndDelete(id);
  res.redirect('/users');
});
