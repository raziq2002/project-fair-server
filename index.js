require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router =require('./routes/router')
require('./config/connection')

const pfServer =  express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)

const PORT = 3000  || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Project Fair Server Started at Port : ${PORT} and waiting for client request!!`);
    
})

//http://localhost:3000/ -get

pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:black" > project fair server started and waiting for client request</h1>` )
})

