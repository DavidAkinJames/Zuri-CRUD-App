**TODO CRUD APP**
_/_ TASKS

1.  A POST request to /users to create a new user.
2.  A GET request to /users to fetch all users.
3.  A PUT request to users/:id to update a single user
4.  A DELETE request to /books/:id to delete

I used Mongoose to create the model i.e a schema of the application that consists of name, email and country.

1. For the POST route I made use of the create method that takes a name, an email and a country also with a call back with a error and the user that is to be created.

2. GETS METHOD ROUTE
   Here we have 3 methods to fetch a user or users they all achieve the same purpose except using the .findOneById method is to retrieve a user by the ID
   /_
   Model.find => fetches multiple documents
   Model.findOne => fetches a single documents
   Model.findById => fetches a single document by ID
   _/

3. PUTS METHOD ROUTES
   This also has 2 methods to update a user. You can update a user by ID or just by the single user
   Model.findOneAndUpdate
   Model.findByIdAndUpdate

4. DELETE METHOD
   we can delete a user using any of these methods.
   Model.findOneAndDelete
   Model.findByIdAndDelete
   Model.findOneAndRemove
   Model.findByIdAndRemove
