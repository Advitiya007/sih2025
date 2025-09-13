import express from 'express';
import { usermodel } from '../models/user.model.js';
const loginrouter = express.Router();

loginrouter.get("/",(req,res)=>{
    res.render("login");
})
loginrouter.post("/",async (req,res)=>{

    const email = req.body.email;
    const password = req.body.password;
//  password should be compared by bcrpyt to check authetciate user 
const token= await usermodel.matchpasswordandsendtoken({email},{password});

    if(!token){
        throw new Error("wrong pass");

    }
    console.log(" m=logged in succesfully now we re redirceting to the main dashbaord field ")
    console.log("token in the login oae " , token);
    
    // res.redirect("http://127.0.0.1:5500/backend/index.html");
    return res.cookie("token",token).redirect("http://127.0.0.1:5500/backend/index.html")

});

export {loginrouter};