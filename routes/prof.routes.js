import express from 'express';
const profrouter = express.Router();
import { usermodel } from '../models/user.model.js';
let professionals = [];
// const user={};
profrouter.get('/book-professionals', async (req, res) => {
    try {
        // Find users who provide services
      
        // console.log("userid in the book professionals route ", userid);
        if(!userid) return res.redirect('/user/login');
        else{
             user= await usermodel.findById(userid);
        }
         professionals = await usermodel.find({ provides_service: true });
// console.log("professionals found ", user);
        res.render('book-professionals', { professionals });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

professionals.forEach(element => {
    console.log(element);
});
export {profrouter, professionals}; 