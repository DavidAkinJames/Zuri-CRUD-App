/*  TASKS 
  1.  A POST request to /users to create a new user.
  2.  A GET request to /users to fetch all users.
  3.  A PUT request to users/:id to update a single user
  4.  A DELETE request to /books/:id to delete
*/



const express = require('express');
const app = express();
const port = 4000;

//Setting Up Mongoose 
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/userapp';

//Using Our Middleware
app.use(express.json())


mongoose.connect(connectionString , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Database connection successful')
  }
})

//CREATE SCHEMA MODEL
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  country: String
})

const User = mongoose.model('User', userSchema)

//POST request to /users to create a new user
app.post('/users', (req,res)=> {
   //Retrieve new book from req.body
  

   User.create({
     name: req.body.name,
     email: req.body.email,
     country: req.body.country
   },(err, newUser) => {
      if(err) {
        return res.status(500).json({message: err})
      } else {
        return res.status(200).json({message: "New user created", newUser})
      }
   })

})










app.listen(port, () => console.log(`app is listening on port ${port}`))