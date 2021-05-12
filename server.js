
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT;
const User = require('./user');
const uri = process.env.MONGODB_URI;
// express app
const app = express();

//Connect to mongodb
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false})
.then((result)=>  app.listen(port, () => console.log(`app is listening on port ${port}`)))
.catch((err) => console.log(err))






//Using Our Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));






//POST ROUTE
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

//GET ROUTE
// GET request to /users to fetch all users
app.get('/add-user', (req, res)=> {
  const user = new User({
    name: 'Micheal Jordan',
    email: 'michealjordan@gmail.com',
    country: 'USA'
  });

  user.save()
  .then((result)=> {
    res.send(result)
  })
  .catch((err) => {
    console.log(err)
  });
})




app.get('/users', (req, res)=> {
  //Fetching all users
  User.find({}, (err, users) => {
    if(err) {
      return res.status(500).json({ message: err })
    } else {
      return res.status(200).json({message: users})
    }
  })
})
//GET request to fetch a single user
app.get('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, user)=> {
    if (err) {
      return res.status(500).json({ message: err})
    }
     else if (!user) {
       return res.status(404).json({ message: "user not found"})
     } 
     else {
      return res.status(200).json({ user })
    }
  })
})

//PUT request to /users/id to update a single user
app.put('/users/:id', (req, res)=> {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email:req.body.email,
    country: req.body.country
  }, (err, user) => {
     if (err) {
      return res.status(500).json({message: err})
    } else  if (!user) {
     return res.status(404).json({message: "book not found"})
    } else {
      user.save((err, savedUser)=> {
        if (err) {
          return res.status(400).json({message: err})
        } else {
          return res.status(200).json({message: "user updated successfully" })
        }
      })
    }
  })
})

//DELETE request to /users/:id to delete
app.delete('/users/:id', (req, res)=> {
  User.findByIdAndDelete(req.params.id, (err, user) =>{
    if(err) {
      return res.status(500).json({message: err})
    } else if (!user) {
      return res.status(404).json({message: "user not found"})
    }
    else {
      return res.status(200).json({message: "user deleted successfully"})
    }
  })
})






