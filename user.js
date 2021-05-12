const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//CREATE SCHEMA MODEL
const userSchema = new Schema({
  name: String,
  email: String,
  country: String
})



const User = mongoose.model('User', userSchema)
module.exports = User;