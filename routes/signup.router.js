import express from 'express';
import { usermodel } from '../models/user.model.js';
const signuprouter = express.Router();

signuprouter.get("/",(req,res)=>{
    res.render("signup");
}
)
signuprouter.post("/",async (req,res)=>{
    const {username,email,password}= req.body;
    const usercheck= await usermodel.findOne({email})
    if(usercheck){
        // return res.status(400).json({message:"User already exists"});
        alert("User already exists please login");
        res.redirect("/login");
    }
    else{
        const newuser = await usermodel.create({username, email,password});
    }
    
})

export {signuprouter};