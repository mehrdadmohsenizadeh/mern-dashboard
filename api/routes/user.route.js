// Import the Express framework for creating routes
import express from 'express';

// Import the 'test' controller function from the user.controllers.js file
import { test } from '../controllers/user.controllers.js';
//--------------------------------------------------
// Create a new router instance using Express
const router = express.Router();

// Define a route for handling GET requests to '/test'
router.get(
      '/test' // Route path
    , test    // Controller function to handle the request
);
//--------------------------------------------------
// Export the router to make it accessible for use in other parts of the application
export default router;
