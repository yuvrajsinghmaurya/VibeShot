// create server 


const express = require('express');
const authRoutes = require('./routes/auth.routes')


const app = express();

app.use(express.json());

// create routh 
app.get("/" ,(req , res) =>{
    res.send("hello" )
})

app.use('/api/auth' , authRoutes)

module.exports = app;