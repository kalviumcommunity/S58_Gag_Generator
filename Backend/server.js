const express=require ("express");
const app= express();
const dotenv = require ("dotenv");
const { connection,isConnected} = require("./config/DB");
dotenv.config()
const PORT= process.env.PORT || 8808
const mongoose=require ("mongoose")

app.get("/ping",(req,res)=>{
    res.send("Pong")
})

app.get("/",(req,res)=>{
    console.log(mongoose.connection.readystate)
    if (isConnected()){
        res.send("connection status=connected")

    }
    else{
        res.send("connection status=disconnected")
    }

})

app.listen(PORT,async()=>{
    try {
        await connection;
        console.log("connected to database")   
    } catch (error) {
        console.log (error)        
    }
    console.log (`server is running on ${PORT}`)
})

