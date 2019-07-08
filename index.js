// implement your API here
const express = require("express");
const app = express();

app.use(express.json());

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