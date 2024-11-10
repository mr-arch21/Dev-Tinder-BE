const auth=(req,res,next)=>{
    console.log("authentication will be checked")
    const token="wer"
    isAdminAuthenticated=token==="werd";
    if(!isAdminAuthenticated){
       res.status(401).send("admin is not authorized") 
    }else{
        next();
    }
}
module.exports={
    auth
}