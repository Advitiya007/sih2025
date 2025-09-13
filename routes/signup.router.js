import express from 'express';

const signuprouter = express.Router();

signuprouter.get("/",(req,res)=>{
    res.render("signup/1");
}
)
signuprouter.post("/",async (req,res)=>{
    const {username,email,password}= req.body;
    const usercheck= await username.findOne({email})
    if(usercheck){
        // return res.status(400).json({message:"User already exists"});
        alert("User already exists please login");
        res.redirect("/login");
    }
    else{
        const newuser = await user.createOne({username, email,password});
    }
    
})

export {signuprouter};