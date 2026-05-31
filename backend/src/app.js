// create server 

const cors = require('cors')
const express = require('express');
const authRoutes = require('./routes/auth.routes')
const reelRouter = require('./routes/reel.routes')

const app = express();

app.use(express.json());
// add cors 
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// create routh 
app.get("/" ,(req , res) =>{
    res.send("hello" )
})

app.use('/api/auth' , authRoutes)
app.use('/api/reels', reelRouter)


module.exports = app;