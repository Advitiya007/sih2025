import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from "path";
import { signuprouter } from './routes/signup.router';
import { loginrouter } from './routes/login.router.js';

const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/signup',signuprouter);
app.use('/login',loginrouter);


app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

mongoose.connect('mongodb://127.0.0.1:27017/sih2025').then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

