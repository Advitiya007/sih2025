import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

mongoose.connect('mongodb+srv://adi:')

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

