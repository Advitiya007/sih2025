import express from 'express';
import { usermodel } from '../models/user.model.js';
const loginrouter = express.Router();

loginrouter.get("/", (req, res) => {
    res.render("login");
});

loginrouter.post("/", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log("In the login POST route", req.body);

        // Check password & get token
        const token = await usermodel.matchpasswordandsendtoken(email, password);

        if (!token) {
            // Instead of throwing error, send a response
            return res.status(401).send("Wrong email or password");
        }

        console.log("Logged in successfully, now redirecting to dashboard");
        console.log("Token in the login page:", token);

        // Send cookie and redirect
        return res.cookie("token", token).redirect("/dashboard");
        
    } catch (error) {
        console.error("Login error:", error);
        next(error); // Forward error to Express error handler
    }
});

export { loginrouter };
