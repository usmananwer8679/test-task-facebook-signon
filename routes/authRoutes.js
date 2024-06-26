const express = require('express');
const passport = require('passport');
const AuthController = require('../controllers/authController');

const router = express.Router();

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  AuthController.facebookCallback);

router.get('/logout', AuthController.logout);

module.exports = router;