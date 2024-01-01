var express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user')
const path = require('path');
var router = express.Router();

const secretKey = 'your-secret-key';
const saltRounds = 10;

router.use("/", express.static(path.join(__dirname, '../auth-build')))

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,"../auth-build/index.html"))
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({ username }, secretKey);
            res.cookie('jwtToken', token, {
                httpOnly: true,
            });

            res.json({ message: 'Login successful' });
        }
        else {
            res.status(401).json({ message: 'Invalid Password' });
        }
    } else {
        res.status(401).json({ message: 'Invalid Username' });
    }
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        username,
        password: hashedPassword,
    });

    try {
        console.log(newUser)
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log('Error saving user to MongoDB:', error);
        res.status(500).json({ message: 'Error registering user' });
    }
});

module.exports = router;