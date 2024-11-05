const express=require('express');
const app=express();

app.use("/test",(req,res)=>{
    res.send("Hello from server");
})
app.use("/hello",(req,res)=>{
    res.send("Hello ji request from server");
})

app.listen(4500,()=>{
    console.log("server is running successfully on port 4500");
})