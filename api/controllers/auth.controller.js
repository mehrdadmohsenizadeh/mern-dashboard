// Import the User model from the '../models/user.model.js' file
// NOTE: DO NOT FORGET TO ADD THE FILE EXTENSION '.JS' 
import User from '../models/user.model.js';

// Import the 'errorHandler' function from the '../utils/error.js' file
import { errorHandler } from '../utils/error.js';

// Import bcrypt for password hashing
// NOTE: DO NOT USE THE IMPORT { BCRYPT } FROM 'BCRYPT' COMMAND. IT'S INCOMPATIBLE.
import bcryptjs from 'bcryptjs';

// Import zxcvbn library into your signup controller to evaluate the password strength
import zxcvbn from 'zxcvbn';
//--------------------------------------------------
export const signup = async(req, res, next) => {
    
    const { username, email, password } = req.body;

    // +++++++++++++++++++++++++++++++++++++++++++++
    //                  ALL FIELDS
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Check if any field is missing or empty (Input validation)
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(
              400
            , 'All fields are required'
        ));
    }
    // +++++++++++++++++++++++++++++++++++++++++++++
    //                  USERNAME
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Check if username meets length requirements
    if (username.length < 3 || username.length > 20) {
        next(errorHandler(
              400
            , 'Username must be between 3 and 20 characters long.'
        ));
    }

    // Validate username format using regex:
    // [a-zA-Z0-9_-]+ : Alphanumeric characters (a-zA-Z0-9), underscores (_), and hyphens (-)
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    if (!usernameRegex.test(username)) {
        next(errorHandler(
              400
            , 'Username can only contain alphanumeric characters, underscores, and hyphens.'
        ));
    }

    // Check for username uniqueness in the database
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
        next(errorHandler(
              400
            , 'Username is already taken.'
        ));
    }
    // +++++++++++++++++++++++++++++++++++++++++++++
    //                    EMAIL
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Validate email format using regex:
    // [^\s@]+ : Starts with one or more characters that are not whitespace or "@"
    // @       : Followed by "@" symbol.
    // [^\s@]+ : Followed by one or more characters that are not whitespace or "@"
    // \.      : Matches a literal dot "." character.
    // [^\s@]+ : Ends with one or more characters that are not whitespace or "@"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        next(errorHandler(
              400
            , 'Invalid email address.'
        ));
    }

    // Check for email uniqueness in the database
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        next(errorHandler(
              400
            , 'Email address is already registered.'
        ));
    }
    // +++++++++++++++++++++++++++++++++++++++++++++
    //                  PASSWORD
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Enforce password complexity requirements

    // Define variables to track whether each condition has been met
    const hasMinLength   = password.length >= 8;
    const hasUppercase   = /[A-Z]/.test(password);
    const hasLowercase   = /[a-z]/.test(password);
    const hasDigit       = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password); // Add more special characters as needed

    const errorMessageLines = [
        "Password must meet the following criteria:",
        `${hasMinLength   ? '✔️' : '❌'} Be at least 8 characters long`,
        `${hasUppercase   ? '✔️' : '❌'} Contain at least one uppercase letter`,
        `${hasLowercase   ? '✔️' : '❌'} Contain at least one lowercase letter`,
        `${hasDigit       ? '✔️' : '❌'} Contain at least one digit`,
        `${hasSpecialChar ? '✔️' : '❌'} Contain at least one special character`
    ];
    
    const errorMessage = errorMessageLines.join('\n');

    // Display the error message
    next(errorHandler(400, errorMessage));
    // ****************************************************
    // Check for repeated characters (e.g., 'Yeeera111!')
    if (/(\w)\1{2,}/.test(password)) {
        next(errorHandler(
              400
            , 'Password cannot contain 3 or more repeated characters.'
        ));
    }

    // // Check for sequential characters (e.g., '12345678')
    // const sequentialRegex = /(123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i;
    // if (sequentialRegex.test(password)) {
    //     next(errorHandler(
    //           400
    //         , 'Password cannot contain sequential characters.'
    //     ));
    // }

    // Evaluate password strength using zxcvbn
    const passwordStrength = zxcvbn(password);

    // Check the password score
    if (passwordStrength.score < 3) {
        return next(errorHandler(
              400
            , 'Password is too weak. Please choose a stronger password.'
        ));
    }
    
    // Hash the password before storing it in the database
    const hashedPassword = bcryptjs.hashSync(password, 10);
    // +++++++++++++++++++++++++++++++++++++++++++++
    //                USER ACCOUNT
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Create user account in the database
    const newUser = new User({
          username: username
        , email: email
        , password: hashedPassword
    });
    // +++++++++++++++++++++++++++++++++++++++++++++
    //               ERROR HANDLING
    // +++++++++++++++++++++++++++++++++++++++++++++
    // Send success response
    try {
        await newUser.save();
        return res.status(201).json({
            message: 'User account created successfully.'
        });
    }
    // Pass any caught errors to the error handling middleware
    catch (error) {
        next(error);
    }
};




