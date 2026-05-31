// create server 


const express = require('express');

const app = express()

// create routh 
app.get("/" ,(req , res) =>{
    res.send("hello" )
})


module.exports = app;