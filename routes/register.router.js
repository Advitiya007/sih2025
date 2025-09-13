import express from 'express';
import { usermodel } from '../models/user.model.js';
const registerrouter = express.Router();
registerrouter.get('/register', (req, res) => {
    res.render('register');
});
registerrouter.post('/register', async (req, res) => {
    try {
        const { username, email, password, profileImage, profession, location, services } = req.body;
        console.log("in the register post route", req.body);

        // Check if user exists
        let user = await usermodel.findOne({ email });

        if (user) {
            // User exists → update
            user.username = username;
            user.password = password; // Ideally hash
            user.provides_service = true;
            user.profileImage = profileImage;
            user.profession = profession;
            user.location = location;
            user.services = services ? services.split(',').map(s => s.trim()) : [];

            await user.save();
            console.log("User updated");
        } else {
            // User does not exist → create
            user = await usermodel.create({
                username,
                email,
                password, // Ideally hash
                provides_service: true,
                profileImage,
                profession,
                location,
                services: services ? services.split(',').map(s => s.trim()) : []
            });
            console.log("New user created");
        }

        // Fetch all professionals for rendering
        const professionals = await usermodel.find({ provides_service: true });

        return res.render("book-professionals", { professionals });
    } catch (err) {
        console.error(err);
        return res.status(400).send('Error registering user: ' + err.message);
    }
});
export { registerrouter };
