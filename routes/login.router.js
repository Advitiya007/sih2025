import express from 'express';
import { usermodel } from '../models/user.model.js';
const loginrouter = express.Router();

loginrouter.get("/",(req,res)=>{
    res.render("login/");
})
loginrouter.post("/",async (req,res)=>{

    const email = req.body.email;
    const password = req.body.password;

    const usercheck= await usermodel.findOne({password},{email})
    if(!usercheck){
        return res.status(400).json({message:"Invalid credentials"});
    }

    res.redirect("/dashboard");

});

export {loginrouter};