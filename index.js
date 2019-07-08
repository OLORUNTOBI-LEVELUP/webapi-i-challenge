// implement your API here
const express = require("express");
const app = express();
const users = require('./data/db')

app.use(express.json());

app.get('/api/users', (req, res) => {
   users.find()
   .then(users => {
       res.status(201).json(users)
   })
   .catch(() => {
       res.status(500)
       .json({
           error: "'The users information could not be retrieved."
       })
   })
})

app.get('/api/users/:id' ,(req, res) => {
    const { id } = req.params
     users.findById(id)
     .then(user => {
         if(user){
            res.status(201).json(user)
         } else {
            res.status(404)
            .json({
                message: "The user with the specified ID does not exist." 
            })
        
         }
     })
     .catch(() =>{
         res.status(500)
         .json({ error: "The user information could not be retrieved." })
     })
     
        
        
        
            
     
})

app.post('/api/users', (req, res) => {
    const user = {
        name: req.body.name,
        bio: req.body.bio
    };
    if (user.name && user.bio){
        users.insert(user)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(
            res.status(500)
            .json({
                error: "please provide the name and bio for the user......"
            })
        )
    } else {
        res.status(400)
        .json({
            error: "Please provide name and bio for the user."
        })
    }
    
})

app.listen(3000, () => console.log("listening on port 3000") )