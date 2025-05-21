const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const usersFilePath = path.join(__dirname, '..', 'public', 'data', 'users.json');

function loadUsers() {
  try {
    const data = fs.readFileSync(usersFilePath);
    return JSON.parse(data).users;
  } catch (err) {
    console.error('Error loading users:', err);
    return [];
  }
}

function saveUsers(users) {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify({ users }, null, 2));
  } catch (err) {
    console.error('Error saving users:', err);
  }
}

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = loadUsers();
  const user = users.find((u) => u.user_email === email);

  if (!user || user.user_password !== password) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign(
    { email: user.user_email, name: user.user_name },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token, user }); 
});

app.post('/signup', (req, res) => {
  const { email, password, name } = req.body;
  const users = loadUsers();

  if (users.find((u) => u.user_email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = {
    user_id: users.length ? users[users.length - 1].user_id + 1 : 0,
    user_name: name,
    user_password: password,
    user_email: email,
    user_phone: '',
    user_about_me: '',
    user_friends: [],
    user_followers: [],
    user_following: [],
    user_likes: [],
    user_favorite_song: '',
    user_banner_src: '',
    user_pfp_src: '',
    user_books: [],
    user_music: [],
  };

  users.push(newUser);
  saveUsers(users);

  res.status(201).json({ message: 'Signup successful' });
});

app.get('/api/users/:username', (req, res) => {
  const users = loadUsers();
  const user = users.find(u => u.user_name === req.params.username);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  if (!query) return res.status(400).json({ message: "Query is required." });

  const users = loadUsers();
  
  const productsFilePath = path.join(__dirname, '..', 'public', 'data', 'products.json');
  let products = [];
  
  try {
    const data = fs.readFileSync(productsFilePath);
    products = JSON.parse(data).products;
  } catch (err) {
    console.error('Error loading products:', err);
  }

  const matchedUsers = users.filter(
    user =>
      user.user_name.toLowerCase().includes(query) ||
      user.user_about_me.toLowerCase().includes(query)
  );

  const matchedProducts = products.filter(
    product =>
      product.item_title.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
  );

  res.json({ users: matchedUsers, products: matchedProducts });
});



app.listen(PORT, () => {
  console.log(`🎵💿 Server listening on port ${PORT} 🎶`);
});
