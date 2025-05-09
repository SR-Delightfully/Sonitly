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

// Helper: Load users from file
function loadUsers() {
  try {
    const data = fs.readFileSync(usersFilePath);
    return JSON.parse(data).users;
  } catch (err) {
    console.error('Error loading users:', err);
    return [];
  }
}

// Helper: Save users to file
function saveUsers(users) {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify({ users }, null, 2));
  } catch (err) {
    console.error('Error saving users:', err);
  }
}

// Login route
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

// Signup route
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

// Spotify OAuth route remains unchanged
app.get('/spotify/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code',
      },
      headers: {
        'Authorization': `Basic ${Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')}`,
      },
    });

    const { access_token } = response.data;

    const userResponse = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const spotifyUser = userResponse.data;

    const token = jwt.sign(
      { email: spotifyUser.email, name: spotifyUser.display_name },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token, spotifyUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during Spotify OAuth' });
  }
});

app.listen(PORT, () => {
  console.log(`🎵💿 Server listening on port ${PORT} 🎶`);
});
