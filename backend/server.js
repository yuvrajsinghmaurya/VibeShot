// start server 

// to start server import app.js 
require('dotenv').config();
const pool = require('./src/config/db.js')
const app = require('./src/app.js')

const PORT = process.env.PORT || 3002

async function startServer(){
    try{
        await pool.query('SELECT NOW()');
        console.log('✅ PostgreSQL Connected')

        app.listen(PORT , () =>{
    console.log(`✅ Server is running at http://localhost:${PORT}`);
    
})
    
}catch (error){
    console.error('❌ Database Connection Failed')
    console.error(error.message);
}
}

startServer()
