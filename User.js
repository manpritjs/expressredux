const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  fname:String,
  lname: String,
  email:String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

module.exports = mongoose.model('User', UserSchema);