// Import the dotenv module for environment variable management
import dotenv from 'dotenv'; 

// Import the Express web application framework
import express from 'express'; 

// Import the Mongoose library for MongoDB object modeling
import mongoose from 'mongoose'; 
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

// Start the Express server
app.listen(3000, () => {
    // Log message when the server starts listening on port 3000
    console.log('Server is running on port 3000!'); 
});
