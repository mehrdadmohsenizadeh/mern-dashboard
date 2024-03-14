// Import mongoose for MongoDB object modeling
import mongoose from "mongoose";
//--------------------------------------------------
// Define the schema for the User model
const userSchema = new mongoose.Schema(
    // Define schema fields for username, email, and password
    {
        username:{
              type: String
            , required: "true"
            , unique: "true"
        },
        email:{
              type: String
            , required: "true"
            , unique: "true"
        },
        password:{
              type: String
            , required: "true"
        },
    },
    // Enable timestamps for createdAt and updatedAt fields
    {
        timestamps: true
    }
);
//--------------------------------------------------
// Create the User model based on the schema
const User = mongoose.model(
      'User'
    , userSchema
);
//--------------------------------------------------
// Export the User model for use in other parts of the application
export default User;