// Import the User model from the '../models/user.model.js' file
// NOTE: DO NOT FORGET THE FILE EXTENSION .JS 
import User from '../models/user.model.js';

// Import bcrypt for password hashing
// NOTE: DO NOT USE IMPORT { BCRYPT } FROM 'BCRYPT'. IT'S NOT COMPATIBLE.
import bcryptjs from 'bcryptjs';
//--------------------------------------------------
export const signup = async(req, res) => {
    
    const { username, email, password } = req.body;

    // Check if any field is missing or empty
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ error: 'All fields are required!' })
    }

    // Check if username meets length requirements
    if (username.length < 3 || username.length > 20) {
        return res.status(400).json({ error: 'Username must be between 3 and 20 characters long.' });
    }
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Validate username format using regex (alphanumeric characters, underscores, and hyphens)
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    if (!usernameRegex.test(username)) {
        return res.status(400).json({ error: 'Username can only contain alphanumeric characters, underscores, and hyphens.' });
    }
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Check for username uniqueness in the database
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
        return res.status(400).json({ error: 'Username is already taken.' });
    }
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address.' });
    }
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Check for email uniqueness in the database
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        return res.status(400).json({ error: 'Email address is already registered.' });
    }

    // Enforce password complexity requirements
    if (password.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long.' });
    }
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Hash the password before storing it in the database
    const hashedPassword = bcryptjs.hashSync(password, 10);
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Create user account in the database
    const user = new User({
          username: username
        , email: email
        , password: hashedPassword
    });
    // +++++++++++++++++++++++++++++++++++++++++++++
    try {
        await user.save();
        return res.status(201).json({ message: 'User account created successfully.' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}




