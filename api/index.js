// Import the dotenv module for environment variable management
import dotenv from 'dotenv'; 

// Import the Express web application framework
import express from 'express'; 

// Import the Mongoose library for MongoDB object modeling
import mongoose from 'mongoose';

// Import user routes from the user.route.js file
import userRoutes from './routes/user.route.js';

// Import authentication routes from the auth.route.js file
import authRoutes from './routes/auth.route.js';
//--------------------------------------------------
// Load environment variables from a .env file into process.env
dotenv.config();
//--------------------------------------------------
// Connect to MongoDB database using Mongoose
mongoose.connect(
    // MongoDB connection string stored in environment variable MONGO
    process.env.MONGO,
)
.then(() => {
    // Log message if the connection is successful
    console.log('MongoDB is connected.');
})
.catch((err) => {
    // Log any errors that occur during database connection
    console.log(err);
});
//--------------------------------------------------
// Create an Express application instance
const app = express();

// Parse incoming request bodies as JSON
app.use(
    express.json()
);

// Start the Express server
app.listen(3000, () => {
    // Log message when the server starts listening on port 3000
    console.log('Server is running on port 3000!'); 
});

// Mount user routes under the '/api/user' path
app.use(
      '/api/user'
    , userRoutes
);

// Mount authentication routes under the '/api/auth' path
app.use(
    '/api/auth'
  , authRoutes
);

// 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Sever Error';
    res.status(statusCode).json({
          success: false
        , statusCode
        , message
    });
});

