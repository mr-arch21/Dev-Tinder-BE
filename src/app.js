const express=require('express');
const app=express();
const {auth}=require("./middlewares/auth")

app.use("/admin",auth);
app.get("/admin/getData",(req,res)=>{
    res.send("all data send")
})
app.get("/admin/deleteuser",(req,res)=>{
    res.send("user deleted successfully");
})
app.use("/user",(req,res,next)=>{
    console.log("this is response1");
    // res.send("this is router1");
    next();
},(req,res)=>{
    res.send("this is router 2");
})

// app.use("/test",(req,res)=>{
//     res.send("Hello from server");
// })
// app.use("/hello",(req,res)=>{
//     res.send("Hello ji request from server");
// })
// app.use("/",(req,res)=>{
//     res.send("baap")
// })
app.listen(4500,()=>{
    console.log("server is running successfully on port 4500");
})