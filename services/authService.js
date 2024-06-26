
const User = require('../models/userModel');

const users = new Map(); // In-memory store for users, replace with a database in production

class AuthService {
  static findOrCreateUser(profile) {
    let user = users.get(profile.id);
    if (!user) {
      user = new User(profile.id, profile.displayName, profile.profileUrl, profile.photos);
      users.set(profile.id, user);
    }
    return user;
  }
}

module.exports = AuthService;
