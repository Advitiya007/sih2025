import express from 'express';
import {usermodel} from '../models/user.model.js';
import { professionals } from './prof.routes.js';
const router = express.Router();

// GET: Show dashboard
router.get('/', async (req, res) => {

res.render('dashboard',{professionals});
})
router.get('/edit', async (req, res) => {
    const userid = req.session.userId;

    if (!userid) return res.redirect('/login');

    const user = await usermodel.findById(userid);
    res.render('dashboard1', { user });
});

// GET: Edit personal information
router.get('/edit-profile', async (req, res) => {
    const userId = req.session.userId;
    if (!userId) return res.redirect('/login');

    const user = await usermodel.findById(userId);
    res.render('edit-profile', { user });
});

// POST: Update profile
// router.post('/update-profile', async (req, res) => {
//     const userId = req.session.userId;
//     if (!userId) return res.redirect('/login');

//     const { name, profession, location } = req.body;

//     await user.findByIdAndUpdate(userId, { name, profession, location });

//     // res.redir('/main/dashboard');
//     res.render('dashboard1', { user:;
// });

export default router;
