const AuthService = require('../services/authService');

class AuthController {
  static facebookCallback(req, res) {
    const user = AuthService.findOrCreateUser(req.user);
    // Store user information in the session
    req.session.user = user;
    res.redirect('/');
  }

  static logout(req, res) {
    req.logout();
    req.session.destroy(() => {
      res.redirect('/');
    });
  }
}

module.exports = AuthController;