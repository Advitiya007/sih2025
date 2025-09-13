import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from "path";
import { signuprouter } from './routes/signup.router.js';
import { loginrouter } from './routes/login.router.js';
import { profrouter } from './routes/prof.routes.js';
import { registerrouter } from './routes/register.router.js';
import router from './routes/edit-profile.js';
const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',registerrouter);
app.use("/dashboard",router);
app.use('/user/signup',signuprouter);
app.use('/user/login',loginrouter);
app.use('/',profrouter);
app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));
app.use(express.static('public'));
mongoose.connect('mongodb://127.0.0.1:27017/sih2025').then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

