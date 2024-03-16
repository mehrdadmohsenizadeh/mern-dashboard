// Error Handler Utility Function
export const errorHandler = (statusCode, message) => {

    // Create a new Error object
    const error = new Error();

    // Assign the provided status code and message to the error object
    error.statusCode = statusCode;
    error.message = message;

    // Return the error object
    return error;
};