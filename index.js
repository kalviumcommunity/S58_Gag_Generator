const express=require ("express");
const app= express();
const port=8699;

app.get("/ping",(req,res)=>{
    res.send("Pong")
})

app.listen(port,()=>{
    console.log (`server is running on ${port}`)
})

