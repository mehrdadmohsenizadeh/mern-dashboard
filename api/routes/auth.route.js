// // Import the Express framework for creating routes
import express from 'express'

// Import the 'signup' controller function from the 'auth.controller.js' file
// NOTE: DO NOT FORGET TO ADD THE FILE EXTENSION '.JS' 
import { signup } from '../controllers/auth.controller.js'
//--------------------------------------------------
// Define a route for handling POST requests to '/signup'
const router = express.Router()

router.post(
      '/signup' // Route path
    , signup    // Controller function to handle the request
);
//--------------------------------------------------
// Export the router to make it accessible for use in other parts of the application
export default router;