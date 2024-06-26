require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
require('./config/passportConfig'); // Load Passport configuration

const app = express();

// Express session setup
app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());

// Use authentication routes
app.use(authRoutes);

app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Hello, ${req.user.displayName}`);
  } else {
    res.send('Hello, Guest');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});